let app = new Vue({
       el: "#root",
       data() {
          return {
             touchDrive: false,
             active: 0,
             userData: [],
             optionConfig: optionConfig,
             statusConfig: statusConfig,
             hospitalType: hospitalType,
             hospitals: hospitals,
             city: city,
             operatorSize: 0,
             multipleSelection: [],
             selected: new Array(statusConfig.length).fill([]),
             scrollBar: null,
             managementStatus: {
                 rootWindow: false,
                 managementId: null,
                 statusList: [
                     "selectFace",
                     "selectNode",
                     "addFace",
                     "addNode",
                     "editFace",
                     "addFace",
                     "selectOption",
                     "addOption",
                     "editOption"
                 ]
             },
             finalStep: {
                selectHospital: false,
                getResult: false
             },
             hospitalSelected: {
                city: "",
                area: "",
                keyword: "",
                hospitalType: [],
                selected: ""
             }
             // init: false
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
          //  for (let index = 0; index < this.statusConfig.length; index ++) {
          //      this.selected[index] = [];
          //  }

           if (localStorage.getItem("active")) {
               this.active = parseInt(localStorage.getItem('active'));
           }
           // if (localStorage.getItem("selected") != null) {
           //     console.log('get from localStorage');
           //     this.selected = JSON.parse(localStorage.getItem("selected"));
           // }
           if (this.isTouchDevice()) {
               this.operatorSize = 'calc(100vh - ' + (window.$(".control-block").height() + 220) + 'px)'
           }else {
               this.operatorSize = 'calc(100vh - ' + (window.$(".control-block").height() + 180) + 'px)'
           }
           window.addEventListener("keydown", e => {
               if(e.code == "ArrowUp") {
                   if (this.active > 0) {
                       this.pageSwitch(-1);
                   }
               } else if(e.code == "ArrowDown") {
                   if (this.active < this.statusConfig.filter(e => !e.parent).length - 1) {
                       this.pageSwitch(1)
                   }
               }
           })
           // this.init = true;
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
                  if (this.$refs.multipleTable.length >= 2) {
                      this.$refs.multipleTable.forEach(item => {
                          if (item.tableData.length <= 0) { // no row
                              return true;
                          }
                          let thisStatus = item.tableData.at(0).status;
                          if (this.getStatusRange().indexOf(thisStatus) <= -1) {
                              return true;
                          }
                          if (this.selected[thisStatus].length > 0) {
                              this.selected[thisStatus].forEach(row => {
                                  item.toggleRowSelection(row, true);
                              })
                          }else {
                              item.clearSelection();
                          }
                      })
                  }else {
                      if (this.$refs.multipleTable.tableData.length <= 0) { // no row
                          return true;
                      }
                      let thisStatus = this.$refs.multipleTable.tableData.at(0).status;
                      if (this.getStatusRange().indexOf(thisStatus) <= -1) {
                          return true;
                      }
                      if (this.selected[thisStatus].length > 0) {
                          this.selected[thisStatus].forEach(row => {
                              this.$refs.multipleTable.toggleRowSelection(row, true);
                          })
                      }else {
                          this.$refs.multipleTable.clearSelection();
                      }
                  }
              });
          },
          handleSelectionChange(val) {
              let multipleTable = this.$refs.multipleTable;
              let statusRange = Array.from(new Set(val.map(e => e.status)));
              if (val.length > 0) {
                  let lastSelected = val.at(-1);
                  if (lastSelected.unique) { // undo selected option when last selected item is unique
                      val.forEach(row => {
                          let checked = (row.status == lastSelected.status && row.text == lastSelected.text && row.unique);
                          if (multipleTable.length > 0) {
                              multipleTable.forEach(thisTable => {
                                  if (thisTable.data.length > 0 && thisTable.data.at(0).status == lastSelected.status) {
                                      thisTable.toggleRowSelection(row, checked);
                                  }
                              })
                          }else {
                              if (multipleTable.data.length > 0 && multipleTable.data.at(0).status == lastSelected.status) {
                                  multipleTable.toggleRowSelection(row, checked);
                              }
                          }
                      })
                  }else { // Check whether the selected option has a radio option
                      val.forEach(row => {
                          if (row.unique) {
                              multipleTable.toggleRowSelection(row, false);
                          }
                      })
                  }
              }
              // update selected information
              if (multipleTable.length >= 1) {
                  multipleTable.forEach(thisTable => {
                      if (thisTable.tableData.length >= 1) {
                        let thisStatus = thisTable.tableData.at(0).status;
                        if (this.getStatusRange().indexOf(thisStatus) != -1 && statusRange.indexOf(thisStatus) != -1) {
                            this.$set(this.selected, thisStatus, thisTable.selection)
                        }
                      }
                  })
              }else {
                  if (multipleTable.tableData.length >= 1) {
                      let thisStatus = multipleTable.tableData.at(0).status;
                      if (this.getStatusRange().indexOf(thisStatus) != -1 && statusRange.indexOf(thisStatus) != -1) {
                          this.$set(this.selected, thisStatus, multipleTable.selection)
                      }
                  }
              }
          },
          pageSwitch(offset) {
              this.active = this.statusConfig.filter(e => !e.parent)[
                  statusConfig.filter(e => !e.parent).map(e => e.id).indexOf(this.active) + offset
              ].id;
              this.toggleSelection();
          },
           getStatusRange() {
              return this.statusConfig.filter(e => {
                  return e.id == this.active || (e.root != "" && e.root == this.active)
              }).map(e => e.id);
           },
          reset() {
              this.active = 0;
              this.selected = [];
              for (let index = 0; index < this.statusConfig.length; index ++) {
                  this.selected[index] = [];
              }
          },
          getTargetHospital() {
              // find city
              let result = this.hospitals.filter(e => {
                  if (e.location.length > 0 && this.hospitalSelected.city !== "") {
                      return e.location[0] == this.hospitalSelected.city
                  }
                  return true;
              });
              // find area
              if (this.hospitalSelected.city !== "" && this.hospitalSelected.area !== "") {
                  result = result.filter(e => {
                      if (e.location.length >= 2) {
                          return e.location[0] == this.hospitalSelected.city && e.location[1] == this.hospitalSelected.area
                      }
                      return false;
                  })
              }
              // find hospital type
              if (this.hospitalSelected.hospitalType.length >= 1) {
                  result = result.filter(e => {
                      let find = false;
                      if (e.hospitalType.length >= 1) {
                          this.hospitalSelected.hospitalType.forEach(el => {
                              if (e.hospitalType.indexOf(el) != -1) {
                                  find = true;
                              }
                          });
                      }
                      return find;
                  });
              }
              // keyword
              if (this.hospitalSelected.keyword != "") {
                  result = result.filter(e => {
                      // console.log( e.name.match(new RegExp(this.hospitalSelected.keyword, "ig")), e, this.hospitalSelected.keyword, e.name.match(new RegExp(this.hospitalSelected.keyword, "ig")) != null);
                      let match = ((e.name.match(new RegExp(this.hospitalSelected.keyword, "ig")) != null) ||
                          (e.comment.match(new RegExp(this.hospitalSelected.keyword, "ig")) != null));
                      return match;
                      // (e.name.match(new RegExp(this.hospitalSelected.keyword, "ig")) != null) ||
                      // (e.comment.match(new RegExp(this.hospitalSelected.keyword, "ig")) != null);
                  });
              }
              return result;
            // return this.hospitals.filter(e => {
            //     if (
            //         this.hospitalSelected.keyword != null &&
            //         this.hospitalSelected.keyword != "" &&
            //         e.match(this.hospitalSelected.keyword) &&
            //         e.hospitalType.filter(el => this.hospitalSelected.hospitalType.indexOf(el.id) != -1)
            //     ) {
            //         return true;
            //     }
            //     let city = e.location[0];
            //     let area = e.location[1];
            //
            //     if (city == this.selectHospital.city && this.hospitalSelected.area == area) {
            //         return true;
            //     }
            //     return false;
            // })
          },
          getResult() {
              return "判斷晚點寫。"
          }
       },
       watch: {
           active: {
               handler() {
                   localStorage.setItem("active", this.active);
               },
               deep: true
           },
           selected: {
               handler: function(oldVal, newVal) {
                   // console.log('set');
                   // if (! this.init) {
                   //     this.selected = oldVal;
                   // }else {
                   //     localStorage.setItem("selected", JSON.stringify(newVal))
                   // }
               },
               deep: true
           }
       }
    }
);