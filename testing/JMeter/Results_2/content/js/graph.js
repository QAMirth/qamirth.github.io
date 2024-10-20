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
        data: {"result": {"minY": 115.0, "minX": 0.0, "maxY": 2152.0, "series": [{"data": [[0.0, 115.0], [0.1, 116.0], [0.2, 116.0], [0.3, 116.0], [0.4, 117.0], [0.5, 117.0], [0.6, 117.0], [0.7, 117.0], [0.8, 117.0], [0.9, 117.0], [1.0, 118.0], [1.1, 118.0], [1.2, 118.0], [1.3, 118.0], [1.4, 118.0], [1.5, 118.0], [1.6, 118.0], [1.7, 118.0], [1.8, 118.0], [1.9, 118.0], [2.0, 118.0], [2.1, 118.0], [2.2, 119.0], [2.3, 119.0], [2.4, 119.0], [2.5, 119.0], [2.6, 119.0], [2.7, 119.0], [2.8, 119.0], [2.9, 119.0], [3.0, 119.0], [3.1, 119.0], [3.2, 119.0], [3.3, 119.0], [3.4, 119.0], [3.5, 119.0], [3.6, 119.0], [3.7, 119.0], [3.8, 119.0], [3.9, 119.0], [4.0, 119.0], [4.1, 119.0], [4.2, 119.0], [4.3, 119.0], [4.4, 119.0], [4.5, 119.0], [4.6, 120.0], [4.7, 120.0], [4.8, 120.0], [4.9, 120.0], [5.0, 120.0], [5.1, 120.0], [5.2, 120.0], [5.3, 120.0], [5.4, 120.0], [5.5, 120.0], [5.6, 120.0], [5.7, 120.0], [5.8, 120.0], [5.9, 120.0], [6.0, 120.0], [6.1, 120.0], [6.2, 120.0], [6.3, 120.0], [6.4, 120.0], [6.5, 120.0], [6.6, 120.0], [6.7, 120.0], [6.8, 120.0], [6.9, 120.0], [7.0, 120.0], [7.1, 120.0], [7.2, 120.0], [7.3, 121.0], [7.4, 121.0], [7.5, 121.0], [7.6, 121.0], [7.7, 121.0], [7.8, 121.0], [7.9, 121.0], [8.0, 121.0], [8.1, 121.0], [8.2, 121.0], [8.3, 121.0], [8.4, 121.0], [8.5, 121.0], [8.6, 121.0], [8.7, 121.0], [8.8, 121.0], [8.9, 121.0], [9.0, 121.0], [9.1, 121.0], [9.2, 121.0], [9.3, 121.0], [9.4, 121.0], [9.5, 121.0], [9.6, 121.0], [9.7, 121.0], [9.8, 121.0], [9.9, 121.0], [10.0, 121.0], [10.1, 121.0], [10.2, 121.0], [10.3, 121.0], [10.4, 121.0], [10.5, 121.0], [10.6, 121.0], [10.7, 121.0], [10.8, 121.0], [10.9, 121.0], [11.0, 121.0], [11.1, 121.0], [11.2, 121.0], [11.3, 121.0], [11.4, 121.0], [11.5, 122.0], [11.6, 122.0], [11.7, 122.0], [11.8, 122.0], [11.9, 122.0], [12.0, 122.0], [12.1, 122.0], [12.2, 122.0], [12.3, 122.0], [12.4, 122.0], [12.5, 122.0], [12.6, 122.0], [12.7, 122.0], [12.8, 122.0], [12.9, 122.0], [13.0, 122.0], [13.1, 122.0], [13.2, 122.0], [13.3, 122.0], [13.4, 122.0], [13.5, 122.0], [13.6, 122.0], [13.7, 122.0], [13.8, 122.0], [13.9, 122.0], [14.0, 122.0], [14.1, 122.0], [14.2, 122.0], [14.3, 122.0], [14.4, 122.0], [14.5, 122.0], [14.6, 122.0], [14.7, 122.0], [14.8, 122.0], [14.9, 122.0], [15.0, 122.0], [15.1, 122.0], [15.2, 122.0], [15.3, 122.0], [15.4, 122.0], [15.5, 122.0], [15.6, 122.0], [15.7, 122.0], [15.8, 122.0], [15.9, 122.0], [16.0, 122.0], [16.1, 122.0], [16.2, 122.0], [16.3, 122.0], [16.4, 122.0], [16.5, 122.0], [16.6, 122.0], [16.7, 122.0], [16.8, 122.0], [16.9, 122.0], [17.0, 122.0], [17.1, 122.0], [17.2, 122.0], [17.3, 122.0], [17.4, 122.0], [17.5, 122.0], [17.6, 122.0], [17.7, 123.0], [17.8, 123.0], [17.9, 123.0], [18.0, 123.0], [18.1, 123.0], [18.2, 123.0], [18.3, 123.0], [18.4, 123.0], [18.5, 123.0], [18.6, 123.0], [18.7, 123.0], [18.8, 123.0], [18.9, 123.0], [19.0, 123.0], [19.1, 123.0], [19.2, 123.0], [19.3, 123.0], [19.4, 123.0], [19.5, 123.0], [19.6, 123.0], [19.7, 123.0], [19.8, 123.0], [19.9, 123.0], [20.0, 123.0], [20.1, 123.0], [20.2, 123.0], [20.3, 123.0], [20.4, 123.0], [20.5, 123.0], [20.6, 123.0], [20.7, 123.0], [20.8, 123.0], [20.9, 123.0], [21.0, 123.0], [21.1, 123.0], [21.2, 123.0], [21.3, 123.0], [21.4, 123.0], [21.5, 123.0], [21.6, 123.0], [21.7, 123.0], [21.8, 123.0], [21.9, 123.0], [22.0, 123.0], [22.1, 123.0], [22.2, 123.0], [22.3, 123.0], [22.4, 123.0], [22.5, 123.0], [22.6, 123.0], [22.7, 123.0], [22.8, 123.0], [22.9, 123.0], [23.0, 123.0], [23.1, 123.0], [23.2, 123.0], [23.3, 123.0], [23.4, 123.0], [23.5, 123.0], [23.6, 123.0], [23.7, 123.0], [23.8, 123.0], [23.9, 123.0], [24.0, 123.0], [24.1, 123.0], [24.2, 123.0], [24.3, 123.0], [24.4, 123.0], [24.5, 123.0], [24.6, 123.0], [24.7, 124.0], [24.8, 124.0], [24.9, 124.0], [25.0, 124.0], [25.1, 124.0], [25.2, 124.0], [25.3, 124.0], [25.4, 124.0], [25.5, 124.0], [25.6, 124.0], [25.7, 124.0], [25.8, 124.0], [25.9, 124.0], [26.0, 124.0], [26.1, 124.0], [26.2, 124.0], [26.3, 124.0], [26.4, 124.0], [26.5, 124.0], [26.6, 124.0], [26.7, 124.0], [26.8, 124.0], [26.9, 124.0], [27.0, 124.0], [27.1, 124.0], [27.2, 124.0], [27.3, 124.0], [27.4, 124.0], [27.5, 124.0], [27.6, 124.0], [27.7, 124.0], [27.8, 124.0], [27.9, 124.0], [28.0, 124.0], [28.1, 124.0], [28.2, 124.0], [28.3, 124.0], [28.4, 124.0], [28.5, 124.0], [28.6, 124.0], [28.7, 124.0], [28.8, 124.0], [28.9, 124.0], [29.0, 124.0], [29.1, 124.0], [29.2, 124.0], [29.3, 124.0], [29.4, 124.0], [29.5, 124.0], [29.6, 124.0], [29.7, 124.0], [29.8, 124.0], [29.9, 124.0], [30.0, 124.0], [30.1, 124.0], [30.2, 124.0], [30.3, 124.0], [30.4, 124.0], [30.5, 124.0], [30.6, 124.0], [30.7, 124.0], [30.8, 124.0], [30.9, 124.0], [31.0, 124.0], [31.1, 124.0], [31.2, 124.0], [31.3, 124.0], [31.4, 124.0], [31.5, 124.0], [31.6, 124.0], [31.7, 124.0], [31.8, 124.0], [31.9, 124.0], [32.0, 124.0], [32.1, 124.0], [32.2, 124.0], [32.3, 124.0], [32.4, 124.0], [32.5, 124.0], [32.6, 125.0], [32.7, 125.0], [32.8, 125.0], [32.9, 125.0], [33.0, 125.0], [33.1, 125.0], [33.2, 125.0], [33.3, 125.0], [33.4, 125.0], [33.5, 125.0], [33.6, 125.0], [33.7, 125.0], [33.8, 125.0], [33.9, 125.0], [34.0, 125.0], [34.1, 125.0], [34.2, 125.0], [34.3, 125.0], [34.4, 125.0], [34.5, 125.0], [34.6, 125.0], [34.7, 125.0], [34.8, 125.0], [34.9, 125.0], [35.0, 125.0], [35.1, 125.0], [35.2, 125.0], [35.3, 125.0], [35.4, 125.0], [35.5, 125.0], [35.6, 125.0], [35.7, 125.0], [35.8, 125.0], [35.9, 125.0], [36.0, 125.0], [36.1, 125.0], [36.2, 125.0], [36.3, 125.0], [36.4, 125.0], [36.5, 125.0], [36.6, 125.0], [36.7, 125.0], [36.8, 125.0], [36.9, 125.0], [37.0, 125.0], [37.1, 125.0], [37.2, 125.0], [37.3, 125.0], [37.4, 125.0], [37.5, 125.0], [37.6, 125.0], [37.7, 125.0], [37.8, 125.0], [37.9, 125.0], [38.0, 125.0], [38.1, 125.0], [38.2, 125.0], [38.3, 125.0], [38.4, 125.0], [38.5, 125.0], [38.6, 125.0], [38.7, 125.0], [38.8, 125.0], [38.9, 125.0], [39.0, 125.0], [39.1, 125.0], [39.2, 125.0], [39.3, 125.0], [39.4, 125.0], [39.5, 125.0], [39.6, 125.0], [39.7, 125.0], [39.8, 125.0], [39.9, 126.0], [40.0, 126.0], [40.1, 126.0], [40.2, 126.0], [40.3, 126.0], [40.4, 126.0], [40.5, 126.0], [40.6, 126.0], [40.7, 126.0], [40.8, 126.0], [40.9, 126.0], [41.0, 126.0], [41.1, 126.0], [41.2, 126.0], [41.3, 126.0], [41.4, 126.0], [41.5, 126.0], [41.6, 126.0], [41.7, 126.0], [41.8, 126.0], [41.9, 126.0], [42.0, 126.0], [42.1, 126.0], [42.2, 126.0], [42.3, 126.0], [42.4, 126.0], [42.5, 126.0], [42.6, 126.0], [42.7, 126.0], [42.8, 126.0], [42.9, 126.0], [43.0, 126.0], [43.1, 126.0], [43.2, 126.0], [43.3, 126.0], [43.4, 126.0], [43.5, 126.0], [43.6, 126.0], [43.7, 126.0], [43.8, 126.0], [43.9, 126.0], [44.0, 126.0], [44.1, 126.0], [44.2, 126.0], [44.3, 126.0], [44.4, 126.0], [44.5, 126.0], [44.6, 126.0], [44.7, 126.0], [44.8, 126.0], [44.9, 126.0], [45.0, 126.0], [45.1, 126.0], [45.2, 126.0], [45.3, 126.0], [45.4, 126.0], [45.5, 126.0], [45.6, 126.0], [45.7, 126.0], [45.8, 126.0], [45.9, 126.0], [46.0, 126.0], [46.1, 126.0], [46.2, 126.0], [46.3, 126.0], [46.4, 126.0], [46.5, 126.0], [46.6, 126.0], [46.7, 126.0], [46.8, 126.0], [46.9, 126.0], [47.0, 126.0], [47.1, 127.0], [47.2, 127.0], [47.3, 127.0], [47.4, 127.0], [47.5, 127.0], [47.6, 127.0], [47.7, 127.0], [47.8, 127.0], [47.9, 127.0], [48.0, 127.0], [48.1, 127.0], [48.2, 127.0], [48.3, 127.0], [48.4, 127.0], [48.5, 127.0], [48.6, 127.0], [48.7, 127.0], [48.8, 127.0], [48.9, 127.0], [49.0, 127.0], [49.1, 127.0], [49.2, 127.0], [49.3, 127.0], [49.4, 127.0], [49.5, 127.0], [49.6, 127.0], [49.7, 127.0], [49.8, 127.0], [49.9, 127.0], [50.0, 127.0], [50.1, 127.0], [50.2, 127.0], [50.3, 127.0], [50.4, 127.0], [50.5, 127.0], [50.6, 127.0], [50.7, 127.0], [50.8, 127.0], [50.9, 127.0], [51.0, 127.0], [51.1, 127.0], [51.2, 127.0], [51.3, 127.0], [51.4, 127.0], [51.5, 127.0], [51.6, 127.0], [51.7, 127.0], [51.8, 127.0], [51.9, 127.0], [52.0, 127.0], [52.1, 127.0], [52.2, 127.0], [52.3, 127.0], [52.4, 127.0], [52.5, 127.0], [52.6, 127.0], [52.7, 127.0], [52.8, 127.0], [52.9, 127.0], [53.0, 127.0], [53.1, 127.0], [53.2, 127.0], [53.3, 127.0], [53.4, 127.0], [53.5, 128.0], [53.6, 128.0], [53.7, 128.0], [53.8, 128.0], [53.9, 128.0], [54.0, 128.0], [54.1, 128.0], [54.2, 128.0], [54.3, 128.0], [54.4, 128.0], [54.5, 128.0], [54.6, 128.0], [54.7, 128.0], [54.8, 128.0], [54.9, 128.0], [55.0, 128.0], [55.1, 128.0], [55.2, 128.0], [55.3, 128.0], [55.4, 128.0], [55.5, 128.0], [55.6, 128.0], [55.7, 128.0], [55.8, 128.0], [55.9, 128.0], [56.0, 128.0], [56.1, 128.0], [56.2, 128.0], [56.3, 128.0], [56.4, 128.0], [56.5, 128.0], [56.6, 128.0], [56.7, 128.0], [56.8, 128.0], [56.9, 128.0], [57.0, 128.0], [57.1, 128.0], [57.2, 128.0], [57.3, 128.0], [57.4, 128.0], [57.5, 128.0], [57.6, 128.0], [57.7, 128.0], [57.8, 128.0], [57.9, 128.0], [58.0, 128.0], [58.1, 129.0], [58.2, 129.0], [58.3, 129.0], [58.4, 129.0], [58.5, 129.0], [58.6, 129.0], [58.7, 129.0], [58.8, 129.0], [58.9, 129.0], [59.0, 129.0], [59.1, 129.0], [59.2, 129.0], [59.3, 129.0], [59.4, 129.0], [59.5, 129.0], [59.6, 129.0], [59.7, 129.0], [59.8, 129.0], [59.9, 129.0], [60.0, 129.0], [60.1, 129.0], [60.2, 129.0], [60.3, 129.0], [60.4, 129.0], [60.5, 129.0], [60.6, 129.0], [60.7, 129.0], [60.8, 129.0], [60.9, 129.0], [61.0, 129.0], [61.1, 129.0], [61.2, 129.0], [61.3, 129.0], [61.4, 129.0], [61.5, 129.0], [61.6, 129.0], [61.7, 129.0], [61.8, 129.0], [61.9, 129.0], [62.0, 129.0], [62.1, 129.0], [62.2, 129.0], [62.3, 129.0], [62.4, 129.0], [62.5, 129.0], [62.6, 129.0], [62.7, 129.0], [62.8, 129.0], [62.9, 130.0], [63.0, 130.0], [63.1, 130.0], [63.2, 130.0], [63.3, 130.0], [63.4, 130.0], [63.5, 130.0], [63.6, 130.0], [63.7, 130.0], [63.8, 130.0], [63.9, 130.0], [64.0, 130.0], [64.1, 130.0], [64.2, 130.0], [64.3, 130.0], [64.4, 130.0], [64.5, 130.0], [64.6, 130.0], [64.7, 130.0], [64.8, 130.0], [64.9, 130.0], [65.0, 130.0], [65.1, 130.0], [65.2, 130.0], [65.3, 130.0], [65.4, 130.0], [65.5, 130.0], [65.6, 130.0], [65.7, 130.0], [65.8, 130.0], [65.9, 130.0], [66.0, 130.0], [66.1, 130.0], [66.2, 130.0], [66.3, 130.0], [66.4, 130.0], [66.5, 130.0], [66.6, 130.0], [66.7, 130.0], [66.8, 130.0], [66.9, 130.0], [67.0, 131.0], [67.1, 131.0], [67.2, 131.0], [67.3, 131.0], [67.4, 131.0], [67.5, 131.0], [67.6, 131.0], [67.7, 131.0], [67.8, 131.0], [67.9, 131.0], [68.0, 131.0], [68.1, 131.0], [68.2, 131.0], [68.3, 131.0], [68.4, 131.0], [68.5, 131.0], [68.6, 131.0], [68.7, 131.0], [68.8, 131.0], [68.9, 131.0], [69.0, 131.0], [69.1, 131.0], [69.2, 131.0], [69.3, 131.0], [69.4, 131.0], [69.5, 131.0], [69.6, 131.0], [69.7, 131.0], [69.8, 131.0], [69.9, 131.0], [70.0, 131.0], [70.1, 131.0], [70.2, 131.0], [70.3, 131.0], [70.4, 132.0], [70.5, 132.0], [70.6, 132.0], [70.7, 132.0], [70.8, 132.0], [70.9, 132.0], [71.0, 132.0], [71.1, 132.0], [71.2, 132.0], [71.3, 132.0], [71.4, 132.0], [71.5, 132.0], [71.6, 132.0], [71.7, 132.0], [71.8, 132.0], [71.9, 132.0], [72.0, 132.0], [72.1, 132.0], [72.2, 132.0], [72.3, 132.0], [72.4, 132.0], [72.5, 132.0], [72.6, 132.0], [72.7, 132.0], [72.8, 132.0], [72.9, 132.0], [73.0, 132.0], [73.1, 132.0], [73.2, 132.0], [73.3, 132.0], [73.4, 132.0], [73.5, 132.0], [73.6, 132.0], [73.7, 133.0], [73.8, 133.0], [73.9, 133.0], [74.0, 133.0], [74.1, 133.0], [74.2, 133.0], [74.3, 133.0], [74.4, 133.0], [74.5, 133.0], [74.6, 133.0], [74.7, 133.0], [74.8, 133.0], [74.9, 133.0], [75.0, 133.0], [75.1, 133.0], [75.2, 133.0], [75.3, 133.0], [75.4, 133.0], [75.5, 133.0], [75.6, 133.0], [75.7, 133.0], [75.8, 133.0], [75.9, 133.0], [76.0, 133.0], [76.1, 134.0], [76.2, 134.0], [76.3, 134.0], [76.4, 134.0], [76.5, 134.0], [76.6, 134.0], [76.7, 134.0], [76.8, 134.0], [76.9, 134.0], [77.0, 134.0], [77.1, 134.0], [77.2, 134.0], [77.3, 134.0], [77.4, 134.0], [77.5, 134.0], [77.6, 134.0], [77.7, 134.0], [77.8, 134.0], [77.9, 134.0], [78.0, 134.0], [78.1, 134.0], [78.2, 134.0], [78.3, 134.0], [78.4, 134.0], [78.5, 134.0], [78.6, 135.0], [78.7, 135.0], [78.8, 135.0], [78.9, 135.0], [79.0, 135.0], [79.1, 135.0], [79.2, 135.0], [79.3, 135.0], [79.4, 135.0], [79.5, 135.0], [79.6, 135.0], [79.7, 135.0], [79.8, 135.0], [79.9, 135.0], [80.0, 135.0], [80.1, 135.0], [80.2, 135.0], [80.3, 135.0], [80.4, 135.0], [80.5, 135.0], [80.6, 135.0], [80.7, 135.0], [80.8, 136.0], [80.9, 136.0], [81.0, 136.0], [81.1, 136.0], [81.2, 136.0], [81.3, 136.0], [81.4, 136.0], [81.5, 136.0], [81.6, 136.0], [81.7, 136.0], [81.8, 136.0], [81.9, 136.0], [82.0, 136.0], [82.1, 136.0], [82.2, 136.0], [82.3, 136.0], [82.4, 136.0], [82.5, 136.0], [82.6, 136.0], [82.7, 136.0], [82.8, 136.0], [82.9, 136.0], [83.0, 136.0], [83.1, 136.0], [83.2, 137.0], [83.3, 137.0], [83.4, 137.0], [83.5, 137.0], [83.6, 137.0], [83.7, 137.0], [83.8, 137.0], [83.9, 137.0], [84.0, 137.0], [84.1, 137.0], [84.2, 137.0], [84.3, 137.0], [84.4, 137.0], [84.5, 137.0], [84.6, 137.0], [84.7, 137.0], [84.8, 137.0], [84.9, 137.0], [85.0, 137.0], [85.1, 137.0], [85.2, 137.0], [85.3, 137.0], [85.4, 137.0], [85.5, 137.0], [85.6, 138.0], [85.7, 138.0], [85.8, 138.0], [85.9, 138.0], [86.0, 138.0], [86.1, 138.0], [86.2, 138.0], [86.3, 138.0], [86.4, 138.0], [86.5, 138.0], [86.6, 138.0], [86.7, 138.0], [86.8, 138.0], [86.9, 138.0], [87.0, 138.0], [87.1, 138.0], [87.2, 138.0], [87.3, 139.0], [87.4, 139.0], [87.5, 139.0], [87.6, 139.0], [87.7, 139.0], [87.8, 139.0], [87.9, 139.0], [88.0, 139.0], [88.1, 139.0], [88.2, 139.0], [88.3, 139.0], [88.4, 139.0], [88.5, 139.0], [88.6, 139.0], [88.7, 139.0], [88.8, 139.0], [88.9, 139.0], [89.0, 139.0], [89.1, 139.0], [89.2, 139.0], [89.3, 140.0], [89.4, 140.0], [89.5, 140.0], [89.6, 140.0], [89.7, 140.0], [89.8, 140.0], [89.9, 140.0], [90.0, 140.0], [90.1, 140.0], [90.2, 140.0], [90.3, 140.0], [90.4, 140.0], [90.5, 141.0], [90.6, 141.0], [90.7, 141.0], [90.8, 141.0], [90.9, 141.0], [91.0, 141.0], [91.1, 141.0], [91.2, 141.0], [91.3, 141.0], [91.4, 141.0], [91.5, 141.0], [91.6, 142.0], [91.7, 142.0], [91.8, 142.0], [91.9, 142.0], [92.0, 142.0], [92.1, 142.0], [92.2, 142.0], [92.3, 142.0], [92.4, 142.0], [92.5, 142.0], [92.6, 142.0], [92.7, 143.0], [92.8, 143.0], [92.9, 143.0], [93.0, 143.0], [93.1, 143.0], [93.2, 144.0], [93.3, 144.0], [93.4, 144.0], [93.5, 144.0], [93.6, 144.0], [93.7, 145.0], [93.8, 145.0], [93.9, 145.0], [94.0, 145.0], [94.1, 145.0], [94.2, 145.0], [94.3, 145.0], [94.4, 146.0], [94.5, 146.0], [94.6, 146.0], [94.7, 147.0], [94.8, 147.0], [94.9, 148.0], [95.0, 148.0], [95.1, 148.0], [95.2, 149.0], [95.3, 149.0], [95.4, 150.0], [95.5, 150.0], [95.6, 150.0], [95.7, 151.0], [95.8, 151.0], [95.9, 153.0], [96.0, 154.0], [96.1, 155.0], [96.2, 156.0], [96.3, 157.0], [96.4, 158.0], [96.5, 160.0], [96.6, 160.0], [96.7, 162.0], [96.8, 165.0], [96.9, 167.0], [97.0, 168.0], [97.1, 170.0], [97.2, 172.0], [97.3, 174.0], [97.4, 177.0], [97.5, 180.0], [97.6, 183.0], [97.7, 190.0], [97.8, 198.0], [97.9, 224.0], [98.0, 248.0], [98.1, 306.0], [98.2, 312.0], [98.3, 320.0], [98.4, 325.0], [98.5, 327.0], [98.6, 336.0], [98.7, 382.0], [98.8, 386.0], [98.9, 394.0], [99.0, 402.0], [99.1, 421.0], [99.2, 431.0], [99.3, 448.0], [99.4, 551.0], [99.5, 907.0], [99.6, 1134.0], [99.7, 1141.0], [99.8, 1564.0], [99.9, 2140.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 4891.0, "series": [{"data": [[2100.0, 7.0], [600.0, 1.0], [800.0, 2.0], [200.0, 13.0], [900.0, 2.0], [1100.0, 10.0], [300.0, 45.0], [1200.0, 1.0], [1300.0, 2.0], [1500.0, 1.0], [100.0, 4891.0], [400.0, 20.0], [1800.0, 1.0], [2000.0, 1.0], [500.0, 3.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 10.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4969.0, "series": [{"data": [[0.0, 4969.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 21.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 10.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0133333333333339, "minX": 1.7243319E12, "maxY": 3.5490196078431393, "series": [{"data": [[1.72433274E12, 1.099667774086378], [1.72433208E12, 1.0602006688963208], [1.72433214E12, 1.0298013245033102], [1.72433244E12, 1.0166666666666664], [1.72433202E12, 1.0766666666666662], [1.72433232E12, 1.0233333333333319], [1.72433238E12, 1.0635451505016726], [1.72433268E12, 1.056666666666667], [1.72433226E12, 1.0496688741721851], [1.72433292E12, 1.0540540540540546], [1.72433256E12, 1.0500000000000003], [1.72433262E12, 1.029999999999999], [1.72433196E12, 1.0635451505016718], [1.7243325E12, 1.0535117056856187], [1.7243328E12, 1.0366666666666662], [1.7243319E12, 3.5490196078431393], [1.72433286E12, 1.0233333333333319], [1.7243322E12, 1.0133333333333339]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72433292E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 131.66890052356013, "minX": 1.0, "maxY": 2152.0, "series": [{"data": [[8.0, 2151.0], [2.0, 200.36956521739123], [9.0, 2146.0], [10.0, 2141.0], [11.0, 2140.0], [12.0, 2130.0], [3.0, 392.25925925925924], [13.0, 2129.0], [16.0, 1345.0], [1.0, 131.66890052356013], [4.0, 1321.0], [5.0, 1290.5], [6.0, 641.0], [7.0, 2152.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.0724000000000007, 139.94900000000044]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 16.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 121.55, "minX": 1.7243319E12, "maxY": 41789.6, "series": [{"data": [[1.72433274E12, 41647.76666666667], [1.72433208E12, 41366.9], [1.72433214E12, 41785.86666666667], [1.72433244E12, 41514.35], [1.72433202E12, 41509.75], [1.72433232E12, 41513.76666666667], [1.72433238E12, 41375.61666666667], [1.72433268E12, 41505.1], [1.72433226E12, 41789.6], [1.72433292E12, 20479.833333333332], [1.72433256E12, 41514.71666666667], [1.72433262E12, 41510.333333333336], [1.72433196E12, 41374.333333333336], [1.7243325E12, 41376.13333333333], [1.7243328E12, 41511.816666666666], [1.7243319E12, 7057.15], [1.72433286E12, 41512.8], [1.7243322E12, 41511.75]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.72433274E12, 717.3833333333333], [1.72433208E12, 712.6166666666667], [1.72433214E12, 719.7666666666667], [1.72433244E12, 715.0], [1.72433202E12, 715.0], [1.72433232E12, 715.0], [1.72433238E12, 712.6166666666667], [1.72433268E12, 715.0], [1.72433226E12, 719.7666666666667], [1.72433292E12, 352.73333333333335], [1.72433256E12, 715.0], [1.72433262E12, 715.0], [1.72433196E12, 712.6166666666667], [1.7243325E12, 712.6166666666667], [1.7243328E12, 715.0], [1.7243319E12, 121.55], [1.72433286E12, 715.0], [1.7243322E12, 715.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72433292E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 127.4133333333333, "minX": 1.7243319E12, "maxY": 602.3921568627452, "series": [{"data": [[1.72433274E12, 143.80398671096358], [1.72433208E12, 141.54849498327752], [1.72433214E12, 130.13576158940407], [1.72433244E12, 131.19999999999987], [1.72433202E12, 147.50333333333322], [1.72433232E12, 128.8766666666667], [1.72433238E12, 138.47491638795978], [1.72433268E12, 136.59666666666675], [1.72433226E12, 127.88410596026489], [1.72433292E12, 138.0270270270271], [1.72433256E12, 134.2600000000001], [1.72433262E12, 131.08], [1.72433196E12, 143.34113712374574], [1.7243325E12, 136.4448160535117], [1.7243328E12, 134.55333333333346], [1.7243319E12, 602.3921568627452], [1.72433286E12, 128.5333333333334], [1.7243322E12, 127.4133333333333]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72433292E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 126.66999999999997, "minX": 1.7243319E12, "maxY": 599.9999999999997, "series": [{"data": [[1.72433274E12, 143.05315614617956], [1.72433208E12, 140.40802675585286], [1.72433214E12, 129.47350993377478], [1.72433244E12, 130.55666666666673], [1.72433202E12, 145.42666666666648], [1.72433232E12, 128.17000000000007], [1.72433238E12, 137.77926421404683], [1.72433268E12, 135.89999999999992], [1.72433226E12, 127.10927152317883], [1.72433292E12, 137.16891891891893], [1.72433256E12, 133.48000000000002], [1.72433262E12, 130.49333333333328], [1.72433196E12, 141.93979933110373], [1.7243325E12, 135.44481605351166], [1.7243328E12, 133.48333333333338], [1.7243319E12, 599.9999999999997], [1.72433286E12, 127.98666666666666], [1.7243322E12, 126.66999999999997]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72433292E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 85.60999999999994, "minX": 1.7243319E12, "maxY": 534.3333333333335, "series": [{"data": [[1.72433274E12, 102.19601328903656], [1.72433208E12, 94.81939799331107], [1.72433214E12, 86.00331125827812], [1.72433244E12, 88.68666666666665], [1.72433202E12, 99.26666666666674], [1.72433232E12, 88.13333333333334], [1.72433238E12, 95.26755852842807], [1.72433268E12, 92.69000000000014], [1.72433226E12, 86.38410596026489], [1.72433292E12, 94.79054054054056], [1.72433256E12, 91.97333333333336], [1.72433262E12, 88.55333333333326], [1.72433196E12, 98.40802675585283], [1.7243325E12, 93.98662207357856], [1.7243328E12, 91.62000000000003], [1.7243319E12, 534.3333333333335], [1.72433286E12, 86.26999999999995], [1.7243322E12, 85.60999999999994]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72433292E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 115.0, "minX": 1.7243319E12, "maxY": 2152.0, "series": [{"data": [[1.72433274E12, 1321.0], [1.72433208E12, 436.0], [1.72433214E12, 514.0], [1.72433244E12, 423.0], [1.72433202E12, 1298.0], [1.72433232E12, 1126.0], [1.72433238E12, 1160.0], [1.72433268E12, 448.0], [1.72433226E12, 551.0], [1.72433292E12, 1122.0], [1.72433256E12, 1131.0], [1.72433262E12, 406.0], [1.72433196E12, 433.0], [1.7243325E12, 1134.0], [1.7243328E12, 1141.0], [1.7243319E12, 2152.0], [1.72433286E12, 485.0], [1.7243322E12, 421.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.72433274E12, 135.0], [1.72433208E12, 151.0], [1.72433214E12, 136.0], [1.72433244E12, 137.0], [1.72433202E12, 145.0], [1.72433232E12, 130.0], [1.72433238E12, 133.0], [1.72433268E12, 137.0], [1.72433226E12, 129.0], [1.72433292E12, 135.1], [1.72433256E12, 135.0], [1.72433262E12, 134.0], [1.72433196E12, 149.0], [1.7243325E12, 135.0], [1.7243328E12, 135.0], [1.7243319E12, 2138.0], [1.72433286E12, 132.0], [1.7243322E12, 131.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.72433274E12, 1136.94], [1.72433208E12, 334.0], [1.72433214E12, 385.0799999999981], [1.72433244E12, 320.84000000000015], [1.72433202E12, 431.7500000000002], [1.72433232E12, 169.8800000000001], [1.72433238E12, 461.0], [1.72433268E12, 394.0], [1.72433226E12, 377.97999999999604], [1.72433292E12, 762.3399999999933], [1.72433256E12, 384.40000000000055], [1.72433262E12, 379.3200000000006], [1.72433196E12, 320.0], [1.7243325E12, 427.0], [1.7243328E12, 325.8600000000001], [1.7243319E12, 2152.0], [1.72433286E12, 159.98000000000002], [1.7243322E12, 305.4300000000014]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.72433274E12, 145.0], [1.72433208E12, 174.0], [1.72433214E12, 147.5499999999999], [1.72433244E12, 142.95], [1.72433202E12, 153.84999999999997], [1.72433232E12, 133.0], [1.72433238E12, 150.0], [1.72433268E12, 158.89999999999998], [1.72433226E12, 132.0], [1.72433292E12, 145.64999999999995], [1.72433256E12, 141.95], [1.72433262E12, 138.95], [1.72433196E12, 154.0], [1.7243325E12, 140.0], [1.7243328E12, 145.79999999999995], [1.7243319E12, 2148.0], [1.72433286E12, 136.0], [1.7243322E12, 134.95]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.72433274E12, 117.0], [1.72433208E12, 119.0], [1.72433214E12, 116.0], [1.72433244E12, 116.0], [1.72433202E12, 121.0], [1.72433232E12, 116.0], [1.72433238E12, 116.0], [1.72433268E12, 118.0], [1.72433226E12, 115.0], [1.72433292E12, 117.0], [1.72433256E12, 116.0], [1.72433262E12, 116.0], [1.72433196E12, 122.0], [1.7243325E12, 117.0], [1.7243328E12, 117.0], [1.7243319E12, 125.0], [1.72433286E12, 117.0], [1.7243322E12, 116.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.72433274E12, 127.0], [1.72433208E12, 136.0], [1.72433214E12, 125.0], [1.72433244E12, 127.0], [1.72433202E12, 137.0], [1.72433232E12, 124.0], [1.72433238E12, 126.0], [1.72433268E12, 127.0], [1.72433226E12, 124.0], [1.72433292E12, 126.0], [1.72433256E12, 126.0], [1.72433262E12, 126.0], [1.72433196E12, 139.0], [1.7243325E12, 127.0], [1.7243328E12, 127.0], [1.7243319E12, 153.0], [1.72433286E12, 125.0], [1.7243322E12, 124.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72433292E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 123.5, "minX": 2.0, "maxY": 1940.5, "series": [{"data": [[16.0, 1940.5], [4.0, 127.0], [2.0, 123.5], [5.0, 127.0], [6.0, 129.0], [3.0, 133.0], [7.0, 136.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 123.5, "minX": 2.0, "maxY": 1932.5, "series": [{"data": [[16.0, 1932.5], [4.0, 127.0], [2.0, 123.5], [5.0, 126.0], [6.0, 128.0], [3.0, 132.0], [7.0, 136.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.8833333333333333, "minX": 1.7243319E12, "maxY": 5.033333333333333, "series": [{"data": [[1.72433274E12, 5.0], [1.72433208E12, 5.0], [1.72433214E12, 5.0], [1.72433244E12, 5.016666666666667], [1.72433202E12, 5.016666666666667], [1.72433232E12, 5.0], [1.72433238E12, 4.983333333333333], [1.72433268E12, 5.0], [1.72433226E12, 5.033333333333333], [1.72433292E12, 2.466666666666667], [1.72433256E12, 5.016666666666667], [1.72433262E12, 5.0], [1.72433196E12, 4.95], [1.7243325E12, 4.966666666666667], [1.7243328E12, 5.0], [1.7243319E12, 0.8833333333333333], [1.72433286E12, 5.0], [1.7243322E12, 5.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72433292E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.85, "minX": 1.7243319E12, "maxY": 5.033333333333333, "series": [{"data": [[1.72433274E12, 5.016666666666667], [1.72433208E12, 4.983333333333333], [1.72433214E12, 5.033333333333333], [1.72433244E12, 5.0], [1.72433202E12, 5.0], [1.72433232E12, 5.0], [1.72433238E12, 4.983333333333333], [1.72433268E12, 5.0], [1.72433226E12, 5.033333333333333], [1.72433292E12, 2.466666666666667], [1.72433256E12, 5.0], [1.72433262E12, 5.0], [1.72433196E12, 4.983333333333333], [1.7243325E12, 4.983333333333333], [1.7243328E12, 5.0], [1.7243319E12, 0.85], [1.72433286E12, 5.0], [1.7243322E12, 5.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72433292E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.85, "minX": 1.7243319E12, "maxY": 5.033333333333333, "series": [{"data": [[1.72433274E12, 5.016666666666667], [1.72433208E12, 4.983333333333333], [1.72433214E12, 5.033333333333333], [1.72433244E12, 5.0], [1.72433202E12, 5.0], [1.72433232E12, 5.0], [1.72433238E12, 4.983333333333333], [1.72433268E12, 5.0], [1.72433226E12, 5.033333333333333], [1.72433292E12, 2.466666666666667], [1.72433256E12, 5.0], [1.72433262E12, 5.0], [1.72433196E12, 4.983333333333333], [1.7243325E12, 4.983333333333333], [1.7243328E12, 5.0], [1.7243319E12, 0.85], [1.72433286E12, 5.0], [1.7243322E12, 5.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72433292E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.85, "minX": 1.7243319E12, "maxY": 5.033333333333333, "series": [{"data": [[1.72433274E12, 5.016666666666667], [1.72433208E12, 4.983333333333333], [1.72433214E12, 5.033333333333333], [1.72433244E12, 5.0], [1.72433202E12, 5.0], [1.72433232E12, 5.0], [1.72433238E12, 4.983333333333333], [1.72433268E12, 5.0], [1.72433226E12, 5.033333333333333], [1.72433292E12, 2.466666666666667], [1.72433256E12, 5.0], [1.72433262E12, 5.0], [1.72433196E12, 4.983333333333333], [1.7243325E12, 4.983333333333333], [1.7243328E12, 5.0], [1.7243319E12, 0.85], [1.72433286E12, 5.0], [1.7243322E12, 5.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72433292E12, "title": "Total Transactions Per Second"}},
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

