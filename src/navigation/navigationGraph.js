export const navigationGraph = {
    rector: ["corridor1"],

    corridor1: ["rector", "corridor2"],
    corridor2: ["corridor1", "corridor3"],
    corridor3: ["corridor2", "prorector"],

    prorector: ["corridor3"],

    //
    museum: ["corridor_m1"],

    corridor_m1: ["museum", "corridor_m2"],
    corridor_m2: ["corridor_m1", "corridor_m3"],
    corridor_m3: ["corridor_m2", "rectorsroom"],

    rectorsroom: ["corridor_m3"],

    //
    a17: ["a17_exit"],

    a17_exit: ["a17", "corridor_1", "cafe"],
    corridor_1: ["a17_exit", "a16", "a15_exit"],

    a16: ["corridor_1"],
    a15_exit: ["corridor_1", "a15"],

    a15: ["a15_exit"],

    //
    cafe: ["a17_exit"],
};