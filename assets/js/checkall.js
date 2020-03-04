function myClick1(objStr, fun) {
    var obj1 = document.getElementById(objStr);
    obj1.onclick = fun;
}
	 var hobbies1 = document.getElementsByName("item1");
     // 获取全选/全不选选项
var checkOrCancelAll1 = document.getElementById("checkall1");

// 全选/全不选
myClick1("checkall1", function() {
        if(this.checked){
        for (var i = 0; i < hobbies1.length; i++) {
            hobbies1[i].checked = true;
        }
        }else{
        for (var i = 0; i < hobbies1.length; i++) {
            hobbies1[i].checked = false;
        }
        }
});
function myClick2(objStr, fun) {
    var obj2 = document.getElementById(objStr);
    obj2.onclick = fun;
}
	 var hobbies2 = document.getElementsByName("item2");
     // 获取全选/全不选选项
var checkOrCancelAll2 = document.getElementById("checkall2");

// 全选/全不选
myClick2("checkall2", function() {
        if(this.checked){
        for (var i = 0; i < hobbies2.length; i++) {
            hobbies2[i].checked = true;
        }
        }else{
        for (var i = 0; i < hobbies2.length; i++) {
            hobbies2[i].checked = false;
        }
        }
});
function myClick3(objStr, fun) {
    var obj3 = document.getElementById(objStr);
    obj3.onclick = fun;
}
	 var hobbies3 = document.getElementsByName("item3");
     // 获取全选/全不选选项
var checkOrCancelAll3 = document.getElementById("checkall3");

// 全选/全不选
myClick3("checkall3", function() {
        if(this.checked){
        for (var i = 0; i < hobbies3.length; i++) {
            hobbies3[i].checked = true;
        }
        }else{
        for (var i = 0; i < hobbies3.length; i++) {
            hobbies3[i].checked = false;
        }
        }
});
function myClick4(objStr, fun) {
    var obj4 = document.getElementById(objStr);
    obj4.onclick = fun;
}
	 var hobbies4 = document.getElementsByName("item4");
     // 获取全选/全不选选项
var checkOrCancelAll4 = document.getElementById("checkall4");

// 全选/全不选
myClick4("checkall4", function() {
        if(this.checked){
        for (var i = 0; i < hobbies4.length; i++) {
            hobbies4[i].checked = true;
        }
        }else{
        for (var i = 0; i < hobbies4.length; i++) {
            hobbies4[i].checked = false;
        }
        }
});
function myClick5(objStr, fun) {
    var obj5 = document.getElementById(objStr);
    obj5.onclick = fun;
}
	 var hobbies5 = document.getElementsByName("item5");
     // 获取全选/全不选选项
var checkOrCancelAll5 = document.getElementById("checkall5");

// 全选/全不选
myClick5("checkall5", function() {
        if(this.checked){
        for (var i = 0; i < hobbies5.length; i++) {
            hobbies5[i].checked = true;
        }
        }else{
        for (var i = 0; i < hobbies5.length; i++) {
            hobbies5[i].checked = false;
        }
        }
});