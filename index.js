function insert(num) {
  $('.view-calc').val($('.view-calc').val() + num);
}
function equal() {
  $('.view-calc').val(eval($('.view-calc').val()));
}
function c() {
  $('.view-calc').val('');
}
function remove() {
  value = $('.view-calc').val();
  $('.view-calc').val(value.substring(0, value.length - 1));
}