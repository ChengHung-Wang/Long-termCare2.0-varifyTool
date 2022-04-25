let app = new Vue({
       el: "#root",
       data() {
          return {
             touchDrive: false,
             active: 0,
             userData: [],
             optionConfig: optionConfig,
             statusConfig: statusConfig,
             operatorSize: 0,
             multipleSelection: [],
             selected: [],
             scrollBar: null
          }
       },
       created() {
           window.onbeforeunload = function() {
               return "您剛剛所選取的項目將會消失。"
           };
           this.touchDrive = this.isTouchDevice();
          // new PerfectScrollbar('.operator-block', {
          //     // swipeEasing: true,
          //     // suppressScrollX: true
          // });
           for (let index = 0; index < this.statusConfig.length; index ++) {
               this.selected[index] = [];
           }

           if (localStorage.getItem("active")) {
               this.active = parseInt(localStorage.getItem('active'));
           }
           // if (localStorage.getItem("selected")) {
           //     this.selected = JSON.parse(localStorage.getItem("selected"));
           // }

           if (this.isTouchDevice()) {
               this.operatorSize = 'calc(100vh - ' + (window.$(".control-block").height() + 220) + 'px)'
           }else {
               this.operatorSize = 'calc(100vh - ' + (window.$(".control-block").height() + 180) + 'px)'
           }

       },
       methods: {
          isTouchDevice() {
             return (
                 ('ontouchstart' in window) ||
                 (navigator.maxTouchPoints > 0) ||
                 (navigator.msMaxTouchPoints > 0));
          },
          toggleSelection() {
              this.$nextTick(function () {
                  if (this.$refs.multipleTable.length) {
                      this.$refs.multipleTable.forEach(item => {
                          if (this.selected[this.active]) {
                              this.selected[this.active].forEach(row => {
                                  item.toggleRowSelection(row, true);
                              });
                          } else {
                              item.clearSelection();
                          }
                      })
                  }else {
                      if (this.selected[this.active]) {
                          this.selected[this.active].forEach(row => {
                              this.$refs.multipleTable.toggleRowSelection(row, true);
                          });
                      } else {
                          this.$refs.multipleTable.clearSelection();
                      }
                  }
              });
          },
          handleSelectionChange(val) {
              let last = val;
              last = JSON.parse(JSON.stringify((last))).pop();
              let hasUni = false;
              let uniItem = null;
              val.forEach(e => {
                  if (e.unique) {
                      hasUni = true;
                      uniItem = e;
                  }
              })
              if (val.length >= 1 && last.unique) {
                  val.forEach(e => {
                      console.log(this.$refs.multipleTable);
                      if (this.$refs.multipleTable.length) {
                          this.$refs.multipleTable.forEach(thisTable => {
                              thisTable.toggleRowSelection(e, (e.text == last.text && e.status == last.status))
                          });
                      }else {
                          this.$refs.multipleTable.toggleRowSelection(e, (e.text == last.text && e.status == last.status))
                      }
                  })
              }else if (hasUni && val.length >= 1){
                  val.forEach(e => {
                      if (this.$refs.multipleTable.length) {
                          this.$refs.multipleTable.forEach(thisTable => {
                              thisTable.toggleRowSelection(e, !e.unique)
                          });
                      }else {
                          this.$refs.multipleTable.toggleRowSelection(e, !e.unique)
                      }
                  })
              }
              //
              // if (count > 0) {
              //     this.$refs.multipleTable.clearSelection();
              //     //this.$refs.multipleTable.toggleRowSelection(uniItem, true);
              // }

              this.multipleSelection = val;
          },
          pageSwitch(offset) {
              // if (this.statusConfig.filter(e => e.))
              let cache = [...Array(this.statusConfig.length)].map(e => []);
              this.multipleSelection.forEach(e => {
                  cache[e.status].push(e);
              })
              cache.forEach((value, key) => {
                  if (value.length >= 1) {
                      this.selected[key] = value;
                  }
              })
              console.log(cache);

              this.active = this.statusConfig.filter(e => !e.parent)[
                  statusConfig.filter(e => !e.parent).map(e => e.id).indexOf(this.active) + offset
              ].id;
              this.toggleSelection();
          },
          reset() {
              this.active = 0;
              this.selected = [];
              for (let index = 0; index < this.statusConfig.length; index ++) {
                  this.selected[index] = [];
              }
          }
       },
       watch: {
           active: {
               handler() {
                   localStorage.setItem("active", this.active);
               },
               deep: true
           },
           // selected: {
           //     handler: function() {
           //         localStorage.setItem("selected", JSON.stringify(this.selected));
           //     },
           //     deep: true
           // }
       }
    }
);