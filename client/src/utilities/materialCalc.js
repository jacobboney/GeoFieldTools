

function MaterialCalc(id, diam, start, end, material) {
    const height = end - start;
    const volume = volumeCalc(diam, height);
    let materialMultiplier;
    let amount;

    if(material === "Bentonite"){
        materialMultiplier = chipBagsPerFoot(diam);
        amount = height * materialMultiplier;
    }
    else if(material === "Grout"){
        materialMultiplier = cementSacksPerFoot(diam);
        amount = height * materialMultiplier;
    }
    else{
        materialMultiplier = 1;
        amount = volume;
    }

    console.log(id, diam, start, end, material, "From materialCalc");

    return (
        {id: id, volume: volume, amount: amount}
    );
};

function volumeCalc(diam, height) {
    const pi = Math.PI;
    const radius = (diam / 2) / 12;
    return pi * Math.pow(radius, 2) * height;
};

function chipBagsPerFoot(diam){
    const volPerFoot = volumeCalc(diam, 1);

    return volPerFoot / 0.74;
};

function cementSacksPerFoot(diam){
    const volPerFoot = volumeCalc(diam, 1);

    return ((volPerFoot / 1.1) * 2);
};



export default MaterialCalc;