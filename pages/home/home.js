// // pages/home/home.js
// const app = getApp()
// Page({
//   data: {
//     value: null,
//     displayValue: "0",
//     operator: null,
//     waitingForOperated: false,
//     calcResult: 0,
//     vector: "←",
//     id1: "clear",
//     id2: "delete",
//     id3: "history",
//     id4: "×",
//     id5: "7",
//     id6: "8",
//     id7: "9",
//     id8: "÷",
//     id9: "4",
//     id10: "5",
//     id11: "6",
//     id12: "+",
//     id13: "1",
//     id14: "2",
//     id15: "3",
//     id16: "-",
//     id17: "0",
//     id18: ".",
//     id19: "=",
//     buttonDot: false
//   },
//   Delete: function(event) {
//     var res = this.data.displayValue;
//     // console.log(res)
//     if (res == "0") {
//       return;
//     }
//     // console.log(length);
//     res = res.substring(0, res.length - 1);
//     if (res == "" || res == "－") {
//       res = 0;
//     }
//     this.setData({
//       "displayValue": res
//     })
//     this.data.arr.pop();
//   },
//   ClearAll: function(event) {
//     console.log(event.currentTarget.id);
//     this.setData({
//       "displayValue": '0'
//     })
//     this.data.arr.length = 0;
//   },
//   ClickButtonAddMinus: function(event) {
//     console.log(event);
//     var buttonVal = event.currentTarget.id;
//     if (buttonVal == "0") {
//       return;
//     }
//     var firstWord = buttonVal.charAt(0);
//     if (buttonVal == "－") {
//       buttonVal = buttonVal.substr(1);
//       this.data.arr.shift();
//     } else {
//       buttonVal = "－" + buttonVal;
//       this.data.arr.unshift("－");
//     }
//     this.setData({
//       "displayValue": buttonVal
//     });


//     // var res = this.data.calcResult;
//     // console.log("res=", res);
//     // var newbuttonDot = this.data.buttonDot;
//     // console.log("newbuttonDot=", newbuttonDot);
//     //   } else {
//     //     if (buttonVal == "dot") {
//     //       if (!newbuttonDot) {
//     //         res = res + '.';
//     //         newbuttonDot = true;
//     //       }
//     //     } else if (buttonVal == "clear") {
//     //       res = '0';
//     //       newbuttonDot = false;
//     //     } else if (buttonVal == "delete") {
//     //       var length = res.length;
//     //       if (length > 1) {
//     //         res = res.substr(0, length - 1);
//     //       } else {
//     //         res = '0';
//     //       }
//     //     } else if (buttonVal == 'add' || buttonVal == 'divide' || buttonVal == 'multiply' || buttonVal == 'minus') {
//     //       newbuttonDot = false;
//     //       var sign;
//     //       switch (buttonVal) {
//     //         case "divide":
//     //           sign = '/';
//     //           break;
//     //         case "add":
//     //           sign = '+';
//     //           break;
//     //         case "minus":
//     //           sign = '-';
//     //           break;
//     //         case "multiply":
//     //           sign = '*';
//     //           break;
//     //       }
//     //       if (!isNaN(res.charAt(res.length - 1))) {
//     //         res = res + sign;
//     //       }
//     //     }
//     //   }
//     //   this.setData({
//     //     calcResult: res,
//     //     buttonDot: newbuttonDot,
//     //   });
//     // },
//     // equal: function() {
//     //   var str = this.data.calcResult;
//     //   var item = '';
//     //   var strArray = [];
//     //   var temp = 0;
//     //   for (var i = 0; i <= str.length; i++) {
//     //     var s = str.charAt(i);
//     //     if ((s != '' && s >= 0 && s <= 9) || s == '.') {
//     //       item = item + s;
//     //     } else {
//     //       strArray[temp] = item;
//     //       temp++;
//     //       strArray[temp] = s;
//     //       temp++;
//     //       item = '';
//     //     }
//     //   }
//     //   if (isNaN(strArray[strArray.length - 1])) {
//     //     strArray.pop();
//     //   }
//     //   var num;
//     //   var res = strArray[0] * 1;
//     //   for (var i = 1; i <= strArray.length; i = i + 2) {
//     //     if (res == '∞') {
//     //       break;
//     //     }
//     //     num = strArray[i + 1];
//     //     switch (strArray[i]) {
//     //       case "-":
//     //         res = res - num;
//     //         break;
//     //       case "+":
//     //         res = res + num;
//     //         break;
//     //       case "*":
//     //         res = res * num;
//     //         break;
//     //       case "/":
//     //         if (num != '0') {
//     //           res = res / num;
//     //         } else {
//     //           res = '∞';
//     //           break;
//     //         }
//     //         break;
//     //     }
//     //   }
//     //   this.setData({
//     //     result: '=' + res,
//     //   });
//   },
//   time: function(e) {
//     var util = require("../../utils/util.js");
//     var time = util.formatTime(new Date());
//     this.setData({
//       result: time
//     });
//   }
// })
Page({
  data: {
    vector: "←",
    idb: "back",
    idc: "clear",
    idt: "toggle",
    idadd: "＋",
    id9: "9",
    id8: "8",
    id7: "7",
    idj: "－",
    id6: "6",
    id5: "5",
    id4: "4",
    idx: "×",
    id3: "3",
    id2: "2",
    id1: "1",
    iddiv: "÷",
    id0: "0",
    idd: ".",
    ide: "＝",
    screenData: "0",
    operaSymbo: {
      "＋": "+",
      "－": "-",
      "×": "*",
      "÷": "/",
      ".": "."
    },
    lastIsOperaSymbo: false,
    iconType: 'waiting_circle',
    iconColor: 'white',
    arr: [],
    logs: []
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  clickBtn: function (event) {
    var id = event.currentTarget.id;
    console.log(event);
    if (id == this.data.idb) { //退格←
      var data = this.data.screenData;
      if (data == "0") {
        return;
      }
      data = data.substring(0, data.length - 1);
      if (data == "" || data == "－") {
        data = 0;
      }
      this.setData({
        "screenData": data
      });
      this.data.arr.pop();
    } else if (id == this.data.idc) { //清屏C
      this.setData({
        "screenData": "0"
      });
      this.data.arr.length = 0;
    } else if (id == this.data.idt) { //正负号+/-
      var data = this.data.screenData;
      if (data == "0") {
        return;
      }
      var firstWord = data.charAt(0);
      if (data == "－") {
        data = data.substr(1);
        this.data.arr.shift();
      } else {
        data = "－" + data;
        this.data.arr.unshift("－");
      }
      this.setData({
        "screenData": data
      });
    } else if (id == this.data.ide) { //等于＝
      var data = this.data.screenData;
      if (data == "0") {
        return;
      }        

      var lastWord = data.charAt(data.length);
      if (isNaN(lastWord)) {
        return;
      }

      var num = "";

      var lastOperator = "";
      var arr = this.data.arr;
      var optarr = [];
      for (var i in arr) {
        if (isNaN(arr[i]) == false || arr[i] == this.data.idd || arr[i] == this.data.idt) {
          num += arr[i];
        } else {
          lastOperator = arr[i];
          optarr.push(num);
          optarr.push(arr[i]);
          num = "";
        }
      }
      optarr.push(Number(num));
      var result = Number(optarr[0]) * 1.0;
      console.log(result);
      for (var i = 1; i < optarr.length; i++) {
        if (isNaN(optarr[i])) {
          if (optarr[1] == this.data.idadd) {
            result += Number(optarr[i + 1]);
          } else if (optarr[1] == this.data.idj) {
            result -= Number(optarr[i + 1]);
          } else if (optarr[1] == this.data.idx) {
            result *= Number(optarr[i + 1]);
          } else if (optarr[1] == this.data.iddiv) {
            result /= Number(optarr[i + 1]);
          }
        }
      }
      //存储历史记录
      this.data.logs.push(data + "=" + result);
      wx.setStorageSync("calclogs", this.data.logs);

      this.data.arr.length = 0;
      this.data.arr.push(result);

      this.setData({
        "screenData": result + ""
      });
    } else {
      if (this.data.operaSymbo[id]) { //如果是符号+-*/
        if (this.data.lastIsOperaSymbo || this.data.screenData == "0") {
          return;
        }
      }

      var sd = this.data.screenData;
      var data;
      if (sd == 0) {
        data = id;
      } else {
        data = sd + id;
      }
      this.setData({
        "screenData": data
      });
      this.data.arr.push(id);

      if (this.data.operaSymbo[id]) {
        this.setData({
          "lastIsOperaSymbo": true
        });
      } else {
        this.setData({
          "lastIsOperaSymbo": false
        });
      }
    }
  },
  history: function () {
    wx.navigateTo({
      url: '../history/history'
    })
  }
})

