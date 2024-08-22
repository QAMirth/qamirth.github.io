/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 112.0, "minX": 0.0, "maxY": 3984.0, "series": [{"data": [[0.0, 112.0], [0.1, 117.0], [0.2, 118.0], [0.3, 118.0], [0.4, 118.0], [0.5, 119.0], [0.6, 119.0], [0.7, 119.0], [0.8, 120.0], [0.9, 120.0], [1.0, 120.0], [1.1, 120.0], [1.2, 120.0], [1.3, 121.0], [1.4, 121.0], [1.5, 121.0], [1.6, 121.0], [1.7, 121.0], [1.8, 121.0], [1.9, 121.0], [2.0, 121.0], [2.1, 122.0], [2.2, 122.0], [2.3, 122.0], [2.4, 122.0], [2.5, 122.0], [2.6, 122.0], [2.7, 122.0], [2.8, 122.0], [2.9, 122.0], [3.0, 122.0], [3.1, 122.0], [3.2, 122.0], [3.3, 122.0], [3.4, 122.0], [3.5, 122.0], [3.6, 122.0], [3.7, 123.0], [3.8, 123.0], [3.9, 123.0], [4.0, 123.0], [4.1, 123.0], [4.2, 123.0], [4.3, 123.0], [4.4, 123.0], [4.5, 123.0], [4.6, 123.0], [4.7, 123.0], [4.8, 123.0], [4.9, 123.0], [5.0, 123.0], [5.1, 123.0], [5.2, 123.0], [5.3, 123.0], [5.4, 123.0], [5.5, 123.0], [5.6, 124.0], [5.7, 124.0], [5.8, 124.0], [5.9, 124.0], [6.0, 124.0], [6.1, 124.0], [6.2, 124.0], [6.3, 124.0], [6.4, 124.0], [6.5, 124.0], [6.6, 124.0], [6.7, 124.0], [6.8, 124.0], [6.9, 124.0], [7.0, 124.0], [7.1, 124.0], [7.2, 124.0], [7.3, 124.0], [7.4, 124.0], [7.5, 124.0], [7.6, 124.0], [7.7, 124.0], [7.8, 124.0], [7.9, 125.0], [8.0, 125.0], [8.1, 125.0], [8.2, 125.0], [8.3, 125.0], [8.4, 125.0], [8.5, 125.0], [8.6, 125.0], [8.7, 125.0], [8.8, 125.0], [8.9, 125.0], [9.0, 125.0], [9.1, 125.0], [9.2, 125.0], [9.3, 125.0], [9.4, 125.0], [9.5, 125.0], [9.6, 125.0], [9.7, 125.0], [9.8, 125.0], [9.9, 125.0], [10.0, 125.0], [10.1, 125.0], [10.2, 125.0], [10.3, 125.0], [10.4, 125.0], [10.5, 125.0], [10.6, 125.0], [10.7, 125.0], [10.8, 125.0], [10.9, 126.0], [11.0, 126.0], [11.1, 126.0], [11.2, 126.0], [11.3, 126.0], [11.4, 126.0], [11.5, 126.0], [11.6, 126.0], [11.7, 126.0], [11.8, 126.0], [11.9, 126.0], [12.0, 126.0], [12.1, 126.0], [12.2, 126.0], [12.3, 126.0], [12.4, 126.0], [12.5, 126.0], [12.6, 126.0], [12.7, 126.0], [12.8, 126.0], [12.9, 126.0], [13.0, 126.0], [13.1, 126.0], [13.2, 126.0], [13.3, 126.0], [13.4, 126.0], [13.5, 126.0], [13.6, 126.0], [13.7, 126.0], [13.8, 126.0], [13.9, 126.0], [14.0, 126.0], [14.1, 126.0], [14.2, 126.0], [14.3, 126.0], [14.4, 127.0], [14.5, 127.0], [14.6, 127.0], [14.7, 127.0], [14.8, 127.0], [14.9, 127.0], [15.0, 127.0], [15.1, 127.0], [15.2, 127.0], [15.3, 127.0], [15.4, 127.0], [15.5, 127.0], [15.6, 127.0], [15.7, 127.0], [15.8, 127.0], [15.9, 127.0], [16.0, 127.0], [16.1, 127.0], [16.2, 127.0], [16.3, 127.0], [16.4, 127.0], [16.5, 127.0], [16.6, 127.0], [16.7, 127.0], [16.8, 127.0], [16.9, 127.0], [17.0, 127.0], [17.1, 127.0], [17.2, 127.0], [17.3, 127.0], [17.4, 127.0], [17.5, 127.0], [17.6, 127.0], [17.7, 128.0], [17.8, 128.0], [17.9, 128.0], [18.0, 128.0], [18.1, 128.0], [18.2, 128.0], [18.3, 128.0], [18.4, 128.0], [18.5, 128.0], [18.6, 128.0], [18.7, 128.0], [18.8, 128.0], [18.9, 128.0], [19.0, 128.0], [19.1, 128.0], [19.2, 128.0], [19.3, 128.0], [19.4, 128.0], [19.5, 128.0], [19.6, 128.0], [19.7, 128.0], [19.8, 128.0], [19.9, 128.0], [20.0, 128.0], [20.1, 128.0], [20.2, 128.0], [20.3, 128.0], [20.4, 128.0], [20.5, 128.0], [20.6, 128.0], [20.7, 128.0], [20.8, 128.0], [20.9, 128.0], [21.0, 128.0], [21.1, 128.0], [21.2, 128.0], [21.3, 128.0], [21.4, 129.0], [21.5, 129.0], [21.6, 129.0], [21.7, 129.0], [21.8, 129.0], [21.9, 129.0], [22.0, 129.0], [22.1, 129.0], [22.2, 129.0], [22.3, 129.0], [22.4, 129.0], [22.5, 129.0], [22.6, 129.0], [22.7, 129.0], [22.8, 129.0], [22.9, 129.0], [23.0, 129.0], [23.1, 129.0], [23.2, 129.0], [23.3, 129.0], [23.4, 129.0], [23.5, 129.0], [23.6, 129.0], [23.7, 129.0], [23.8, 129.0], [23.9, 129.0], [24.0, 129.0], [24.1, 129.0], [24.2, 129.0], [24.3, 129.0], [24.4, 129.0], [24.5, 129.0], [24.6, 129.0], [24.7, 129.0], [24.8, 129.0], [24.9, 129.0], [25.0, 129.0], [25.1, 129.0], [25.2, 129.0], [25.3, 129.0], [25.4, 129.0], [25.5, 129.0], [25.6, 129.0], [25.7, 130.0], [25.8, 130.0], [25.9, 130.0], [26.0, 130.0], [26.1, 130.0], [26.2, 130.0], [26.3, 130.0], [26.4, 130.0], [26.5, 130.0], [26.6, 130.0], [26.7, 130.0], [26.8, 130.0], [26.9, 130.0], [27.0, 130.0], [27.1, 130.0], [27.2, 130.0], [27.3, 130.0], [27.4, 130.0], [27.5, 130.0], [27.6, 130.0], [27.7, 130.0], [27.8, 130.0], [27.9, 130.0], [28.0, 130.0], [28.1, 130.0], [28.2, 130.0], [28.3, 130.0], [28.4, 130.0], [28.5, 130.0], [28.6, 130.0], [28.7, 130.0], [28.8, 130.0], [28.9, 130.0], [29.0, 130.0], [29.1, 130.0], [29.2, 130.0], [29.3, 130.0], [29.4, 130.0], [29.5, 130.0], [29.6, 130.0], [29.7, 130.0], [29.8, 130.0], [29.9, 130.0], [30.0, 130.0], [30.1, 130.0], [30.2, 130.0], [30.3, 130.0], [30.4, 130.0], [30.5, 131.0], [30.6, 131.0], [30.7, 131.0], [30.8, 131.0], [30.9, 131.0], [31.0, 131.0], [31.1, 131.0], [31.2, 131.0], [31.3, 131.0], [31.4, 131.0], [31.5, 131.0], [31.6, 131.0], [31.7, 131.0], [31.8, 131.0], [31.9, 131.0], [32.0, 131.0], [32.1, 131.0], [32.2, 131.0], [32.3, 131.0], [32.4, 131.0], [32.5, 131.0], [32.6, 131.0], [32.7, 131.0], [32.8, 131.0], [32.9, 131.0], [33.0, 131.0], [33.1, 131.0], [33.2, 131.0], [33.3, 131.0], [33.4, 131.0], [33.5, 131.0], [33.6, 131.0], [33.7, 131.0], [33.8, 131.0], [33.9, 131.0], [34.0, 131.0], [34.1, 131.0], [34.2, 131.0], [34.3, 131.0], [34.4, 131.0], [34.5, 131.0], [34.6, 131.0], [34.7, 131.0], [34.8, 131.0], [34.9, 131.0], [35.0, 131.0], [35.1, 131.0], [35.2, 131.0], [35.3, 131.0], [35.4, 132.0], [35.5, 132.0], [35.6, 132.0], [35.7, 132.0], [35.8, 132.0], [35.9, 132.0], [36.0, 132.0], [36.1, 132.0], [36.2, 132.0], [36.3, 132.0], [36.4, 132.0], [36.5, 132.0], [36.6, 132.0], [36.7, 132.0], [36.8, 132.0], [36.9, 132.0], [37.0, 132.0], [37.1, 132.0], [37.2, 132.0], [37.3, 132.0], [37.4, 132.0], [37.5, 132.0], [37.6, 132.0], [37.7, 132.0], [37.8, 132.0], [37.9, 132.0], [38.0, 132.0], [38.1, 132.0], [38.2, 132.0], [38.3, 132.0], [38.4, 132.0], [38.5, 132.0], [38.6, 132.0], [38.7, 132.0], [38.8, 132.0], [38.9, 132.0], [39.0, 132.0], [39.1, 132.0], [39.2, 132.0], [39.3, 132.0], [39.4, 132.0], [39.5, 132.0], [39.6, 132.0], [39.7, 132.0], [39.8, 132.0], [39.9, 132.0], [40.0, 132.0], [40.1, 132.0], [40.2, 132.0], [40.3, 132.0], [40.4, 132.0], [40.5, 132.0], [40.6, 132.0], [40.7, 132.0], [40.8, 132.0], [40.9, 132.0], [41.0, 132.0], [41.1, 132.0], [41.2, 132.0], [41.3, 133.0], [41.4, 133.0], [41.5, 133.0], [41.6, 133.0], [41.7, 133.0], [41.8, 133.0], [41.9, 133.0], [42.0, 133.0], [42.1, 133.0], [42.2, 133.0], [42.3, 133.0], [42.4, 133.0], [42.5, 133.0], [42.6, 133.0], [42.7, 133.0], [42.8, 133.0], [42.9, 133.0], [43.0, 133.0], [43.1, 133.0], [43.2, 133.0], [43.3, 133.0], [43.4, 133.0], [43.5, 133.0], [43.6, 133.0], [43.7, 133.0], [43.8, 133.0], [43.9, 133.0], [44.0, 133.0], [44.1, 133.0], [44.2, 133.0], [44.3, 133.0], [44.4, 133.0], [44.5, 133.0], [44.6, 133.0], [44.7, 133.0], [44.8, 133.0], [44.9, 133.0], [45.0, 133.0], [45.1, 133.0], [45.2, 133.0], [45.3, 133.0], [45.4, 133.0], [45.5, 133.0], [45.6, 133.0], [45.7, 133.0], [45.8, 133.0], [45.9, 133.0], [46.0, 133.0], [46.1, 133.0], [46.2, 133.0], [46.3, 133.0], [46.4, 133.0], [46.5, 133.0], [46.6, 133.0], [46.7, 133.0], [46.8, 133.0], [46.9, 133.0], [47.0, 133.0], [47.1, 133.0], [47.2, 133.0], [47.3, 133.0], [47.4, 134.0], [47.5, 134.0], [47.6, 134.0], [47.7, 134.0], [47.8, 134.0], [47.9, 134.0], [48.0, 134.0], [48.1, 134.0], [48.2, 134.0], [48.3, 134.0], [48.4, 134.0], [48.5, 134.0], [48.6, 134.0], [48.7, 134.0], [48.8, 134.0], [48.9, 134.0], [49.0, 134.0], [49.1, 134.0], [49.2, 134.0], [49.3, 134.0], [49.4, 134.0], [49.5, 134.0], [49.6, 134.0], [49.7, 134.0], [49.8, 134.0], [49.9, 134.0], [50.0, 134.0], [50.1, 134.0], [50.2, 134.0], [50.3, 134.0], [50.4, 134.0], [50.5, 134.0], [50.6, 134.0], [50.7, 134.0], [50.8, 134.0], [50.9, 134.0], [51.0, 134.0], [51.1, 134.0], [51.2, 134.0], [51.3, 134.0], [51.4, 134.0], [51.5, 134.0], [51.6, 134.0], [51.7, 134.0], [51.8, 134.0], [51.9, 134.0], [52.0, 134.0], [52.1, 134.0], [52.2, 134.0], [52.3, 134.0], [52.4, 134.0], [52.5, 134.0], [52.6, 134.0], [52.7, 134.0], [52.8, 134.0], [52.9, 134.0], [53.0, 135.0], [53.1, 135.0], [53.2, 135.0], [53.3, 135.0], [53.4, 135.0], [53.5, 135.0], [53.6, 135.0], [53.7, 135.0], [53.8, 135.0], [53.9, 135.0], [54.0, 135.0], [54.1, 135.0], [54.2, 135.0], [54.3, 135.0], [54.4, 135.0], [54.5, 135.0], [54.6, 135.0], [54.7, 135.0], [54.8, 135.0], [54.9, 135.0], [55.0, 135.0], [55.1, 135.0], [55.2, 135.0], [55.3, 135.0], [55.4, 135.0], [55.5, 135.0], [55.6, 135.0], [55.7, 135.0], [55.8, 135.0], [55.9, 135.0], [56.0, 135.0], [56.1, 135.0], [56.2, 135.0], [56.3, 135.0], [56.4, 135.0], [56.5, 135.0], [56.6, 135.0], [56.7, 135.0], [56.8, 135.0], [56.9, 135.0], [57.0, 135.0], [57.1, 135.0], [57.2, 135.0], [57.3, 135.0], [57.4, 135.0], [57.5, 135.0], [57.6, 135.0], [57.7, 135.0], [57.8, 135.0], [57.9, 135.0], [58.0, 135.0], [58.1, 135.0], [58.2, 135.0], [58.3, 135.0], [58.4, 135.0], [58.5, 135.0], [58.6, 135.0], [58.7, 135.0], [58.8, 135.0], [58.9, 136.0], [59.0, 136.0], [59.1, 136.0], [59.2, 136.0], [59.3, 136.0], [59.4, 136.0], [59.5, 136.0], [59.6, 136.0], [59.7, 136.0], [59.8, 136.0], [59.9, 136.0], [60.0, 136.0], [60.1, 136.0], [60.2, 136.0], [60.3, 136.0], [60.4, 136.0], [60.5, 136.0], [60.6, 136.0], [60.7, 136.0], [60.8, 136.0], [60.9, 136.0], [61.0, 136.0], [61.1, 136.0], [61.2, 136.0], [61.3, 136.0], [61.4, 136.0], [61.5, 136.0], [61.6, 136.0], [61.7, 136.0], [61.8, 136.0], [61.9, 136.0], [62.0, 136.0], [62.1, 136.0], [62.2, 136.0], [62.3, 136.0], [62.4, 136.0], [62.5, 136.0], [62.6, 136.0], [62.7, 136.0], [62.8, 136.0], [62.9, 136.0], [63.0, 136.0], [63.1, 136.0], [63.2, 136.0], [63.3, 136.0], [63.4, 136.0], [63.5, 136.0], [63.6, 136.0], [63.7, 136.0], [63.8, 136.0], [63.9, 136.0], [64.0, 136.0], [64.1, 136.0], [64.2, 136.0], [64.3, 137.0], [64.4, 137.0], [64.5, 137.0], [64.6, 137.0], [64.7, 137.0], [64.8, 137.0], [64.9, 137.0], [65.0, 137.0], [65.1, 137.0], [65.2, 137.0], [65.3, 137.0], [65.4, 137.0], [65.5, 137.0], [65.6, 137.0], [65.7, 137.0], [65.8, 137.0], [65.9, 137.0], [66.0, 137.0], [66.1, 137.0], [66.2, 137.0], [66.3, 137.0], [66.4, 137.0], [66.5, 137.0], [66.6, 137.0], [66.7, 137.0], [66.8, 137.0], [66.9, 137.0], [67.0, 137.0], [67.1, 137.0], [67.2, 137.0], [67.3, 137.0], [67.4, 137.0], [67.5, 137.0], [67.6, 137.0], [67.7, 137.0], [67.8, 137.0], [67.9, 137.0], [68.0, 137.0], [68.1, 137.0], [68.2, 137.0], [68.3, 137.0], [68.4, 137.0], [68.5, 137.0], [68.6, 137.0], [68.7, 137.0], [68.8, 137.0], [68.9, 137.0], [69.0, 138.0], [69.1, 138.0], [69.2, 138.0], [69.3, 138.0], [69.4, 138.0], [69.5, 138.0], [69.6, 138.0], [69.7, 138.0], [69.8, 138.0], [69.9, 138.0], [70.0, 138.0], [70.1, 138.0], [70.2, 138.0], [70.3, 138.0], [70.4, 138.0], [70.5, 138.0], [70.6, 138.0], [70.7, 138.0], [70.8, 138.0], [70.9, 138.0], [71.0, 138.0], [71.1, 138.0], [71.2, 138.0], [71.3, 138.0], [71.4, 138.0], [71.5, 138.0], [71.6, 138.0], [71.7, 138.0], [71.8, 138.0], [71.9, 138.0], [72.0, 138.0], [72.1, 138.0], [72.2, 138.0], [72.3, 138.0], [72.4, 138.0], [72.5, 138.0], [72.6, 138.0], [72.7, 138.0], [72.8, 138.0], [72.9, 138.0], [73.0, 138.0], [73.1, 138.0], [73.2, 138.0], [73.3, 138.0], [73.4, 138.0], [73.5, 138.0], [73.6, 138.0], [73.7, 138.0], [73.8, 139.0], [73.9, 139.0], [74.0, 139.0], [74.1, 139.0], [74.2, 139.0], [74.3, 139.0], [74.4, 139.0], [74.5, 139.0], [74.6, 139.0], [74.7, 139.0], [74.8, 139.0], [74.9, 139.0], [75.0, 139.0], [75.1, 139.0], [75.2, 139.0], [75.3, 139.0], [75.4, 139.0], [75.5, 139.0], [75.6, 139.0], [75.7, 139.0], [75.8, 139.0], [75.9, 139.0], [76.0, 139.0], [76.1, 139.0], [76.2, 139.0], [76.3, 139.0], [76.4, 139.0], [76.5, 139.0], [76.6, 139.0], [76.7, 139.0], [76.8, 139.0], [76.9, 139.0], [77.0, 139.0], [77.1, 139.0], [77.2, 139.0], [77.3, 139.0], [77.4, 139.0], [77.5, 139.0], [77.6, 139.0], [77.7, 139.0], [77.8, 139.0], [77.9, 139.0], [78.0, 140.0], [78.1, 140.0], [78.2, 140.0], [78.3, 140.0], [78.4, 140.0], [78.5, 140.0], [78.6, 140.0], [78.7, 140.0], [78.8, 140.0], [78.9, 140.0], [79.0, 140.0], [79.1, 140.0], [79.2, 140.0], [79.3, 140.0], [79.4, 140.0], [79.5, 140.0], [79.6, 140.0], [79.7, 140.0], [79.8, 140.0], [79.9, 140.0], [80.0, 140.0], [80.1, 140.0], [80.2, 140.0], [80.3, 140.0], [80.4, 140.0], [80.5, 140.0], [80.6, 140.0], [80.7, 140.0], [80.8, 140.0], [80.9, 140.0], [81.0, 140.0], [81.1, 140.0], [81.2, 140.0], [81.3, 141.0], [81.4, 141.0], [81.5, 141.0], [81.6, 141.0], [81.7, 141.0], [81.8, 141.0], [81.9, 141.0], [82.0, 141.0], [82.1, 141.0], [82.2, 141.0], [82.3, 141.0], [82.4, 141.0], [82.5, 141.0], [82.6, 141.0], [82.7, 141.0], [82.8, 141.0], [82.9, 141.0], [83.0, 141.0], [83.1, 141.0], [83.2, 141.0], [83.3, 141.0], [83.4, 141.0], [83.5, 141.0], [83.6, 141.0], [83.7, 141.0], [83.8, 141.0], [83.9, 141.0], [84.0, 141.0], [84.1, 141.0], [84.2, 142.0], [84.3, 142.0], [84.4, 142.0], [84.5, 142.0], [84.6, 142.0], [84.7, 142.0], [84.8, 142.0], [84.9, 142.0], [85.0, 142.0], [85.1, 142.0], [85.2, 142.0], [85.3, 142.0], [85.4, 142.0], [85.5, 142.0], [85.6, 142.0], [85.7, 142.0], [85.8, 142.0], [85.9, 142.0], [86.0, 142.0], [86.1, 142.0], [86.2, 142.0], [86.3, 142.0], [86.4, 142.0], [86.5, 143.0], [86.6, 143.0], [86.7, 143.0], [86.8, 143.0], [86.9, 143.0], [87.0, 143.0], [87.1, 143.0], [87.2, 143.0], [87.3, 143.0], [87.4, 143.0], [87.5, 143.0], [87.6, 143.0], [87.7, 143.0], [87.8, 143.0], [87.9, 143.0], [88.0, 143.0], [88.1, 144.0], [88.2, 144.0], [88.3, 144.0], [88.4, 144.0], [88.5, 144.0], [88.6, 144.0], [88.7, 144.0], [88.8, 144.0], [88.9, 144.0], [89.0, 144.0], [89.1, 144.0], [89.2, 144.0], [89.3, 144.0], [89.4, 144.0], [89.5, 145.0], [89.6, 145.0], [89.7, 145.0], [89.8, 145.0], [89.9, 145.0], [90.0, 145.0], [90.1, 145.0], [90.2, 145.0], [90.3, 145.0], [90.4, 145.0], [90.5, 145.0], [90.6, 146.0], [90.7, 146.0], [90.8, 146.0], [90.9, 146.0], [91.0, 146.0], [91.1, 146.0], [91.2, 146.0], [91.3, 146.0], [91.4, 146.0], [91.5, 147.0], [91.6, 147.0], [91.7, 147.0], [91.8, 147.0], [91.9, 147.0], [92.0, 147.0], [92.1, 147.0], [92.2, 148.0], [92.3, 148.0], [92.4, 148.0], [92.5, 148.0], [92.6, 148.0], [92.7, 149.0], [92.8, 149.0], [92.9, 149.0], [93.0, 149.0], [93.1, 149.0], [93.2, 150.0], [93.3, 150.0], [93.4, 150.0], [93.5, 150.0], [93.6, 151.0], [93.7, 151.0], [93.8, 151.0], [93.9, 152.0], [94.0, 152.0], [94.1, 152.0], [94.2, 153.0], [94.3, 153.0], [94.4, 153.0], [94.5, 154.0], [94.6, 155.0], [94.7, 155.0], [94.8, 156.0], [94.9, 157.0], [95.0, 157.0], [95.1, 158.0], [95.2, 159.0], [95.3, 159.0], [95.4, 160.0], [95.5, 161.0], [95.6, 163.0], [95.7, 165.0], [95.8, 166.0], [95.9, 168.0], [96.0, 170.0], [96.1, 172.0], [96.2, 174.0], [96.3, 175.0], [96.4, 177.0], [96.5, 178.0], [96.6, 179.0], [96.7, 180.0], [96.8, 183.0], [96.9, 184.0], [97.0, 186.0], [97.1, 188.0], [97.2, 190.0], [97.3, 195.0], [97.4, 202.0], [97.5, 213.0], [97.6, 222.0], [97.7, 236.0], [97.8, 251.0], [97.9, 286.0], [98.0, 304.0], [98.1, 317.0], [98.2, 326.0], [98.3, 331.0], [98.4, 342.0], [98.5, 383.0], [98.6, 391.0], [98.7, 395.0], [98.8, 398.0], [98.9, 402.0], [99.0, 407.0], [99.1, 419.0], [99.2, 429.0], [99.3, 434.0], [99.4, 454.0], [99.5, 584.0], [99.6, 1128.0], [99.7, 1141.0], [99.8, 1155.0], [99.9, 2327.0], [100.0, 3984.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 9739.0, "series": [{"data": [[2300.0, 2.0], [600.0, 5.0], [2600.0, 1.0], [3000.0, 2.0], [3100.0, 1.0], [200.0, 57.0], [3300.0, 1.0], [3400.0, 1.0], [3700.0, 1.0], [3900.0, 2.0], [1000.0, 1.0], [1100.0, 24.0], [1200.0, 3.0], [300.0, 86.0], [1500.0, 1.0], [1600.0, 2.0], [100.0, 9739.0], [400.0, 60.0], [1700.0, 1.0], [1800.0, 1.0], [500.0, 9.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3900.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 16.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 9942.0, "series": [{"data": [[0.0, 9942.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 42.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 16.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.0066445182724246, "minX": 1.724334E12, "maxY": 3.2833333333333337, "series": [{"data": [[1.72433436E12, 1.0066445182724246], [1.72433598E12, 1.0854092526690398], [1.72433406E12, 1.0466666666666649], [1.72433496E12, 1.0166666666666664], [1.72433466E12, 1.0099667774086378], [1.72433526E12, 1.0199335548172754], [1.72433556E12, 1.0533333333333317], [1.72433424E12, 1.0769230769230764], [1.72433586E12, 1.0531561461794006], [1.72433484E12, 1.0700000000000005], [1.72433454E12, 1.0533333333333323], [1.72433514E12, 1.0499999999999994], [1.72433544E12, 1.0936454849498327], [1.72433412E12, 1.0401337792642131], [1.72433574E12, 1.1249999999999993], [1.72433472E12, 1.05], [1.72433442E12, 1.0401337792642136], [1.72433502E12, 1.013333333333334], [1.72433532E12, 1.05], [1.724334E12, 3.2833333333333337], [1.72433562E12, 1.0466666666666664], [1.72433592E12, 1.1158940397350987], [1.7243346E12, 1.0233333333333328], [1.7243343E12, 1.0367892976588626], [1.7243349E12, 1.0200668896321063], [1.7243352E12, 1.0431893687707634], [1.7243355E12, 1.0332225913621247], [1.7243358E12, 1.043189368770763], [1.72433448E12, 1.020134228187919], [1.72433418E12, 1.0399999999999996], [1.72433478E12, 1.0564784053156147], [1.72433508E12, 1.0465116279069762], [1.72433538E12, 1.0366666666666668], [1.72433568E12, 1.0333333333333323]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72433598E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 137.38904597340013, "minX": 1.0, "maxY": 3984.0, "series": [{"data": [[2.0, 227.24603174603152], [9.0, 2331.5], [10.0, 3984.0], [11.0, 225.0], [12.0, 3489.5], [3.0, 434.21153846153845], [14.0, 2499.5], [15.0, 325.0], [4.0, 1811.5], [1.0, 137.38904597340013], [20.0, 1669.8], [5.0, 1842.0], [22.0, 2143.5], [6.0, 1752.0], [7.0, 3356.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.0736999999999994, 146.4790000000004]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 22.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 286.0, "minX": 1.724334E12, "maxY": 41791.26666666667, "series": [{"data": [[1.72433436E12, 41646.45], [1.72433598E12, 38885.35], [1.72433406E12, 41511.916666666664], [1.72433496E12, 41507.816666666666], [1.72433466E12, 41652.78333333333], [1.72433526E12, 41652.78333333333], [1.72433556E12, 41507.65], [1.72433424E12, 41373.95], [1.72433586E12, 41652.71666666667], [1.72433484E12, 41513.15], [1.72433454E12, 41513.13333333333], [1.72433514E12, 41513.35], [1.72433544E12, 41374.833333333336], [1.72433412E12, 41374.35], [1.72433574E12, 40959.95], [1.72433472E12, 41514.35], [1.72433442E12, 41373.46666666667], [1.72433502E12, 41511.433333333334], [1.72433532E12, 41514.61666666667], [1.724334E12, 16604.516666666666], [1.72433562E12, 41511.73333333333], [1.72433592E12, 41791.26666666667], [1.7243346E12, 41513.63333333333], [1.7243343E12, 41366.5], [1.7243349E12, 41366.433333333334], [1.7243352E12, 41652.3], [1.7243355E12, 41643.1], [1.7243358E12, 41652.3], [1.72433448E12, 41236.1], [1.72433418E12, 41513.316666666666], [1.72433478E12, 41653.083333333336], [1.72433508E12, 41651.0], [1.72433538E12, 41514.63333333333], [1.72433568E12, 41512.583333333336]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.72433436E12, 717.3833333333333], [1.72433598E12, 669.7166666666667], [1.72433406E12, 715.0], [1.72433496E12, 715.0], [1.72433466E12, 717.3833333333333], [1.72433526E12, 717.3833333333333], [1.72433556E12, 715.0], [1.72433424E12, 712.6166666666667], [1.72433586E12, 717.3833333333333], [1.72433484E12, 715.0], [1.72433454E12, 715.0], [1.72433514E12, 715.0], [1.72433544E12, 712.6166666666667], [1.72433412E12, 712.6166666666667], [1.72433574E12, 705.4666666666667], [1.72433472E12, 715.0], [1.72433442E12, 712.6166666666667], [1.72433502E12, 715.0], [1.72433532E12, 715.0], [1.724334E12, 286.0], [1.72433562E12, 715.0], [1.72433592E12, 719.7666666666667], [1.7243346E12, 715.0], [1.7243343E12, 712.6166666666667], [1.7243349E12, 712.6166666666667], [1.7243352E12, 717.3833333333333], [1.7243355E12, 717.3833333333333], [1.7243358E12, 717.3833333333333], [1.72433448E12, 710.2333333333333], [1.72433418E12, 715.0], [1.72433478E12, 717.3833333333333], [1.72433508E12, 717.3833333333333], [1.72433538E12, 715.0], [1.72433568E12, 715.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72433598E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 133.92691029900334, "minX": 1.724334E12, "maxY": 526.6916666666665, "series": [{"data": [[1.72433436E12, 133.92691029900334], [1.72433598E12, 149.79003558718875], [1.72433406E12, 140.91666666666666], [1.72433496E12, 136.06666666666675], [1.72433466E12, 134.23588039867107], [1.72433526E12, 137.717607973422], [1.72433556E12, 144.22999999999996], [1.72433424E12, 147.50501672240802], [1.72433586E12, 144.46179401993342], [1.72433484E12, 142.41333333333336], [1.72433454E12, 140.67999999999998], [1.72433514E12, 143.66666666666663], [1.72433544E12, 151.33779264214036], [1.72433412E12, 143.44147157190628], [1.72433574E12, 154.2804054054055], [1.72433472E12, 141.2966666666666], [1.72433442E12, 134.35451505016718], [1.72433502E12, 137.04333333333332], [1.72433532E12, 144.5033333333334], [1.724334E12, 526.6916666666665], [1.72433562E12, 144.81333333333336], [1.72433592E12, 154.5596026490065], [1.7243346E12, 136.00000000000009], [1.7243343E12, 135.59197324414717], [1.7243349E12, 138.68896321070216], [1.7243352E12, 141.50166112956796], [1.7243355E12, 140.20265780730904], [1.7243358E12, 143.6544850498339], [1.72433448E12, 135.38926174496632], [1.72433418E12, 142.66], [1.72433478E12, 141.1362126245847], [1.72433508E12, 143.29568106312303], [1.72433538E12, 141.57999999999996], [1.72433568E12, 141.0666666666666]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72433598E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 132.9900332225916, "minX": 1.724334E12, "maxY": 522.6750000000004, "series": [{"data": [[1.72433436E12, 132.9900332225916], [1.72433598E12, 148.90391459074732], [1.72433406E12, 139.74999999999997], [1.72433496E12, 134.25333333333327], [1.72433466E12, 133.2059800664453], [1.72433526E12, 136.47508305647827], [1.72433556E12, 143.34000000000012], [1.72433424E12, 146.6588628762542], [1.72433586E12, 143.1960132890365], [1.72433484E12, 141.44333333333338], [1.72433454E12, 139.55999999999992], [1.72433514E12, 142.1266666666667], [1.72433544E12, 150.20401337792637], [1.72433412E12, 142.24749163879602], [1.72433574E12, 152.3986486486486], [1.72433472E12, 140.6333333333332], [1.72433442E12, 133.11036789297663], [1.72433502E12, 136.06666666666666], [1.72433532E12, 143.58666666666662], [1.724334E12, 522.6750000000004], [1.72433562E12, 143.60666666666657], [1.72433592E12, 153.58609271523176], [1.7243346E12, 135.1100000000001], [1.7243343E12, 134.34113712374574], [1.7243349E12, 137.8428093645485], [1.7243352E12, 140.63122923588037], [1.7243355E12, 139.33554817275748], [1.7243358E12, 141.88372093023253], [1.72433448E12, 134.25838926174512], [1.72433418E12, 141.30666666666664], [1.72433478E12, 139.83720930232553], [1.72433508E12, 141.77408637873748], [1.72433538E12, 140.44000000000003], [1.72433568E12, 140.0466666666666]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72433598E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 89.86956521739127, "minX": 1.724334E12, "maxY": 467.47500000000065, "series": [{"data": [[1.72433436E12, 90.69767441860463], [1.72433598E12, 102.06049822064061], [1.72433406E12, 95.76333333333335], [1.72433496E12, 92.06333333333325], [1.72433466E12, 91.10963455149498], [1.72433526E12, 92.06644518272425], [1.72433556E12, 100.5133333333333], [1.72433424E12, 102.75250836120398], [1.72433586E12, 94.09966777408636], [1.72433484E12, 99.14333333333327], [1.72433454E12, 96.14666666666655], [1.72433514E12, 98.79333333333331], [1.72433544E12, 101.37458193979931], [1.72433412E12, 97.29431438127091], [1.72433574E12, 104.58445945945947], [1.72433472E12, 97.77000000000001], [1.72433442E12, 89.86956521739127], [1.72433502E12, 91.46999999999998], [1.72433532E12, 98.40666666666671], [1.724334E12, 467.47500000000065], [1.72433562E12, 97.84666666666668], [1.72433592E12, 107.48013245033111], [1.7243346E12, 92.15333333333328], [1.7243343E12, 92.21070234113708], [1.7243349E12, 92.59197324414713], [1.7243352E12, 96.93023255813958], [1.7243355E12, 95.49501661129565], [1.7243358E12, 98.4651162790698], [1.72433448E12, 91.94966442953016], [1.72433418E12, 98.69000000000001], [1.72433478E12, 96.36877076411956], [1.72433508E12, 99.03654485049827], [1.72433538E12, 94.23333333333338], [1.72433568E12, 96.22666666666673]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72433598E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 112.0, "minX": 1.724334E12, "maxY": 3984.0, "series": [{"data": [[1.72433436E12, 322.0], [1.72433598E12, 1143.0], [1.72433406E12, 397.0], [1.72433496E12, 433.0], [1.72433466E12, 413.0], [1.72433526E12, 469.0], [1.72433556E12, 1149.0], [1.72433424E12, 1148.0], [1.72433586E12, 435.0], [1.72433484E12, 1128.0], [1.72433454E12, 1142.0], [1.72433514E12, 697.0], [1.72433544E12, 1151.0], [1.72433412E12, 429.0], [1.72433574E12, 1237.0], [1.72433472E12, 1134.0], [1.72433442E12, 428.0], [1.72433502E12, 454.0], [1.72433532E12, 1156.0], [1.724334E12, 3984.0], [1.72433562E12, 1133.0], [1.72433592E12, 1143.0], [1.7243346E12, 536.0], [1.7243343E12, 536.0], [1.7243349E12, 420.0], [1.7243352E12, 429.0], [1.7243355E12, 1137.0], [1.7243358E12, 1142.0], [1.72433448E12, 405.0], [1.72433418E12, 1145.0], [1.72433478E12, 1128.0], [1.72433508E12, 1141.0], [1.72433538E12, 440.0], [1.72433568E12, 1140.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.72433436E12, 141.0], [1.72433598E12, 151.0], [1.72433406E12, 147.0], [1.72433496E12, 142.90000000000003], [1.72433466E12, 141.0], [1.72433526E12, 144.0], [1.72433556E12, 145.90000000000003], [1.72433424E12, 144.0], [1.72433586E12, 145.8], [1.72433484E12, 147.0], [1.72433454E12, 141.90000000000003], [1.72433514E12, 143.0], [1.72433544E12, 148.0], [1.72433412E12, 145.0], [1.72433574E12, 147.0], [1.72433472E12, 140.0], [1.72433442E12, 140.0], [1.72433502E12, 144.0], [1.72433532E12, 146.0], [1.724334E12, 1833.0000000000005], [1.72433562E12, 144.0], [1.72433592E12, 145.0], [1.7243346E12, 140.0], [1.7243343E12, 141.0], [1.7243349E12, 146.0], [1.7243352E12, 146.0], [1.7243355E12, 143.0], [1.7243358E12, 147.0], [1.72433448E12, 147.10000000000002], [1.72433418E12, 145.90000000000003], [1.72433478E12, 148.0], [1.72433508E12, 146.8], [1.72433538E12, 145.0], [1.72433568E12, 145.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.72433436E12, 197.80000000000018], [1.72433598E12, 432.90000000000003], [1.72433406E12, 252.4500000000005], [1.72433496E12, 223.7800000000002], [1.72433466E12, 187.96000000000004], [1.72433526E12, 194.74000000000024], [1.72433556E12, 397.3500000000006], [1.72433424E12, 1136.0], [1.72433586E12, 429.9200000000001], [1.72433484E12, 409.72000000000025], [1.72433454E12, 400.9200000000001], [1.72433514E12, 559.6100000000013], [1.72433544E12, 544.0], [1.72433412E12, 406.0], [1.72433574E12, 534.1999999999825], [1.72433472E12, 423.6900000000003], [1.72433442E12, 211.0], [1.72433502E12, 338.4700000000014], [1.72433532E12, 395.0], [1.724334E12, 3970.3499999999995], [1.72433562E12, 421.7500000000002], [1.72433592E12, 1115.1199999999794], [1.7243346E12, 385.5600000000013], [1.7243343E12, 390.0], [1.7243349E12, 383.0], [1.7243352E12, 387.84000000000106], [1.7243355E12, 395.6800000000012], [1.7243358E12, 402.8600000000001], [1.72433448E12, 265.2399999999989], [1.72433418E12, 394.50000000000045], [1.72433478E12, 390.6600000000003], [1.72433508E12, 406.9000000000001], [1.72433538E12, 404.9000000000001], [1.72433568E12, 395.9100000000001]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.72433436E12, 143.0], [1.72433598E12, 215.19999999999982], [1.72433406E12, 162.84999999999997], [1.72433496E12, 150.89999999999998], [1.72433466E12, 145.0], [1.72433526E12, 156.89999999999998], [1.72433556E12, 150.0], [1.72433424E12, 157.0], [1.72433586E12, 184.69999999999993], [1.72433484E12, 164.79999999999995], [1.72433454E12, 154.95], [1.72433514E12, 151.95], [1.72433544E12, 161.0], [1.72433412E12, 158.0], [1.72433574E12, 315.5499999999996], [1.72433472E12, 142.95], [1.72433442E12, 147.0], [1.72433502E12, 150.0], [1.72433532E12, 156.89999999999998], [1.724334E12, 3171.1499999999987], [1.72433562E12, 158.69999999999993], [1.72433592E12, 226.24999999999847], [1.7243346E12, 142.0], [1.7243343E12, 151.0], [1.7243349E12, 153.0], [1.7243352E12, 176.0], [1.7243355E12, 154.89999999999998], [1.7243358E12, 161.79999999999995], [1.72433448E12, 159.0], [1.72433418E12, 159.89999999999998], [1.72433478E12, 167.79999999999995], [1.72433508E12, 161.89999999999998], [1.72433538E12, 152.0], [1.72433568E12, 151.95]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.72433436E12, 117.0], [1.72433598E12, 118.0], [1.72433406E12, 121.0], [1.72433496E12, 117.0], [1.72433466E12, 114.0], [1.72433526E12, 117.0], [1.72433556E12, 119.0], [1.72433424E12, 118.0], [1.72433586E12, 117.0], [1.72433484E12, 116.0], [1.72433454E12, 116.0], [1.72433514E12, 120.0], [1.72433544E12, 120.0], [1.72433412E12, 121.0], [1.72433574E12, 117.0], [1.72433472E12, 121.0], [1.72433442E12, 118.0], [1.72433502E12, 116.0], [1.72433532E12, 120.0], [1.724334E12, 122.0], [1.72433562E12, 120.0], [1.72433592E12, 121.0], [1.7243346E12, 119.0], [1.7243343E12, 117.0], [1.7243349E12, 118.0], [1.7243352E12, 112.0], [1.7243355E12, 119.0], [1.7243358E12, 118.0], [1.72433448E12, 117.0], [1.72433418E12, 117.0], [1.72433478E12, 118.0], [1.72433508E12, 117.0], [1.72433538E12, 118.0], [1.72433568E12, 118.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.72433436E12, 132.0], [1.72433598E12, 136.0], [1.72433406E12, 138.0], [1.72433496E12, 133.0], [1.72433466E12, 132.0], [1.72433526E12, 135.0], [1.72433556E12, 134.0], [1.72433424E12, 132.0], [1.72433586E12, 136.0], [1.72433484E12, 130.0], [1.72433454E12, 132.0], [1.72433514E12, 135.0], [1.72433544E12, 137.0], [1.72433412E12, 138.0], [1.72433574E12, 134.0], [1.72433472E12, 132.0], [1.72433442E12, 131.0], [1.72433502E12, 134.0], [1.72433532E12, 135.0], [1.724334E12, 144.5], [1.72433562E12, 136.0], [1.72433592E12, 136.0], [1.7243346E12, 132.0], [1.7243343E12, 130.0], [1.7243349E12, 134.0], [1.7243352E12, 135.0], [1.7243355E12, 132.0], [1.7243358E12, 135.0], [1.72433448E12, 131.0], [1.72433418E12, 134.0], [1.72433478E12, 131.0], [1.72433508E12, 133.0], [1.72433538E12, 136.0], [1.72433568E12, 134.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72433598E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 130.0, "minX": 1.0, "maxY": 2084.5, "series": [{"data": [[4.0, 133.0], [2.0, 130.0], [1.0, 132.0], [5.0, 134.0], [22.0, 2084.5], [6.0, 135.0], [3.0, 134.0], [7.0, 135.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 130.0, "minX": 1.0, "maxY": 2074.5, "series": [{"data": [[4.0, 132.0], [2.0, 130.0], [1.0, 132.0], [5.0, 133.0], [22.0, 2074.5], [6.0, 134.0], [3.0, 133.0], [7.0, 134.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 2.0, "minX": 1.724334E12, "maxY": 5.033333333333333, "series": [{"data": [[1.72433436E12, 5.0], [1.72433598E12, 4.666666666666667], [1.72433406E12, 5.0], [1.72433496E12, 5.0], [1.72433466E12, 5.0], [1.72433526E12, 5.016666666666667], [1.72433556E12, 5.0], [1.72433424E12, 5.0], [1.72433586E12, 5.033333333333333], [1.72433484E12, 5.016666666666667], [1.72433454E12, 5.0], [1.72433514E12, 5.016666666666667], [1.72433544E12, 4.983333333333333], [1.72433412E12, 4.983333333333333], [1.72433574E12, 4.933333333333334], [1.72433472E12, 5.016666666666667], [1.72433442E12, 5.0], [1.72433502E12, 5.016666666666667], [1.72433532E12, 5.0], [1.724334E12, 2.0], [1.72433562E12, 5.0], [1.72433592E12, 5.033333333333333], [1.7243346E12, 5.016666666666667], [1.7243343E12, 4.983333333333333], [1.7243349E12, 4.966666666666667], [1.7243352E12, 5.016666666666667], [1.7243355E12, 5.0], [1.7243358E12, 5.0], [1.72433448E12, 4.95], [1.72433418E12, 5.0], [1.72433478E12, 5.0], [1.72433508E12, 5.0], [1.72433538E12, 5.0], [1.72433568E12, 5.016666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72433598E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 2.0, "minX": 1.724334E12, "maxY": 5.033333333333333, "series": [{"data": [[1.72433436E12, 5.016666666666667], [1.72433598E12, 4.683333333333334], [1.72433406E12, 5.0], [1.72433496E12, 5.0], [1.72433466E12, 5.016666666666667], [1.72433526E12, 5.016666666666667], [1.72433556E12, 5.0], [1.72433424E12, 4.983333333333333], [1.72433586E12, 5.016666666666667], [1.72433484E12, 5.0], [1.72433454E12, 5.0], [1.72433514E12, 5.0], [1.72433544E12, 4.983333333333333], [1.72433412E12, 4.983333333333333], [1.72433574E12, 4.933333333333334], [1.72433472E12, 5.0], [1.72433442E12, 4.983333333333333], [1.72433502E12, 5.0], [1.72433532E12, 5.0], [1.724334E12, 2.0], [1.72433562E12, 5.0], [1.72433592E12, 5.033333333333333], [1.7243346E12, 5.0], [1.7243343E12, 4.983333333333333], [1.7243349E12, 4.983333333333333], [1.7243352E12, 5.016666666666667], [1.7243355E12, 5.016666666666667], [1.7243358E12, 5.016666666666667], [1.72433448E12, 4.966666666666667], [1.72433418E12, 5.0], [1.72433478E12, 5.016666666666667], [1.72433508E12, 5.016666666666667], [1.72433538E12, 5.0], [1.72433568E12, 5.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72433598E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 2.0, "minX": 1.724334E12, "maxY": 5.033333333333333, "series": [{"data": [[1.72433436E12, 5.016666666666667], [1.72433598E12, 4.683333333333334], [1.72433406E12, 5.0], [1.72433496E12, 5.0], [1.72433466E12, 5.016666666666667], [1.72433526E12, 5.016666666666667], [1.72433556E12, 5.0], [1.72433424E12, 4.983333333333333], [1.72433586E12, 5.016666666666667], [1.72433484E12, 5.0], [1.72433454E12, 5.0], [1.72433514E12, 5.0], [1.72433544E12, 4.983333333333333], [1.72433412E12, 4.983333333333333], [1.72433574E12, 4.933333333333334], [1.72433472E12, 5.0], [1.72433442E12, 4.983333333333333], [1.72433502E12, 5.0], [1.72433532E12, 5.0], [1.724334E12, 2.0], [1.72433562E12, 5.0], [1.72433592E12, 5.033333333333333], [1.7243346E12, 5.0], [1.7243343E12, 4.983333333333333], [1.7243349E12, 4.983333333333333], [1.7243352E12, 5.016666666666667], [1.7243355E12, 5.016666666666667], [1.7243358E12, 5.016666666666667], [1.72433448E12, 4.966666666666667], [1.72433418E12, 5.0], [1.72433478E12, 5.016666666666667], [1.72433508E12, 5.016666666666667], [1.72433538E12, 5.0], [1.72433568E12, 5.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72433598E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 2.0, "minX": 1.724334E12, "maxY": 5.033333333333333, "series": [{"data": [[1.72433436E12, 5.016666666666667], [1.72433598E12, 4.683333333333334], [1.72433406E12, 5.0], [1.72433496E12, 5.0], [1.72433466E12, 5.016666666666667], [1.72433526E12, 5.016666666666667], [1.72433556E12, 5.0], [1.72433424E12, 4.983333333333333], [1.72433586E12, 5.016666666666667], [1.72433484E12, 5.0], [1.72433454E12, 5.0], [1.72433514E12, 5.0], [1.72433544E12, 4.983333333333333], [1.72433412E12, 4.983333333333333], [1.72433574E12, 4.933333333333334], [1.72433472E12, 5.0], [1.72433442E12, 4.983333333333333], [1.72433502E12, 5.0], [1.72433532E12, 5.0], [1.724334E12, 2.0], [1.72433562E12, 5.0], [1.72433592E12, 5.033333333333333], [1.7243346E12, 5.0], [1.7243343E12, 4.983333333333333], [1.7243349E12, 4.983333333333333], [1.7243352E12, 5.016666666666667], [1.7243355E12, 5.016666666666667], [1.7243358E12, 5.016666666666667], [1.72433448E12, 4.966666666666667], [1.72433418E12, 5.0], [1.72433478E12, 5.016666666666667], [1.72433508E12, 5.016666666666667], [1.72433538E12, 5.0], [1.72433568E12, 5.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72433598E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

