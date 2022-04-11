import { testInOut } from "./test-utils";

export const capitalizeTests:testInOut[] = [
    {
        input: "foo",
        output: "Foo"
    },
    {
        input: "f",
        output: "F"
    },
    {
        input: "",
        output: ""
    },
]

export const padFrontTests:testInOut[] = [
    {
        input: ["foo", 0, ' '],
        output: "foo"
    },
    {
        input: ["foo", 3, ' '],
        output: "foo"
    },
    {
        input: ["foo", 4, ' '],
        output: " foo"
    },
    {
        input: ["foo", 10, ' '],
        output: "       foo"
    },
    {
        input: ["", 10, ' '],
        output: "          "
    },
    {
        input: ["bar", 10, 'b'],
        output: "bbbbbbbbar"
    },
    {
        input: ["bar", -10, 'b'],
        output: "bar"
    }
]

export const padBackTests:testInOut[] = [
    {
        input: ["foo", 0, ' '],
        output: "foo"
    },
    {
        input: ["foo", 3, ' '],
        output: "foo"
    },
    {
        input: ["foo", 4, ' '],
        output: "foo "
    },
    {
        input: ["foo", 10, ' '],
        output: "foo       "
    },
    {
        input: ["", 10, ' '],
        output: "          "
    },
    {
        input: ["bar", 10, 'r'],
        output: "barrrrrrrr"
    },
    {
        input: ["bar", -10, 'b'],
        output: "bar"
    }
]

