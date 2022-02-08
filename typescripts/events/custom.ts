let div: HTMLElement | null = document.getElementById("my_div");

let c_event = new CustomEvent<number>("build", {detail: 3});

div.addEventListener("build", function(e: CustomEvent<number>) { // change here Event to CustomEvent
    console.log(e.detail);
}.bind(this));

div.dispatchEvent(c_event);