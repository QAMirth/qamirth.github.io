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
        data: {"result": {"minY": 113.0, "minX": 0.0, "maxY": 2117.0, "series": [{"data": [[0.0, 113.0], [0.1, 117.0], [0.2, 117.0], [0.3, 118.0], [0.4, 118.0], [0.5, 118.0], [0.6, 118.0], [0.7, 118.0], [0.8, 119.0], [0.9, 119.0], [1.0, 119.0], [1.1, 119.0], [1.2, 119.0], [1.3, 119.0], [1.4, 120.0], [1.5, 120.0], [1.6, 120.0], [1.7, 120.0], [1.8, 120.0], [1.9, 120.0], [2.0, 120.0], [2.1, 120.0], [2.2, 120.0], [2.3, 120.0], [2.4, 120.0], [2.5, 120.0], [2.6, 120.0], [2.7, 121.0], [2.8, 121.0], [2.9, 121.0], [3.0, 121.0], [3.1, 121.0], [3.2, 121.0], [3.3, 121.0], [3.4, 121.0], [3.5, 121.0], [3.6, 122.0], [3.7, 122.0], [3.8, 122.0], [3.9, 122.0], [4.0, 122.0], [4.1, 122.0], [4.2, 122.0], [4.3, 122.0], [4.4, 122.0], [4.5, 122.0], [4.6, 122.0], [4.7, 122.0], [4.8, 122.0], [4.9, 122.0], [5.0, 122.0], [5.1, 122.0], [5.2, 122.0], [5.3, 123.0], [5.4, 123.0], [5.5, 123.0], [5.6, 123.0], [5.7, 123.0], [5.8, 123.0], [5.9, 123.0], [6.0, 123.0], [6.1, 123.0], [6.2, 123.0], [6.3, 123.0], [6.4, 123.0], [6.5, 123.0], [6.6, 123.0], [6.7, 123.0], [6.8, 123.0], [6.9, 123.0], [7.0, 123.0], [7.1, 123.0], [7.2, 123.0], [7.3, 123.0], [7.4, 124.0], [7.5, 124.0], [7.6, 124.0], [7.7, 124.0], [7.8, 124.0], [7.9, 124.0], [8.0, 124.0], [8.1, 124.0], [8.2, 124.0], [8.3, 124.0], [8.4, 124.0], [8.5, 124.0], [8.6, 124.0], [8.7, 124.0], [8.8, 124.0], [8.9, 124.0], [9.0, 124.0], [9.1, 124.0], [9.2, 124.0], [9.3, 124.0], [9.4, 124.0], [9.5, 124.0], [9.6, 124.0], [9.7, 124.0], [9.8, 124.0], [9.9, 125.0], [10.0, 125.0], [10.1, 125.0], [10.2, 125.0], [10.3, 125.0], [10.4, 125.0], [10.5, 125.0], [10.6, 125.0], [10.7, 125.0], [10.8, 125.0], [10.9, 125.0], [11.0, 125.0], [11.1, 125.0], [11.2, 125.0], [11.3, 125.0], [11.4, 125.0], [11.5, 125.0], [11.6, 125.0], [11.7, 125.0], [11.8, 125.0], [11.9, 125.0], [12.0, 125.0], [12.1, 125.0], [12.2, 125.0], [12.3, 125.0], [12.4, 125.0], [12.5, 125.0], [12.6, 125.0], [12.7, 125.0], [12.8, 125.0], [12.9, 125.0], [13.0, 126.0], [13.1, 126.0], [13.2, 126.0], [13.3, 126.0], [13.4, 126.0], [13.5, 126.0], [13.6, 126.0], [13.7, 126.0], [13.8, 126.0], [13.9, 126.0], [14.0, 126.0], [14.1, 126.0], [14.2, 126.0], [14.3, 126.0], [14.4, 126.0], [14.5, 126.0], [14.6, 126.0], [14.7, 126.0], [14.8, 126.0], [14.9, 126.0], [15.0, 126.0], [15.1, 126.0], [15.2, 126.0], [15.3, 126.0], [15.4, 126.0], [15.5, 126.0], [15.6, 126.0], [15.7, 126.0], [15.8, 126.0], [15.9, 126.0], [16.0, 126.0], [16.1, 126.0], [16.2, 126.0], [16.3, 127.0], [16.4, 127.0], [16.5, 127.0], [16.6, 127.0], [16.7, 127.0], [16.8, 127.0], [16.9, 127.0], [17.0, 127.0], [17.1, 127.0], [17.2, 127.0], [17.3, 127.0], [17.4, 127.0], [17.5, 127.0], [17.6, 127.0], [17.7, 127.0], [17.8, 127.0], [17.9, 127.0], [18.0, 127.0], [18.1, 127.0], [18.2, 127.0], [18.3, 127.0], [18.4, 127.0], [18.5, 127.0], [18.6, 127.0], [18.7, 127.0], [18.8, 127.0], [18.9, 127.0], [19.0, 127.0], [19.1, 127.0], [19.2, 127.0], [19.3, 127.0], [19.4, 127.0], [19.5, 127.0], [19.6, 127.0], [19.7, 127.0], [19.8, 127.0], [19.9, 127.0], [20.0, 127.0], [20.1, 128.0], [20.2, 128.0], [20.3, 128.0], [20.4, 128.0], [20.5, 128.0], [20.6, 128.0], [20.7, 128.0], [20.8, 128.0], [20.9, 128.0], [21.0, 128.0], [21.1, 128.0], [21.2, 128.0], [21.3, 128.0], [21.4, 128.0], [21.5, 128.0], [21.6, 128.0], [21.7, 128.0], [21.8, 128.0], [21.9, 128.0], [22.0, 128.0], [22.1, 128.0], [22.2, 128.0], [22.3, 128.0], [22.4, 128.0], [22.5, 128.0], [22.6, 128.0], [22.7, 128.0], [22.8, 128.0], [22.9, 128.0], [23.0, 128.0], [23.1, 128.0], [23.2, 128.0], [23.3, 128.0], [23.4, 128.0], [23.5, 128.0], [23.6, 128.0], [23.7, 128.0], [23.8, 128.0], [23.9, 128.0], [24.0, 128.0], [24.1, 128.0], [24.2, 128.0], [24.3, 128.0], [24.4, 129.0], [24.5, 129.0], [24.6, 129.0], [24.7, 129.0], [24.8, 129.0], [24.9, 129.0], [25.0, 129.0], [25.1, 129.0], [25.2, 129.0], [25.3, 129.0], [25.4, 129.0], [25.5, 129.0], [25.6, 129.0], [25.7, 129.0], [25.8, 129.0], [25.9, 129.0], [26.0, 129.0], [26.1, 129.0], [26.2, 129.0], [26.3, 129.0], [26.4, 129.0], [26.5, 129.0], [26.6, 129.0], [26.7, 129.0], [26.8, 129.0], [26.9, 129.0], [27.0, 129.0], [27.1, 129.0], [27.2, 129.0], [27.3, 129.0], [27.4, 129.0], [27.5, 129.0], [27.6, 129.0], [27.7, 129.0], [27.8, 129.0], [27.9, 129.0], [28.0, 129.0], [28.1, 129.0], [28.2, 129.0], [28.3, 129.0], [28.4, 129.0], [28.5, 129.0], [28.6, 129.0], [28.7, 129.0], [28.8, 129.0], [28.9, 129.0], [29.0, 130.0], [29.1, 130.0], [29.2, 130.0], [29.3, 130.0], [29.4, 130.0], [29.5, 130.0], [29.6, 130.0], [29.7, 130.0], [29.8, 130.0], [29.9, 130.0], [30.0, 130.0], [30.1, 130.0], [30.2, 130.0], [30.3, 130.0], [30.4, 130.0], [30.5, 130.0], [30.6, 130.0], [30.7, 130.0], [30.8, 130.0], [30.9, 130.0], [31.0, 130.0], [31.1, 130.0], [31.2, 130.0], [31.3, 130.0], [31.4, 130.0], [31.5, 130.0], [31.6, 130.0], [31.7, 130.0], [31.8, 130.0], [31.9, 130.0], [32.0, 130.0], [32.1, 130.0], [32.2, 130.0], [32.3, 130.0], [32.4, 130.0], [32.5, 130.0], [32.6, 130.0], [32.7, 130.0], [32.8, 130.0], [32.9, 130.0], [33.0, 130.0], [33.1, 130.0], [33.2, 130.0], [33.3, 130.0], [33.4, 130.0], [33.5, 130.0], [33.6, 130.0], [33.7, 130.0], [33.8, 130.0], [33.9, 131.0], [34.0, 131.0], [34.1, 131.0], [34.2, 131.0], [34.3, 131.0], [34.4, 131.0], [34.5, 131.0], [34.6, 131.0], [34.7, 131.0], [34.8, 131.0], [34.9, 131.0], [35.0, 131.0], [35.1, 131.0], [35.2, 131.0], [35.3, 131.0], [35.4, 131.0], [35.5, 131.0], [35.6, 131.0], [35.7, 131.0], [35.8, 131.0], [35.9, 131.0], [36.0, 131.0], [36.1, 131.0], [36.2, 131.0], [36.3, 131.0], [36.4, 131.0], [36.5, 131.0], [36.6, 131.0], [36.7, 131.0], [36.8, 131.0], [36.9, 131.0], [37.0, 131.0], [37.1, 131.0], [37.2, 131.0], [37.3, 131.0], [37.4, 131.0], [37.5, 131.0], [37.6, 131.0], [37.7, 131.0], [37.8, 131.0], [37.9, 131.0], [38.0, 131.0], [38.1, 131.0], [38.2, 131.0], [38.3, 131.0], [38.4, 131.0], [38.5, 131.0], [38.6, 131.0], [38.7, 131.0], [38.8, 131.0], [38.9, 131.0], [39.0, 131.0], [39.1, 131.0], [39.2, 132.0], [39.3, 132.0], [39.4, 132.0], [39.5, 132.0], [39.6, 132.0], [39.7, 132.0], [39.8, 132.0], [39.9, 132.0], [40.0, 132.0], [40.1, 132.0], [40.2, 132.0], [40.3, 132.0], [40.4, 132.0], [40.5, 132.0], [40.6, 132.0], [40.7, 132.0], [40.8, 132.0], [40.9, 132.0], [41.0, 132.0], [41.1, 132.0], [41.2, 132.0], [41.3, 132.0], [41.4, 132.0], [41.5, 132.0], [41.6, 132.0], [41.7, 132.0], [41.8, 132.0], [41.9, 132.0], [42.0, 132.0], [42.1, 132.0], [42.2, 132.0], [42.3, 132.0], [42.4, 132.0], [42.5, 132.0], [42.6, 132.0], [42.7, 132.0], [42.8, 132.0], [42.9, 132.0], [43.0, 132.0], [43.1, 132.0], [43.2, 132.0], [43.3, 132.0], [43.4, 132.0], [43.5, 132.0], [43.6, 132.0], [43.7, 132.0], [43.8, 132.0], [43.9, 132.0], [44.0, 132.0], [44.1, 132.0], [44.2, 132.0], [44.3, 132.0], [44.4, 132.0], [44.5, 132.0], [44.6, 132.0], [44.7, 132.0], [44.8, 132.0], [44.9, 132.0], [45.0, 132.0], [45.1, 132.0], [45.2, 132.0], [45.3, 132.0], [45.4, 132.0], [45.5, 133.0], [45.6, 133.0], [45.7, 133.0], [45.8, 133.0], [45.9, 133.0], [46.0, 133.0], [46.1, 133.0], [46.2, 133.0], [46.3, 133.0], [46.4, 133.0], [46.5, 133.0], [46.6, 133.0], [46.7, 133.0], [46.8, 133.0], [46.9, 133.0], [47.0, 133.0], [47.1, 133.0], [47.2, 133.0], [47.3, 133.0], [47.4, 133.0], [47.5, 133.0], [47.6, 133.0], [47.7, 133.0], [47.8, 133.0], [47.9, 133.0], [48.0, 133.0], [48.1, 133.0], [48.2, 133.0], [48.3, 133.0], [48.4, 133.0], [48.5, 133.0], [48.6, 133.0], [48.7, 133.0], [48.8, 133.0], [48.9, 133.0], [49.0, 133.0], [49.1, 133.0], [49.2, 133.0], [49.3, 133.0], [49.4, 133.0], [49.5, 133.0], [49.6, 133.0], [49.7, 133.0], [49.8, 133.0], [49.9, 133.0], [50.0, 133.0], [50.1, 133.0], [50.2, 133.0], [50.3, 133.0], [50.4, 133.0], [50.5, 133.0], [50.6, 133.0], [50.7, 133.0], [50.8, 133.0], [50.9, 133.0], [51.0, 133.0], [51.1, 133.0], [51.2, 133.0], [51.3, 133.0], [51.4, 133.0], [51.5, 133.0], [51.6, 133.0], [51.7, 133.0], [51.8, 134.0], [51.9, 134.0], [52.0, 134.0], [52.1, 134.0], [52.2, 134.0], [52.3, 134.0], [52.4, 134.0], [52.5, 134.0], [52.6, 134.0], [52.7, 134.0], [52.8, 134.0], [52.9, 134.0], [53.0, 134.0], [53.1, 134.0], [53.2, 134.0], [53.3, 134.0], [53.4, 134.0], [53.5, 134.0], [53.6, 134.0], [53.7, 134.0], [53.8, 134.0], [53.9, 134.0], [54.0, 134.0], [54.1, 134.0], [54.2, 134.0], [54.3, 134.0], [54.4, 134.0], [54.5, 134.0], [54.6, 134.0], [54.7, 134.0], [54.8, 134.0], [54.9, 134.0], [55.0, 134.0], [55.1, 134.0], [55.2, 134.0], [55.3, 134.0], [55.4, 134.0], [55.5, 134.0], [55.6, 134.0], [55.7, 134.0], [55.8, 134.0], [55.9, 134.0], [56.0, 134.0], [56.1, 134.0], [56.2, 134.0], [56.3, 134.0], [56.4, 134.0], [56.5, 134.0], [56.6, 134.0], [56.7, 134.0], [56.8, 134.0], [56.9, 134.0], [57.0, 134.0], [57.1, 134.0], [57.2, 134.0], [57.3, 134.0], [57.4, 134.0], [57.5, 134.0], [57.6, 134.0], [57.7, 134.0], [57.8, 134.0], [57.9, 135.0], [58.0, 135.0], [58.1, 135.0], [58.2, 135.0], [58.3, 135.0], [58.4, 135.0], [58.5, 135.0], [58.6, 135.0], [58.7, 135.0], [58.8, 135.0], [58.9, 135.0], [59.0, 135.0], [59.1, 135.0], [59.2, 135.0], [59.3, 135.0], [59.4, 135.0], [59.5, 135.0], [59.6, 135.0], [59.7, 135.0], [59.8, 135.0], [59.9, 135.0], [60.0, 135.0], [60.1, 135.0], [60.2, 135.0], [60.3, 135.0], [60.4, 135.0], [60.5, 135.0], [60.6, 135.0], [60.7, 135.0], [60.8, 135.0], [60.9, 135.0], [61.0, 135.0], [61.1, 135.0], [61.2, 135.0], [61.3, 135.0], [61.4, 135.0], [61.5, 135.0], [61.6, 135.0], [61.7, 135.0], [61.8, 135.0], [61.9, 135.0], [62.0, 135.0], [62.1, 135.0], [62.2, 135.0], [62.3, 135.0], [62.4, 135.0], [62.5, 135.0], [62.6, 135.0], [62.7, 135.0], [62.8, 135.0], [62.9, 135.0], [63.0, 135.0], [63.1, 135.0], [63.2, 135.0], [63.3, 135.0], [63.4, 136.0], [63.5, 136.0], [63.6, 136.0], [63.7, 136.0], [63.8, 136.0], [63.9, 136.0], [64.0, 136.0], [64.1, 136.0], [64.2, 136.0], [64.3, 136.0], [64.4, 136.0], [64.5, 136.0], [64.6, 136.0], [64.7, 136.0], [64.8, 136.0], [64.9, 136.0], [65.0, 136.0], [65.1, 136.0], [65.2, 136.0], [65.3, 136.0], [65.4, 136.0], [65.5, 136.0], [65.6, 136.0], [65.7, 136.0], [65.8, 136.0], [65.9, 136.0], [66.0, 136.0], [66.1, 136.0], [66.2, 136.0], [66.3, 136.0], [66.4, 136.0], [66.5, 136.0], [66.6, 136.0], [66.7, 136.0], [66.8, 136.0], [66.9, 136.0], [67.0, 136.0], [67.1, 136.0], [67.2, 136.0], [67.3, 136.0], [67.4, 136.0], [67.5, 136.0], [67.6, 136.0], [67.7, 136.0], [67.8, 136.0], [67.9, 136.0], [68.0, 136.0], [68.1, 136.0], [68.2, 136.0], [68.3, 137.0], [68.4, 137.0], [68.5, 137.0], [68.6, 137.0], [68.7, 137.0], [68.8, 137.0], [68.9, 137.0], [69.0, 137.0], [69.1, 137.0], [69.2, 137.0], [69.3, 137.0], [69.4, 137.0], [69.5, 137.0], [69.6, 137.0], [69.7, 137.0], [69.8, 137.0], [69.9, 137.0], [70.0, 137.0], [70.1, 137.0], [70.2, 137.0], [70.3, 137.0], [70.4, 137.0], [70.5, 137.0], [70.6, 137.0], [70.7, 137.0], [70.8, 137.0], [70.9, 137.0], [71.0, 137.0], [71.1, 137.0], [71.2, 137.0], [71.3, 137.0], [71.4, 137.0], [71.5, 137.0], [71.6, 137.0], [71.7, 137.0], [71.8, 137.0], [71.9, 137.0], [72.0, 137.0], [72.1, 137.0], [72.2, 138.0], [72.3, 138.0], [72.4, 138.0], [72.5, 138.0], [72.6, 138.0], [72.7, 138.0], [72.8, 138.0], [72.9, 138.0], [73.0, 138.0], [73.1, 138.0], [73.2, 138.0], [73.3, 138.0], [73.4, 138.0], [73.5, 138.0], [73.6, 138.0], [73.7, 138.0], [73.8, 138.0], [73.9, 138.0], [74.0, 138.0], [74.1, 138.0], [74.2, 138.0], [74.3, 138.0], [74.4, 138.0], [74.5, 138.0], [74.6, 138.0], [74.7, 138.0], [74.8, 138.0], [74.9, 138.0], [75.0, 138.0], [75.1, 138.0], [75.2, 138.0], [75.3, 138.0], [75.4, 138.0], [75.5, 138.0], [75.6, 138.0], [75.7, 138.0], [75.8, 138.0], [75.9, 138.0], [76.0, 138.0], [76.1, 138.0], [76.2, 138.0], [76.3, 138.0], [76.4, 139.0], [76.5, 139.0], [76.6, 139.0], [76.7, 139.0], [76.8, 139.0], [76.9, 139.0], [77.0, 139.0], [77.1, 139.0], [77.2, 139.0], [77.3, 139.0], [77.4, 139.0], [77.5, 139.0], [77.6, 139.0], [77.7, 139.0], [77.8, 139.0], [77.9, 139.0], [78.0, 139.0], [78.1, 139.0], [78.2, 139.0], [78.3, 139.0], [78.4, 139.0], [78.5, 139.0], [78.6, 139.0], [78.7, 139.0], [78.8, 139.0], [78.9, 139.0], [79.0, 139.0], [79.1, 139.0], [79.2, 139.0], [79.3, 139.0], [79.4, 139.0], [79.5, 139.0], [79.6, 139.0], [79.7, 140.0], [79.8, 140.0], [79.9, 140.0], [80.0, 140.0], [80.1, 140.0], [80.2, 140.0], [80.3, 140.0], [80.4, 140.0], [80.5, 140.0], [80.6, 140.0], [80.7, 140.0], [80.8, 140.0], [80.9, 140.0], [81.0, 140.0], [81.1, 140.0], [81.2, 140.0], [81.3, 140.0], [81.4, 140.0], [81.5, 140.0], [81.6, 140.0], [81.7, 140.0], [81.8, 140.0], [81.9, 140.0], [82.0, 141.0], [82.1, 141.0], [82.2, 141.0], [82.3, 141.0], [82.4, 141.0], [82.5, 141.0], [82.6, 141.0], [82.7, 141.0], [82.8, 141.0], [82.9, 141.0], [83.0, 141.0], [83.1, 141.0], [83.2, 141.0], [83.3, 141.0], [83.4, 141.0], [83.5, 141.0], [83.6, 141.0], [83.7, 141.0], [83.8, 141.0], [83.9, 141.0], [84.0, 141.0], [84.1, 141.0], [84.2, 141.0], [84.3, 141.0], [84.4, 142.0], [84.5, 142.0], [84.6, 142.0], [84.7, 142.0], [84.8, 142.0], [84.9, 142.0], [85.0, 142.0], [85.1, 142.0], [85.2, 142.0], [85.3, 142.0], [85.4, 142.0], [85.5, 142.0], [85.6, 142.0], [85.7, 142.0], [85.8, 142.0], [85.9, 142.0], [86.0, 142.0], [86.1, 143.0], [86.2, 143.0], [86.3, 143.0], [86.4, 143.0], [86.5, 143.0], [86.6, 143.0], [86.7, 143.0], [86.8, 143.0], [86.9, 143.0], [87.0, 143.0], [87.1, 143.0], [87.2, 143.0], [87.3, 143.0], [87.4, 143.0], [87.5, 143.0], [87.6, 143.0], [87.7, 144.0], [87.8, 144.0], [87.9, 144.0], [88.0, 144.0], [88.1, 144.0], [88.2, 144.0], [88.3, 144.0], [88.4, 144.0], [88.5, 144.0], [88.6, 145.0], [88.7, 145.0], [88.8, 145.0], [88.9, 145.0], [89.0, 145.0], [89.1, 145.0], [89.2, 145.0], [89.3, 145.0], [89.4, 146.0], [89.5, 146.0], [89.6, 146.0], [89.7, 146.0], [89.8, 146.0], [89.9, 146.0], [90.0, 146.0], [90.1, 147.0], [90.2, 147.0], [90.3, 147.0], [90.4, 147.0], [90.5, 147.0], [90.6, 147.0], [90.7, 147.0], [90.8, 148.0], [90.9, 148.0], [91.0, 148.0], [91.1, 148.0], [91.2, 149.0], [91.3, 149.0], [91.4, 149.0], [91.5, 150.0], [91.6, 150.0], [91.7, 150.0], [91.8, 150.0], [91.9, 150.0], [92.0, 151.0], [92.1, 151.0], [92.2, 151.0], [92.3, 152.0], [92.4, 152.0], [92.5, 152.0], [92.6, 152.0], [92.7, 153.0], [92.8, 153.0], [92.9, 154.0], [93.0, 155.0], [93.1, 155.0], [93.2, 156.0], [93.3, 157.0], [93.4, 157.0], [93.5, 159.0], [93.6, 159.0], [93.7, 161.0], [93.8, 162.0], [93.9, 163.0], [94.0, 165.0], [94.1, 166.0], [94.2, 167.0], [94.3, 169.0], [94.4, 169.0], [94.5, 170.0], [94.6, 170.0], [94.7, 173.0], [94.8, 174.0], [94.9, 177.0], [95.0, 179.0], [95.1, 180.0], [95.2, 183.0], [95.3, 187.0], [95.4, 189.0], [95.5, 191.0], [95.6, 203.0], [95.7, 211.0], [95.8, 218.0], [95.9, 227.0], [96.0, 234.0], [96.1, 239.0], [96.2, 244.0], [96.3, 250.0], [96.4, 265.0], [96.5, 284.0], [96.6, 293.0], [96.7, 309.0], [96.8, 314.0], [96.9, 321.0], [97.0, 326.0], [97.1, 328.0], [97.2, 334.0], [97.3, 338.0], [97.4, 372.0], [97.5, 387.0], [97.6, 390.0], [97.7, 392.0], [97.8, 395.0], [97.9, 399.0], [98.0, 403.0], [98.1, 408.0], [98.2, 419.0], [98.3, 422.0], [98.4, 426.0], [98.5, 428.0], [98.6, 429.0], [98.7, 430.0], [98.8, 433.0], [98.9, 435.0], [99.0, 438.0], [99.1, 447.0], [99.2, 509.0], [99.3, 921.0], [99.4, 1132.0], [99.5, 1135.0], [99.6, 1137.0], [99.7, 1156.0], [99.8, 1328.0], [99.9, 2064.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 4779.0, "series": [{"data": [[2100.0, 1.0], [700.0, 1.0], [200.0, 52.0], [900.0, 1.0], [1100.0, 22.0], [300.0, 65.0], [1200.0, 2.0], [1300.0, 1.0], [1400.0, 2.0], [1600.0, 2.0], [100.0, 4779.0], [400.0, 64.0], [2000.0, 4.0], [500.0, 4.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 7.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4960.0, "series": [{"data": [[0.0, 4960.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 33.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 7.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.033222591362126, "minX": 1.72434654E12, "maxY": 1.4767025089605734, "series": [{"data": [[1.72434696E12, 1.0664451827242523], [1.72434666E12, 1.033222591362126], [1.72434732E12, 1.0399999999999998], [1.72434702E12, 1.1366666666666665], [1.7243472E12, 1.0933333333333335], [1.7243469E12, 1.0699999999999996], [1.7243466E12, 1.0802675585284283], [1.72434726E12, 1.0766666666666669], [1.72434744E12, 1.0633333333333328], [1.72434714E12, 1.069999999999999], [1.72434684E12, 1.0599999999999996], [1.72434654E12, 1.4767025089605734], [1.7243475E12, 1.1357466063348416], [1.72434672E12, 1.0533333333333326], [1.72434738E12, 1.1129568106312295], [1.72434708E12, 1.1070234113712376], [1.72434678E12, 1.0735785953177266]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7243475E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 137.3239041243801, "minX": 1.0, "maxY": 2083.0, "series": [{"data": [[8.0, 1661.0], [2.0, 250.77346278317165], [1.0, 137.3239041243801], [10.0, 1041.0], [5.0, 1712.5], [11.0, 1642.0], [12.0, 2083.0], [6.0, 728.0], [3.0, 418.49999999999994], [13.0, 2076.0], [14.0, 2064.0], [7.0, 921.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.1007999999999967, 150.24939999999978]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 14.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 442.0, "minX": 1.72434654E12, "maxY": 39646.01666666667, "series": [{"data": [[1.72434696E12, 39646.01666666667], [1.72434666E12, 39637.7], [1.72434732E12, 39511.35], [1.72434702E12, 39514.6], [1.7243472E12, 39506.03333333333], [1.7243469E12, 39513.73333333333], [1.7243466E12, 39374.23333333333], [1.72434726E12, 39506.15], [1.72434744E12, 39513.3], [1.72434714E12, 39514.78333333333], [1.72434684E12, 39513.21666666667], [1.72434654E12, 36748.11666666667], [1.7243475E12, 29108.466666666667], [1.72434672E12, 39511.1], [1.72434738E12, 39644.166666666664], [1.72434708E12, 39383.03333333333], [1.72434678E12, 39380.76666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.72434696E12, 602.0], [1.72434666E12, 602.0], [1.72434732E12, 600.0], [1.72434702E12, 600.0], [1.7243472E12, 600.0], [1.7243469E12, 600.0], [1.7243466E12, 598.0], [1.72434726E12, 600.0], [1.72434744E12, 600.0], [1.72434714E12, 600.0], [1.72434684E12, 600.0], [1.72434654E12, 558.0], [1.7243475E12, 442.0], [1.72434672E12, 600.0], [1.72434738E12, 602.0], [1.72434708E12, 598.0], [1.72434678E12, 598.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7243475E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 133.33666666666676, "minX": 1.72434654E12, "maxY": 219.92114695340507, "series": [{"data": [[1.72434696E12, 143.3953488372094], [1.72434666E12, 140.1395348837209], [1.72434732E12, 133.33666666666676], [1.72434702E12, 157.24333333333345], [1.7243472E12, 148.98333333333323], [1.7243469E12, 145.03333333333327], [1.7243466E12, 147.10367892976575], [1.72434726E12, 147.2], [1.72434744E12, 142.7733333333335], [1.72434714E12, 146.56666666666663], [1.72434684E12, 144.58666666666676], [1.72434654E12, 219.92114695340507], [1.7243475E12, 156.9185520361991], [1.72434672E12, 142.66000000000014], [1.72434738E12, 151.57142857142878], [1.72434708E12, 147.33444816053515], [1.72434678E12, 146.12374581939804]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7243475E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 132.42000000000004, "minX": 1.72434654E12, "maxY": 218.67025089605735, "series": [{"data": [[1.72434696E12, 141.6112956810631], [1.72434666E12, 139.3853820598007], [1.72434732E12, 132.42000000000004], [1.72434702E12, 156.5866666666666], [1.7243472E12, 148.16666666666666], [1.7243469E12, 143.9466666666667], [1.7243466E12, 146.30100334448156], [1.72434726E12, 146.2433333333333], [1.72434744E12, 142.15999999999997], [1.72434714E12, 145.5133333333334], [1.72434684E12, 143.78], [1.72434654E12, 218.67025089605735], [1.7243475E12, 156.0090497737558], [1.72434672E12, 141.78666666666666], [1.72434738E12, 150.50830564784067], [1.72434708E12, 145.7759197324414], [1.72434678E12, 145.50501672240804]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7243475E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 90.74666666666667, "minX": 1.72434654E12, "maxY": 169.15053763440852, "series": [{"data": [[1.72434696E12, 95.53488372093017], [1.72434666E12, 93.27574750830573], [1.72434732E12, 90.74666666666667], [1.72434702E12, 105.94333333333333], [1.7243472E12, 104.09333333333326], [1.7243469E12, 96.28999999999999], [1.7243466E12, 100.07357859531778], [1.72434726E12, 101.70666666666669], [1.72434744E12, 94.99666666666668], [1.72434714E12, 98.72666666666667], [1.72434684E12, 100.00666666666662], [1.72434654E12, 169.15053763440852], [1.7243475E12, 109.34389140271495], [1.72434672E12, 94.79], [1.72434738E12, 105.35548172757478], [1.72434708E12, 99.68561872909697], [1.72434678E12, 102.23411371237458]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7243475E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 113.0, "minX": 1.72434654E12, "maxY": 2117.0, "series": [{"data": [[1.72434696E12, 1134.0], [1.72434666E12, 441.0], [1.72434732E12, 428.0], [1.72434702E12, 1137.0], [1.7243472E12, 1156.0], [1.7243469E12, 445.0], [1.7243466E12, 1144.0], [1.72434726E12, 1139.0], [1.72434744E12, 476.0], [1.72434714E12, 1136.0], [1.72434684E12, 1137.0], [1.72434654E12, 2117.0], [1.7243475E12, 1157.0], [1.72434672E12, 509.0], [1.72434738E12, 1149.0], [1.72434708E12, 1438.0], [1.72434678E12, 1137.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.72434696E12, 141.0], [1.72434666E12, 145.0], [1.72434732E12, 137.90000000000003], [1.72434702E12, 147.0], [1.7243472E12, 145.0], [1.7243469E12, 147.0], [1.7243466E12, 152.0], [1.72434726E12, 142.0], [1.72434744E12, 143.90000000000003], [1.72434714E12, 144.0], [1.72434684E12, 143.90000000000003], [1.72434654E12, 190.0], [1.7243475E12, 142.8], [1.72434672E12, 146.80000000000007], [1.72434738E12, 153.0], [1.72434708E12, 141.0], [1.72434678E12, 145.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.72434696E12, 434.94000000000005], [1.72434666E12, 425.9000000000001], [1.72434732E12, 384.97], [1.72434702E12, 1125.310000000006], [1.7243472E12, 428.99], [1.7243469E12, 423.93000000000006], [1.7243466E12, 437.0], [1.72434726E12, 1122.0500000000063], [1.72434744E12, 436.0], [1.72434714E12, 428.0], [1.72434684E12, 405.96000000000004], [1.72434654E12, 2085.7999999999997], [1.7243475E12, 1150.38], [1.72434672E12, 429.99], [1.72434738E12, 1114.840000000011], [1.72434708E12, 429.0], [1.72434678E12, 420.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.72434696E12, 147.89999999999998], [1.72434666E12, 150.0], [1.72434732E12, 146.84999999999997], [1.72434702E12, 343.74999999999994], [1.7243472E12, 202.34999999999985], [1.7243469E12, 216.89999999999975], [1.7243466E12, 177.0], [1.72434726E12, 169.0], [1.72434744E12, 178.89999999999998], [1.72434714E12, 169.89999999999998], [1.72434684E12, 176.89999999999998], [1.72434654E12, 728.0], [1.7243475E12, 318.59999999999786], [1.72434672E12, 170.0], [1.72434738E12, 203.79999999999973], [1.72434708E12, 155.0], [1.72434678E12, 164.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.72434696E12, 118.0], [1.72434666E12, 117.0], [1.72434732E12, 118.0], [1.72434702E12, 113.0], [1.7243472E12, 117.0], [1.7243469E12, 117.0], [1.7243466E12, 119.0], [1.72434726E12, 116.0], [1.72434744E12, 118.0], [1.72434714E12, 118.0], [1.72434684E12, 114.0], [1.72434654E12, 120.0], [1.7243475E12, 118.0], [1.72434672E12, 118.0], [1.72434738E12, 117.0], [1.72434708E12, 118.0], [1.72434678E12, 118.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.72434696E12, 132.0], [1.72434666E12, 135.0], [1.72434732E12, 126.5], [1.72434702E12, 133.0], [1.7243472E12, 134.0], [1.7243469E12, 133.0], [1.7243466E12, 137.0], [1.72434726E12, 132.0], [1.72434744E12, 132.0], [1.72434714E12, 134.0], [1.72434684E12, 132.0], [1.72434654E12, 139.0], [1.7243475E12, 132.0], [1.72434672E12, 135.0], [1.72434738E12, 132.0], [1.72434708E12, 133.0], [1.72434678E12, 133.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7243475E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 128.0, "minX": 1.0, "maxY": 1568.5, "series": [{"data": [[4.0, 133.0], [1.0, 128.0], [5.0, 133.0], [6.0, 134.0], [3.0, 134.0], [14.0, 1568.5], [7.0, 135.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 14.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 128.0, "minX": 1.0, "maxY": 1566.5, "series": [{"data": [[4.0, 132.0], [1.0, 128.0], [5.0, 132.0], [6.0, 133.5], [3.0, 133.5], [14.0, 1566.5], [7.0, 135.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 14.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.6666666666666665, "minX": 1.72434654E12, "maxY": 5.016666666666667, "series": [{"data": [[1.72434696E12, 5.016666666666667], [1.72434666E12, 5.0], [1.72434732E12, 5.016666666666667], [1.72434702E12, 4.983333333333333], [1.7243472E12, 5.0], [1.7243469E12, 5.0], [1.7243466E12, 5.0], [1.72434726E12, 5.0], [1.72434744E12, 5.0], [1.72434714E12, 5.016666666666667], [1.72434684E12, 5.0], [1.72434654E12, 4.65], [1.7243475E12, 3.6666666666666665], [1.72434672E12, 5.016666666666667], [1.72434738E12, 5.0], [1.72434708E12, 4.983333333333333], [1.72434678E12, 4.983333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7243475E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.683333333333333, "minX": 1.72434654E12, "maxY": 5.016666666666667, "series": [{"data": [[1.72434696E12, 5.016666666666667], [1.72434666E12, 5.016666666666667], [1.72434732E12, 5.0], [1.72434702E12, 5.0], [1.7243472E12, 5.0], [1.7243469E12, 5.0], [1.7243466E12, 4.983333333333333], [1.72434726E12, 5.0], [1.72434744E12, 5.0], [1.72434714E12, 5.0], [1.72434684E12, 5.0], [1.72434654E12, 4.65], [1.7243475E12, 3.683333333333333], [1.72434672E12, 5.0], [1.72434738E12, 5.016666666666667], [1.72434708E12, 4.983333333333333], [1.72434678E12, 4.983333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7243475E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.683333333333333, "minX": 1.72434654E12, "maxY": 5.016666666666667, "series": [{"data": [[1.72434696E12, 5.016666666666667], [1.72434666E12, 5.016666666666667], [1.72434732E12, 5.0], [1.72434702E12, 5.0], [1.7243472E12, 5.0], [1.7243469E12, 5.0], [1.7243466E12, 4.983333333333333], [1.72434726E12, 5.0], [1.72434744E12, 5.0], [1.72434714E12, 5.0], [1.72434684E12, 5.0], [1.72434654E12, 4.65], [1.7243475E12, 3.683333333333333], [1.72434672E12, 5.0], [1.72434738E12, 5.016666666666667], [1.72434708E12, 4.983333333333333], [1.72434678E12, 4.983333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7243475E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.683333333333333, "minX": 1.72434654E12, "maxY": 5.016666666666667, "series": [{"data": [[1.72434696E12, 5.016666666666667], [1.72434666E12, 5.016666666666667], [1.72434732E12, 5.0], [1.72434702E12, 5.0], [1.7243472E12, 5.0], [1.7243469E12, 5.0], [1.7243466E12, 4.983333333333333], [1.72434726E12, 5.0], [1.72434744E12, 5.0], [1.72434714E12, 5.0], [1.72434684E12, 5.0], [1.72434654E12, 4.65], [1.7243475E12, 3.683333333333333], [1.72434672E12, 5.0], [1.72434738E12, 5.016666666666667], [1.72434708E12, 4.983333333333333], [1.72434678E12, 4.983333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7243475E12, "title": "Total Transactions Per Second"}},
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

