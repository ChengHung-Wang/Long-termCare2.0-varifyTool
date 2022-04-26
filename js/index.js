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
                city: null,
                area: null,
                keyword: "",
                hospitalType: [],
                selected: null
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
              // group by status
              // val only include one form
              // **************************
              // version3
              // **************************
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

              // // **************************
              // // version2
              // // **************************
              // let data = new Array(this.statusConfig.length).fill([]);
              // // let multipleTable = this.$refs.multipleTable;
              //
              // val.forEach(item => {
              //     data[item.status].push(item);
              // })
              // console.log(val);
              // // verify every status
              // data.forEach((statusSelected, statusIndex) => {
              //     let lastSelect = statusSelected.at(-1);
              //     if (lastSelect == undefined) {
              //         return true; // continue
              //     }
              //     if (lastSelect.unique) {
              //         statusSelected.forEach((row, rowIndex) => {
              //             let checked = (row.status == lastSelect.status && row.text == lastSelect.text && row.unique);
              //             row.remove = !checked;
              //             if (multipleTable.length) {
              //                 multipleTable.forEach(thisTable => { // parent branch loop
              //                     // undo selected option when last selected item is unique
              //                     if (thisTable.data.length > 0 && thisTable.data.at(0).status == lastSelect.status) {
              //                         thisTable.toggleRowSelection(row, checked);
              //                     }
              //                 })
              //             } else {
              //                 // undo selected option when last selected item is unique
              //                 if (multipleTable.data.length > 0 && multipleTable.data.at(0).status == lastSelect.status) {
              //                     multipleTable.toggleRowSelection(row, checked);
              //                 }
              //             }
              //             // update single row info
              //             statusSelected[rowIndex] = row;
              //         });
              //     }else {
              //         // Check whether the selected option has a radio option
              //         statusSelected.forEach((row, rowIndex) => {
              //             row.remove = false;
              //             if (row.unique) {
              //                 if (multipleTable.length) {
              //                     multipleTable.forEach(thisTable => { // have parent branch loop
              //                         if (thisTable.data.length > 0 && thisTable.data.at(0).status == lastSelect.status) {
              //                             thisTable.toggleRowSelection(row, false);
              //                         }
              //                     })
              //                 }else {
              //                     if (multipleTable.data.length > 0 && multipleTable.data.at(0).status == lastSelect.status) {
              //                         multipleTable.toggleRowSelection(row, false);
              //                     }
              //                 }
              //                 row.remove = true;
              //             }
              //             // update single row info
              //             statusSelected[rowIndex] = row;
              //         })
              //     }
              //     // update all table status
              //     data[statusIndex] = statusSelected;
              // })
              //
              // let result = [];
              //
              // data.map(e => this.selectedUnique(e)).forEach((status, index) => {
              //     if (this.getStatusRange().indexOf(index) != -1) {
              //         status.forEach(row => {
              //             if (! row.remove) {
              //                 result.push(row);
              //             }
              //         })
              //     }
              // })
              // this.multipleSelection = Array.from(new Set(result.map(e => {
              //     return {
              //         status: e.status,
              //         text: e.text,
              //         unique: e.unique
              //     }
              // })));
              // console.log(result, this.multipleSelection, data, "result, multiple, data");

              // // **************************
              // // version1
              // // **************************
              // let last = val;
              // last = JSON.parse(JSON.stringify((last))).pop();
              // let hasUni = false;
              // let uniItem = null;
              // val.forEach(e => {
              //     if (e.unique) {
              //         hasUni = true;
              //         uniItem = e;
              //     }
              // })
              // if (val.length >= 1 && last.unique) {
              //     val.forEach(e => {
              //         console.log(this.$refs.multipleTable);
              //         if (this.$refs.multipleTable.length) {
              //             this.$refs.multipleTable.forEach(thisTable => {
              //                 thisTable.toggleRowSelection(e, (e.text == last.text && e.status == last.status))
              //             });
              //         }else {
              //             this.$refs.multipleTable.toggleRowSelection(e, (e.text == last.text && e.status == last.status))
              //         }
              //     })
              // }else if (hasUni && val.length >= 1){
              //     val.forEach(e => {
              //         if (this.$refs.multipleTable.length) {
              //             this.$refs.multipleTable.forEach(thisTable => {
              //                 thisTable.toggleRowSelection(e, !e.unique)
              //             });
              //         }else {
              //             this.$refs.multipleTable.toggleRowSelection(e, !e.unique)
              //         }
              //     })
              // }

              //
              // if (count > 0) {
              //     this.$refs.multipleTable.clearSelection();
              //     //this.$refs.multipleTable.toggleRowSelection(uniItem, true);
              // }

              //this.multipleSelection = val;
          },
          pageSwitch(offset) {
              // // **************************************************************************
              // // remove in selected update when handleSelectionChange at version3
              // // **************************************************************************

              // if (this.statusConfig.filter(e => e.))
              // let cache = new Array(this.statusConfig.length).fill([]);
              // this.multipleSelection.forEach(e => {
              //     cache[e.status].push(e);
              // })
              // cache.forEach((statusSelected, statusIndex) => {
              //     if (
              //         statusSelected.length > 0 &&
              //         this.getStatusRange().indexOf(statusIndex) != -1
              //     ) {
              //         this.selected[statusIndex] = statusSelected;
              //     }
              // })
              this.active = this.statusConfig.filter(e => !e.parent)[
                  statusConfig.filter(e => !e.parent).map(e => e.id).indexOf(this.active) + offset
              ].id;
              this.toggleSelection();
          },
           getStatusRange() {
              return this.statusConfig.filter(e => {
                  return e.id == this.active || (e.root != null && e.root == this.active)
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
                  if (e.location.length > 0 && this.hospitalSelected.city != null) {
                      return e.location[0] == this.hospitalSelected.city
                  }
                  return true;
              });
              // find area
              if (this.hospitalSelected.city != null && this.hospitalSelected.area != null) {
                  result = this.hospitals.filter(e => {
                      if (e.location.length >= 2) {
                          return e.location[0] == this.hospitalSelected.city && e.location[1] == this.hospitalSelected.area
                      }
                      return false;
                  })
              }
              // find hospital type
              if (this.hospitalSelected.hospitalType.length >= 1) {
                  result = this.hospitals.filter(e => {
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
              if (this.hospitalSelected.keyword != null && this.hospitalSelected.keyword != "") {
                  result = this.hospitals.filter(e => {
                      return
                        e.name.match(new RegExp(this.hospitalSelected.keyword, "ig")) ||
                        e.comment.match(new RegExp(this.hospitalSelected.keyword, "ig"));
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