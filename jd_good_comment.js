//初次评价
var content = '材质很好，质量也不错，到货也很快物流满分，包装快递满分，配送员态度满分，大家都很好，好评！！！';function a(){var close=document.getElementsByClassName('btn-9 fail-close');if(close.length>0){close[0].click()}var assess=document.getElementsByClassName('btn-9')[0];if(assess!=null){for(var i=0;i<2;i++){assess.click();var area=document.getElementsByClassName('area area01')[0];area.value=content;area.setAttribute('id','id'+0);$('#id'+0).blur(); var star=document.getElementsByClassName('star5')[0];star.click()}var submit=document.getElementsByClassName('btn-5 mr10 setcomment')[0];submit.click();	setTimeout('a()',8000)}};a();

//追评图片
function a(){var close=document.getElementsByClassName('btn-9');if(close.length > 0){close[0].click();var imgs = document.getElementsByName('imgs1')[0];if (imgs != null) {imgs.value = "//img30.360buyimg.com/shaidan/jfs/t1/6705/38/12113/103591/60c24cabEc36e6ca3/56382fbdaf284ee1.jpg";var submit = document.getElementsByClassName('btn-5 mr10 setcomment')[0];submit.click();time = setTimeout('a()', 8000)}}else{clearTimeout(time);}};a();
