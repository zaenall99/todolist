// Ambil elemen input dan tombol
const inputTugas = document.getElementById("tugas");
const selectLevel = document.getElementById("level");
const inputDeadline = document.querySelector(".tugas input[type='date']");
const btnTambah = document.querySelector(".btnTambah");
const btnHapusAll = document.querySelector(".btnHapusAll");
const listTugas = document.querySelector(".listTugas");

// Event tombol tambah
btnTambah.addEventListener("click", function(e){
    e.preventDefault(); // Mencegah halaman refresh

    // Cek jika tugas kosong
    if(inputTugas.value.trim() === ""){
        alert("Tulis tugas dulu ya!");
        return;
    }

    // Buat elemen pembungkus tugas
    const item = document.createElement("div");
    item.classList.add("item-tugas");

    // Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Teks tugas
    const teks = document.createElement("span");
    teks.textContent = `${inputTugas.value} | ${selectLevel.value} | Deadline: ${inputDeadline.value}`;

    // Tombol delete
    const btnDelete = document.createElement("button");
    btnDelete.textContent = "Delete";
    btnDelete.classList.add("deleteBtn");

    // Susun
    item.appendChild(checkbox);
    item.appendChild(teks);
    item.appendChild(btnDelete);
    listTugas.appendChild(item);

    // Reset input
    inputTugas.value = "";
    selectLevel.value = "low";
    inputDeadline.value = "";

    // Event delete → hanya jika checkbox dicentang
    btnDelete.addEventListener("click", function(){
        if(checkbox.checked){
            item.remove();
        } else {
            alert("Centang dulu sebelum dihapus!");
        }
    });
});

// Event tombol hapus semua
btnHapusAll.addEventListener("click", function(){
    listTugas.innerHTML = "";
});
