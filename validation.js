function validateForm() {

    //validate for nama
    if (document.forms["form"]["nama"].value == "") {
        alert("Error: Nama Masih Kosong");
        document.forms["form"]["nama"].focus();
        return false;
    }
    if (document.forms["form"]["nrp"].value == "") {
        alert("Error: NRP Masih Kosong");
        document.forms["form"]["nrp"].focus();
        return false;
    }
    if (document.forms["form"]["jurusan"].selectedIndex == 0) {
        alert("Error: jurusan Masih Kosong");
        document.forms["form"]["jurusan"].focus();
        return false;
    }

}