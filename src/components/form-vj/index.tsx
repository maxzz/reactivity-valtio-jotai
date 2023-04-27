import React from "react";

function Caption() {
    return (
        <div className="text-xl">
            <div className="">Caption</div>
            <div className=""></div>
        </div>
    );
}

function Body() {
    return (
        <div className="">Body</div>
    );
}

export function FormValtioJotai() {
    return (
        <div className="h-full grid place-items-center">
            <div className="w-[30rem] min-h-[40rem] border-slate-600 border rounded">
                <Caption />
                <Body />
                index
            </div>
        </div>
    );
}
