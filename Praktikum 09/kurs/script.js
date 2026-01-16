const inp_valas = document.getElementById("valas");
    const inp_nilai = document.getElementById("nilai");
    const rupiah = document.getElementById("rupiah");

    const kurs = {
        "USD": 16625,
        "AUD": 10935,
        "MYR": 4027,
        "JPY": 106,
        "CNY": 2351
    };

    function convert() {
        const valas = inp_valas.value;
        const nilai = parseFloat(inp_nilai.value);

        if (kurs[valas] && !isNaN(nilai)) {
            const hasil = kurs[valas] * nilai;
            rupiah.value = hasil.toLocaleString('id-ID', {
                style: 'currency',
                currency: 'IDR'
            });
        } else {
            rupiah.value = "";
        }
    }

    inp_valas.addEventListener("change", convert);
    inp_nilai.addEventListener("input", convert);

    window.onload = convert;