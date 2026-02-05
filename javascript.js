function showOutcome(scenario) {
    const result = document.getElementById("result");

    if (!result) return;

    if (scenario === "Political Unity") {
        result.innerHTML = `
            <h3>Political Unity</h3>
            <p>A united political system with stronger governance and fewer internal conflicts.</p>
        `;
    } 
    else if (scenario === "Economic Growth") {
        result.innerHTML = `
            <h3>Economic Growth</h3>
            <p>Shared resources and trade routes leading to faster economic development.</p>
        `;
    } 
    else if (scenario === "Social Harmony") {
        result.innerHTML = `
            <h3>Social Harmony</h3>
            <p>Reduced communal violence and stronger cultural integration.</p>
        `;
    }

    /* animation */
    result.classList.remove("fade");
    void result.offsetWidth;
    result.classList.add("fade");
}

document.addEventListener("DOMContentLoaded", function () {

    const slider = document.getElementById("timelineSlider");
    const output = document.getElementById("timelineResult");

    if (!slider || !output) return;

   function showTimeline(year) {
    const output = document.getElementById("timelineOutput");

    let content = "";

    if (year === "1947") {
        content = `
            <h3>1947</h3>
            <p>
                India gains independence without partition, avoiding mass migration
                and communal violence while strengthening national unity.
            </p>
        `;
    }
    else if (year === "1960") {
        content = `
            <h3>1960</h3>
            <p>
                Strong political integration enables Five-Year Plans, industrial
                growth, and agricultural self-sufficiency.
            </p>
        `;
    }
    else if (year === "1980") {
        content = `
            <h3>1980</h3>
            <p>
                Rapid economic expansion, infrastructure development, and
                technological advancement place India among leading economies.
            </p>
        `;
    }
    else {
        content = `
            <h3>2000+</h3>
            <p>
                A united India emerges as a global superpower with cultural,
                economic, and geopolitical influence.
            </p>
        `;
    }

    output.innerHTML = content;
}
});