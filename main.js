function openNav() {
  document.getElementById("mySidenav").style.width = "400px";

	$("#logo").attr("src", "");
    $("#shortname").html("");
    $("#longname").html("");
    $("#currentPrice").html("");
    $("#percentChange").html("");

}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}