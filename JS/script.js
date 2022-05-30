$(document).ready(() => {
  let i = 1;
  let today = new Date();
  document.querySelector("input[type=date]").setAttribute(
    "min", 
    new Date(today.setDate(today.getDate() + 15)).toISOString().split("T")[0]
  );

  $("#dangKy").click(() => {
    $("#modalDangKy").modal();
  })



  kiemTraHoTen = () => {
    let regex = /^[A-Z][a-z]*(\s[A-Z][a-z]*)+$/;
    let text = $("#inpHoTen").val();

    if ( text == "" ) {
      $("#resultHoTen").html("Không được để rỗng");
      return false;
    }
    if ( !regex.test(text) ) {
      $("#resultHoTen").html("Họ tên không hợp lệ");
      return false;
    }
    $("#resultHoTen").html("Đúng");
    return true;
  }
  $("#inpHoTen").blur(kiemTraHoTen);



  kiemTraSoAo = () => {
    let regex = /^[1-9]$/;
    let text = $("#inpSoAo").val();

    if ( text == "" ) {
      $("#resultSoAo").html("Không được để rỗng");
      return false;
    }
    if ( !regex.test(text) ) {
      $("#resultSoAo").html("Số áo không hợp lệ");
      return false;
    }
    $("#resultSoAo").html("Đúng");
    return true;
  }
  $("#inpSoAo").blur(kiemTraSoAo);



  kiemTraCauLacBo = () => {
    let regex = /^[A-Z][a-z0-9]*(\s[A-Z0-9][a-z0-9]*)+$/;
    let text = $("#inpCauLacBo").val();

    if ( text == "" ) {
      $("#resultCauLacBo").html("Không được để rỗng");
      return false;
    }
    if ( !regex.test(text) ) {
      $("#resultCauLacBo").html("Câu lạc bộ không hợp lệ");
      return false;
    }
    $("#resultCauLacBo").html("Đúng");
    return true;
  }
  $("#inpCauLacBo").blur(kiemTraCauLacBo);



  kiemTraNgayTapTrung = () => {
    let text = $("#inpNgayTapTrung").val();

    if ( text == "" ) {
      $("#resultNgayTapTrung").html("Không được để rỗng");
      return false;
    }
    $("#resultNgayTapTrung").html("Đúng");
    return true;
  }
  $("#inpNgayTapTrung").blur(kiemTraNgayTapTrung);



  kiemTraSoDienThoai = () => {
    let regex = /^0\d{3}(-\d{3}){2}$/;
    let text = $("#inpSoDienThoai").val();

    if ( text == "" ) {
      $("#resultSoDienThoai").html("Không được để rỗng");
      return false;
    }
    if ( !regex.test(text) ) {
      $("#resultSoDienThoai").html("Số điện thoại không hợp lệ");
      return false;
    }
    $("#resultSoDienThoai").html("Đúng");
    return true;
  }
  $("#inpSoDienThoai").blur(kiemTraSoDienThoai);



  kiemTraAnhDaiDien = () => {
    let text = $("#inpAnhDaiDien").val();

    if ( text == "" ) {
      $("#resultAnhDaiDien").html("Không được để rỗng");
      return false;
    }
    $("#resultAnhDaiDien").html("Đúng");
    return true;
  }
  $("#inpAnhDaiDien").blur(kiemTraAnhDaiDien);



  $("input[type=button]").click(() => {
    if (
      kiemTraHoTen() &&
      kiemTraSoAo() &&
      kiemTraCauLacBo() &&
      kiemTraNgayTapTrung() &&
      kiemTraSoDienThoai() &&
      kiemTraAnhDaiDien()
    ) {
      $("table > tbody").append(`
        <tr>
          <td>${i++}</td>
          <td>${$("#inpHoTen").val()}</td>
          <td>${$("#inpSoAo").val()}</td>
          <td>${$("#inpCauLacBo").val()}</td>
          <td>${$("#inpNgayTapTrung").val()}</td>
          <td>${$("#inpSoDienThoai").val()}</td>
          <td>${$("#inpAnhDaiDien").val().replace(/C:\\fakepath:\\/, "")}</td>
        </tr>
      `);
    }
  });
})