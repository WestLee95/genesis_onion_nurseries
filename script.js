function calculateSeedlings() {
    let spacing = parseFloat(document.getElementById("spacing").value);
    let bedLength = parseFloat(document.getElementById("bedLength").value) * 100; // Convert meters to cm
    let driplines = parseInt(document.getElementById("driplines").value);
    let beds = parseInt(document.getElementById("beds").value);

    if (isNaN(spacing) || isNaN(bedLength) || isNaN(driplines) || isNaN(beds) || spacing <= 0 || bedLength <= 0 || driplines <= 0 || beds <= 0) {
        document.getElementById("seedlingsResult").innerText = "Please enter valid numbers.";
        return;
    }

    let totalSeedlings = Math.floor((bedLength / spacing) * (2 * driplines) * beds);
    document.getElementById("seedlingsResult").innerText = `Total Seedlings: ${totalSeedlings.toLocaleString()}`;
    document.getElementById("seedlingsCount").value = totalSeedlings;
    calculateCost();
}


function calculateCost() {
    let seedlings = parseInt(document.getElementById("seedlingsCount").value);
    let cost = seedlings * 0.8;

    if (isNaN(seedlings) || seedlings < 0) {
        document.getElementById("costResult").innerText = "Enter a valid number of seedlings.";
        return;
    }

    document.getElementById("costResult").innerText = `Total Cost: ${cost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} shs`;
}
