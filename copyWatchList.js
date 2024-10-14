 var newWatchList = current.watch_list;
    var oldWatchList = previous.watch_list;
    var ritmWatchList = current.request_item.watch_list;

    //Converting string to array
    var currentWatchList = (newWatchList.indexOf(',')) ? newWatchList.split(',') : [newWatchList];
    var previousWatchList = (oldWatchList.indexOf(',')) ? oldWatchList.split(',') : [oldWatchList];
    var ritmWatchListArray = (ritmWatchList.indexOf(',')) ? ritmWatchList.split(',') : [ritmWatchList];

    var array = new ArrayUtil();
    /**
     * Insert ==>  previous < current, if any user added then count of current is increase 
     * Remove ==>  previous > current, if any user removed then count of current is decrease 
     */
    var currentWatchListLength = currentWatchList.length;
    var previousWatchListLength = previousWatchList.length;
    var diff;

    // Insert the new user, then check the difference between the current and previous
    if (currentWatchListLength > previousWatchListLength) {
        diff = array.diff(currentWatchList, previousWatchList);
    }
    // Remove the new user then check the difference between the previous and current
    else {
        diff = array.diff(previousWatchList, currentWatchList);
    }

    var length = diff.length;
    //iteration to remove the difference from RITM's WatchList 
    for (var i = 0; i < length; i++) {
        if (ritmWatchListArray.indexOf(diff[i]) >= 0) {
            ritmWatchListArray.splice(ritmWatchListArray.indexOf(diff[i]), 1);
        }
    }
    //Concat and remove duplicates 
    var concatWatchList = array.concat(currentWatchList, ritmWatchListArray);
    var result = array.unique(concatWatchList);
    /*
        **************  Debugging ************** 

        gs.addInfoMessage('Current : ' + newWatchList);
        gs.addInfoMessage('Previous : ' + previous.watch_list);
        gs.addInfoMessage('Result : ' + result);
    */

    /*********** Using "GlideRecord" method to update Request item ****************/
    // var ritmGR = new GlideRecord('sc_req_item');
    // if (ritmGR.get(current.request_item)) {
    //     var watchList = ritmGR.watch_list;
    //     watchList.replace(watchList, '');
    //     ritmGR.watch_list = result.toString();
    //     ritmGR.update();
    // }

    /*********** Using getRefRecord() method to update Request item ****************/
    var ritmGR = current.request_item.getRefRecord();
    if (ritmGR.isValidRecord()) {
        ritmGR.watch_list = result.toString();
        ritmGR.update();
    }
