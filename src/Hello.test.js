import React from "react";
function hello(props){
    return <h1>Hello at {props.now}</h1>
}

const moment = new Date(123123123);
describe("When testing direclty", ()=> {
    let result;
    beforeAll(() => {
        result = hello({now: moment.toISOString()})
    });
    it("return a value", () => {
        expect(result).not.toBeNull();
    })
    it("is a h1", () => {
        expect(result.type).toBe('h1');
    })
    it("has a children", () => {
        expect(result.props.children).toBeTruthy();
    })
})