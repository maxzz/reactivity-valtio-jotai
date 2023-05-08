import { FieldTyp, LIST_references, LIST_valueAskNames, ReferenceItem, ValueAs, ValueLife } from "@/store/manifest";

function pickRefsList(isPsw: boolean): Record<string, ReferenceItem> { //TODO: move out value <-> index mappers
    return LIST_references[isPsw ? 'psw' : 'txt'];
}

function idx2RefName(v: number, isPsw: boolean) {
    return Object.keys(pickRefsList(isPsw))[v];
}

export function getValueUiState(valueLife: ValueLife, choosevalue: string | undefined) {
    const isBtn = valueLife.fType === FieldTyp.button;
    const isPsw = valueLife.fType === FieldTyp.psw;

    const listAskNames = isBtn ? [] : [...LIST_valueAskNames];
    listAskNames.length && listAskNames.push('-');

    const listValues = choosevalue?.split(':') || [];
    listValues.length && listValues.push('-');

    const listRefs = isPsw || valueLife.fType === FieldTyp.edit ? Object.values(pickRefsList(isPsw)).map((item) => item.f) : [];

    const idxToValues = listAskNames.length;
    const idxToRefs = idxToValues + listValues.length;

    const dropdownAllItems = [...listAskNames, ...listValues, ...listRefs];
    const dropdownIdxs = [...listAskNames.map(() => 0), ...listValues.map(() => idxToValues), ...listRefs.map(() => idxToRefs)];

    dropdownAllItems.at(-1) === '-' && dropdownAllItems.pop();

    const inputText =
        valueLife.isRef
            ? refName2Txt(valueLife.value, isPsw)
            : valueLife.value
                ? valueLife.value
                : valueLife.isNon
                    ? ''
                    : isBtn
                        ? ''
                        : LIST_valueAskNames[valueLife.valueAs];

    const dropdownSelectedIndex =
        valueLife.isRef
            ? idxToRefs + refName2Idx(valueLife.value, isPsw)
            : valueLife.value
                ? listValues.length
                    ? idxToValues + listValues.indexOf(valueLife.value)
                    : -1
                : valueAs2Idx(valueLife.valueAs);

    const showAsRef = valueLife.isRef || !valueLife.value;
    const disabled = isBtn ? true : undefined; //readOnly={valueLife.fType === FieldTyp.list ? true : undefined} // OK but it is too match, admin should have it
    const title = disabled ? 'Buttons have no state value' : valueLife.isRef && refName2Full(valueLife.value, isPsw) || undefined;

    return {
        dropdownAllItems,
        dropdownSelectedIndex,

        context: {
            dropdownIdxs,
            idxToRefs,
            idxToValues,
            listValues,
            isPsw,
        },

        inputText,
        showAsRef,
        disabled,
        title,
    };

    function refName2Idx(value: string | undefined, isPsw: boolean) {
        return value ? pickRefsList(isPsw)[value].i : -1;
    }

    function refName2Txt(value: string | undefined, isPsw: boolean) {
        return value ? pickRefsList(isPsw)[value].s : '';
    }

    function refName2Full(value: string | undefined, isPsw: boolean) {
        return value ? pickRefsList(isPsw)[value].f : ''; //TODO: we can use placeholder on top of input (ingone all events on it) and do multiple lines
    }

    function valueAs2Idx(valueAs: ValueAs) {
        return valueAs === ValueAs.askReuse ? 0 : valueAs === ValueAs.askConfirm ? 1 : valueAs === ValueAs.askAlways ? 2 : 0;
    }
}

type Context = {
    dropdownIdxs: number[];
    idxToRefs: number;
    idxToValues: number;
    listValues: string[];
    isPsw: boolean;
};

export function mapIndexToValueLife(idx: number, v: ValueLife, context: Context): ValueLife {
    const { dropdownIdxs, idxToRefs, idxToValues, listValues, isPsw, } = context;
    const groupIdx = dropdownIdxs[idx];
    if (groupIdx === idxToRefs) {
        return { ...v, value: idx2RefName(idx - idxToRefs, isPsw), isRef: true, valueAs: ValueAs.askReuse, isNon: false, };
    } else if (groupIdx === idxToValues) {
        return { ...v, value: listValues[idx - idxToValues], isRef: false, valueAs: ValueAs.askReuse, isNon: false, };
    } else {
        return { ...v, value: '', isRef: false, valueAs: idx, isNon: false, };
    }
}