var app = new Vue({
  el: "#body",
  data: {
    sArr: [],
    addArr: [{ sName: "", sC: 0, sM: 0, sE: 0, sP: 0, sCm: 0, sB: 0, sAdd: 0 }],
    newsArr: [],
    temp: [],
    px: "总分",
    sName: "",
  },
  methods: {
    getValue: function () {
      var that = this;
      axios.get("../json/page2.json").then(
          function (response) {
            console.log(response.data.stuData.sArr);
            that.sArr = response.data.stuData.sArr;
          },
          function (err) {}
      );
    },
    sortByAdd: function () {
      for (var i = 0; i < this.sArr.length - 1; i++) {
        for (var j = 0; j < this.sArr.length - 1 - i; j++) {
          if (this.px === "总分" || this.px === "总分(默认)") {
            if (this.sArr[j].sAdd < this.sArr[j + 1].sAdd) {
              var temp = this.sArr[j];
              this.sArr[j] = this.sArr[j + 1];
              this.sArr[j + 1] = temp;
            }
          } else if (this.px === "语文") {
            if (this.sArr[j].sC < this.sArr[j + 1].sC) {
              var temp = this.sArr[j];
              this.sArr[j] = this.sArr[j + 1];
              this.sArr[j + 1] = temp;
            }
          } else if (this.px === "数学") {
            if (this.sArr[j].sM < this.sArr[j + 1].sM) {
              var temp = this.sArr[j];
              this.sArr[j] = this.sArr[j + 1];
              this.sArr[j + 1] = temp;
            }
          } else if (this.px === "英语") {
            if (this.sArr[j].sE < this.sArr[j + 1].sE) {
              var temp = this.sArr[j];
              this.sArr[j] = this.sArr[j + 1];
              this.sArr[j + 1] = temp;
            }
          } else if (this.px === "物理") {
            if (this.sArr[j].sP < this.sArr[j + 1].sP) {
              var temp = this.sArr[j];
              this.sArr[j] = this.sArr[j + 1];
              this.sArr[j + 1] = temp;
            }
          } else if (this.px === "化学") {
            if (this.sArr[j].sCm < this.sArr[j + 1].sCm) {
              var temp = this.sArr[j];
              this.sArr[j] = this.sArr[j + 1];
              this.sArr[j + 1] = temp;
            }
          } else if (this.px === "生物") {
            if (this.sArr[j].sB < this.sArr[j + 1].sB) {
              var temp = this.sArr[j];
              this.sArr[j] = this.sArr[j + 1];
              this.sArr[j + 1] = temp;
            }
          }
        }
      }
      console.log(this.px);
      this.$forceUpdate();
    },
    select: function () {
      this.newsArr = [];
      if (this.sArr.length < this.temp.length) {
        this.sArr = this.temp;
      }
      if (this.sName != "") {
        for (var i = 0; i < this.sArr.length; i++) {
          if (this.sArr[i].sName === this.sName) {
            this.newsArr.push(this.sArr[i]);
          }
        }
        if (this.newsArr.length !== 0) {
          this.temp = this.sArr;
          this.sArr = this.newsArr;
          this.newsArr = this.temp;
          // this.sArr = this.temp;
        } else {
          alert("查询无果！");
        }
      }
      // } else this.sArr = this.temp;
      console.log(this.sArr);
      this.sortByAdd();
    },
    add: function () {
      // for(var i = 0;i < this.sArr.length;i++){
      //     this.sArr[i].sC =
      // }
      for (var i = 0; i < this.sArr.length; i++) {
        this.sArr[i].sAdd =
          this.sArr[i].sC +
          this.sArr[i].sM +
          this.sArr[i].sE +
          this.sArr[i].sP +
          this.sArr[i].sCm +
          this.sArr[i].sB;
      }
    },
    print: function () {
      console.log(this.px);
    },

    addStu: function () {
      if (this.addArr.sC == null) {
        alert("添加失败，请输入正确的信息！");
        this.addArr = [
          { sName: "", sC: 0, sM: 0, sE: 0, sP: 0, sCm: 0, sB: 0, sAdd: 0 },
        ];
      } else {
        console.log(this.addArr);
        this.sArr.push(this.addArr);
        this.add();
        this.sortByAdd();
        this.$forceUpdate();
        this.addArr = [
          { sName: "", sC: 0, sM: 0, sE: 0, sP: 0, sCm: 0, sB: 0, sAdd: 0 },
        ];
      }
    },
  },
  mounted() {
    window.addF = this.add;
    window.addF();
    window.sort = this.sortByAdd;
    window.getValue = this.getValue;
    // window.match = this.sortByMath;
  },
});

window.addF();
window.sort();
getValue();