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
        data: {"result": {"minY": 112.0, "minX": 0.0, "maxY": 4889.0, "series": [{"data": [[0.0, 112.0], [0.1, 114.0], [0.2, 115.0], [0.3, 115.0], [0.4, 115.0], [0.5, 116.0], [0.6, 116.0], [0.7, 116.0], [0.8, 117.0], [0.9, 117.0], [1.0, 117.0], [1.1, 117.0], [1.2, 118.0], [1.3, 118.0], [1.4, 118.0], [1.5, 118.0], [1.6, 118.0], [1.7, 118.0], [1.8, 118.0], [1.9, 118.0], [2.0, 118.0], [2.1, 118.0], [2.2, 119.0], [2.3, 119.0], [2.4, 119.0], [2.5, 119.0], [2.6, 119.0], [2.7, 119.0], [2.8, 119.0], [2.9, 119.0], [3.0, 119.0], [3.1, 119.0], [3.2, 119.0], [3.3, 119.0], [3.4, 119.0], [3.5, 119.0], [3.6, 119.0], [3.7, 119.0], [3.8, 119.0], [3.9, 119.0], [4.0, 120.0], [4.1, 120.0], [4.2, 120.0], [4.3, 120.0], [4.4, 120.0], [4.5, 120.0], [4.6, 120.0], [4.7, 120.0], [4.8, 120.0], [4.9, 120.0], [5.0, 120.0], [5.1, 120.0], [5.2, 120.0], [5.3, 120.0], [5.4, 120.0], [5.5, 120.0], [5.6, 120.0], [5.7, 120.0], [5.8, 120.0], [5.9, 120.0], [6.0, 120.0], [6.1, 120.0], [6.2, 120.0], [6.3, 120.0], [6.4, 120.0], [6.5, 120.0], [6.6, 120.0], [6.7, 120.0], [6.8, 121.0], [6.9, 121.0], [7.0, 121.0], [7.1, 121.0], [7.2, 121.0], [7.3, 121.0], [7.4, 121.0], [7.5, 121.0], [7.6, 121.0], [7.7, 121.0], [7.8, 121.0], [7.9, 121.0], [8.0, 121.0], [8.1, 121.0], [8.2, 121.0], [8.3, 121.0], [8.4, 121.0], [8.5, 121.0], [8.6, 121.0], [8.7, 121.0], [8.8, 121.0], [8.9, 121.0], [9.0, 121.0], [9.1, 121.0], [9.2, 121.0], [9.3, 121.0], [9.4, 121.0], [9.5, 121.0], [9.6, 121.0], [9.7, 121.0], [9.8, 121.0], [9.9, 121.0], [10.0, 121.0], [10.1, 121.0], [10.2, 122.0], [10.3, 122.0], [10.4, 122.0], [10.5, 122.0], [10.6, 122.0], [10.7, 122.0], [10.8, 122.0], [10.9, 122.0], [11.0, 122.0], [11.1, 122.0], [11.2, 122.0], [11.3, 122.0], [11.4, 122.0], [11.5, 122.0], [11.6, 122.0], [11.7, 122.0], [11.8, 122.0], [11.9, 122.0], [12.0, 122.0], [12.1, 122.0], [12.2, 122.0], [12.3, 122.0], [12.4, 122.0], [12.5, 122.0], [12.6, 122.0], [12.7, 122.0], [12.8, 122.0], [12.9, 122.0], [13.0, 122.0], [13.1, 122.0], [13.2, 122.0], [13.3, 122.0], [13.4, 122.0], [13.5, 122.0], [13.6, 122.0], [13.7, 122.0], [13.8, 122.0], [13.9, 122.0], [14.0, 122.0], [14.1, 122.0], [14.2, 122.0], [14.3, 122.0], [14.4, 122.0], [14.5, 122.0], [14.6, 122.0], [14.7, 122.0], [14.8, 122.0], [14.9, 123.0], [15.0, 123.0], [15.1, 123.0], [15.2, 123.0], [15.3, 123.0], [15.4, 123.0], [15.5, 123.0], [15.6, 123.0], [15.7, 123.0], [15.8, 123.0], [15.9, 123.0], [16.0, 123.0], [16.1, 123.0], [16.2, 123.0], [16.3, 123.0], [16.4, 123.0], [16.5, 123.0], [16.6, 123.0], [16.7, 123.0], [16.8, 123.0], [16.9, 123.0], [17.0, 123.0], [17.1, 123.0], [17.2, 123.0], [17.3, 123.0], [17.4, 123.0], [17.5, 123.0], [17.6, 123.0], [17.7, 123.0], [17.8, 123.0], [17.9, 123.0], [18.0, 123.0], [18.1, 123.0], [18.2, 123.0], [18.3, 123.0], [18.4, 123.0], [18.5, 123.0], [18.6, 123.0], [18.7, 123.0], [18.8, 123.0], [18.9, 123.0], [19.0, 123.0], [19.1, 123.0], [19.2, 123.0], [19.3, 123.0], [19.4, 123.0], [19.5, 123.0], [19.6, 123.0], [19.7, 124.0], [19.8, 124.0], [19.9, 124.0], [20.0, 124.0], [20.1, 124.0], [20.2, 124.0], [20.3, 124.0], [20.4, 124.0], [20.5, 124.0], [20.6, 124.0], [20.7, 124.0], [20.8, 124.0], [20.9, 124.0], [21.0, 124.0], [21.1, 124.0], [21.2, 124.0], [21.3, 124.0], [21.4, 124.0], [21.5, 124.0], [21.6, 124.0], [21.7, 124.0], [21.8, 124.0], [21.9, 124.0], [22.0, 124.0], [22.1, 124.0], [22.2, 124.0], [22.3, 124.0], [22.4, 124.0], [22.5, 124.0], [22.6, 124.0], [22.7, 124.0], [22.8, 124.0], [22.9, 124.0], [23.0, 124.0], [23.1, 124.0], [23.2, 124.0], [23.3, 124.0], [23.4, 124.0], [23.5, 124.0], [23.6, 124.0], [23.7, 124.0], [23.8, 124.0], [23.9, 124.0], [24.0, 124.0], [24.1, 124.0], [24.2, 124.0], [24.3, 124.0], [24.4, 124.0], [24.5, 124.0], [24.6, 124.0], [24.7, 124.0], [24.8, 124.0], [24.9, 124.0], [25.0, 124.0], [25.1, 124.0], [25.2, 124.0], [25.3, 124.0], [25.4, 124.0], [25.5, 124.0], [25.6, 125.0], [25.7, 125.0], [25.8, 125.0], [25.9, 125.0], [26.0, 125.0], [26.1, 125.0], [26.2, 125.0], [26.3, 125.0], [26.4, 125.0], [26.5, 125.0], [26.6, 125.0], [26.7, 125.0], [26.8, 125.0], [26.9, 125.0], [27.0, 125.0], [27.1, 125.0], [27.2, 125.0], [27.3, 125.0], [27.4, 125.0], [27.5, 125.0], [27.6, 125.0], [27.7, 125.0], [27.8, 125.0], [27.9, 125.0], [28.0, 125.0], [28.1, 125.0], [28.2, 125.0], [28.3, 125.0], [28.4, 125.0], [28.5, 125.0], [28.6, 125.0], [28.7, 125.0], [28.8, 125.0], [28.9, 125.0], [29.0, 125.0], [29.1, 125.0], [29.2, 125.0], [29.3, 125.0], [29.4, 125.0], [29.5, 125.0], [29.6, 125.0], [29.7, 125.0], [29.8, 125.0], [29.9, 125.0], [30.0, 125.0], [30.1, 125.0], [30.2, 125.0], [30.3, 125.0], [30.4, 125.0], [30.5, 125.0], [30.6, 125.0], [30.7, 125.0], [30.8, 125.0], [30.9, 125.0], [31.0, 125.0], [31.1, 125.0], [31.2, 125.0], [31.3, 125.0], [31.4, 125.0], [31.5, 125.0], [31.6, 125.0], [31.7, 125.0], [31.8, 125.0], [31.9, 125.0], [32.0, 125.0], [32.1, 126.0], [32.2, 126.0], [32.3, 126.0], [32.4, 126.0], [32.5, 126.0], [32.6, 126.0], [32.7, 126.0], [32.8, 126.0], [32.9, 126.0], [33.0, 126.0], [33.1, 126.0], [33.2, 126.0], [33.3, 126.0], [33.4, 126.0], [33.5, 126.0], [33.6, 126.0], [33.7, 126.0], [33.8, 126.0], [33.9, 126.0], [34.0, 126.0], [34.1, 126.0], [34.2, 126.0], [34.3, 126.0], [34.4, 126.0], [34.5, 126.0], [34.6, 126.0], [34.7, 126.0], [34.8, 126.0], [34.9, 126.0], [35.0, 126.0], [35.1, 126.0], [35.2, 126.0], [35.3, 126.0], [35.4, 126.0], [35.5, 126.0], [35.6, 126.0], [35.7, 126.0], [35.8, 126.0], [35.9, 126.0], [36.0, 126.0], [36.1, 126.0], [36.2, 126.0], [36.3, 126.0], [36.4, 126.0], [36.5, 126.0], [36.6, 126.0], [36.7, 126.0], [36.8, 126.0], [36.9, 126.0], [37.0, 126.0], [37.1, 126.0], [37.2, 126.0], [37.3, 126.0], [37.4, 126.0], [37.5, 126.0], [37.6, 126.0], [37.7, 126.0], [37.8, 126.0], [37.9, 126.0], [38.0, 126.0], [38.1, 126.0], [38.2, 127.0], [38.3, 127.0], [38.4, 127.0], [38.5, 127.0], [38.6, 127.0], [38.7, 127.0], [38.8, 127.0], [38.9, 127.0], [39.0, 127.0], [39.1, 127.0], [39.2, 127.0], [39.3, 127.0], [39.4, 127.0], [39.5, 127.0], [39.6, 127.0], [39.7, 127.0], [39.8, 127.0], [39.9, 127.0], [40.0, 127.0], [40.1, 127.0], [40.2, 127.0], [40.3, 127.0], [40.4, 127.0], [40.5, 127.0], [40.6, 127.0], [40.7, 127.0], [40.8, 127.0], [40.9, 127.0], [41.0, 127.0], [41.1, 127.0], [41.2, 127.0], [41.3, 127.0], [41.4, 127.0], [41.5, 127.0], [41.6, 127.0], [41.7, 127.0], [41.8, 127.0], [41.9, 127.0], [42.0, 127.0], [42.1, 127.0], [42.2, 127.0], [42.3, 127.0], [42.4, 127.0], [42.5, 127.0], [42.6, 127.0], [42.7, 127.0], [42.8, 127.0], [42.9, 127.0], [43.0, 127.0], [43.1, 127.0], [43.2, 127.0], [43.3, 127.0], [43.4, 127.0], [43.5, 127.0], [43.6, 127.0], [43.7, 127.0], [43.8, 127.0], [43.9, 127.0], [44.0, 128.0], [44.1, 128.0], [44.2, 128.0], [44.3, 128.0], [44.4, 128.0], [44.5, 128.0], [44.6, 128.0], [44.7, 128.0], [44.8, 128.0], [44.9, 128.0], [45.0, 128.0], [45.1, 128.0], [45.2, 128.0], [45.3, 128.0], [45.4, 128.0], [45.5, 128.0], [45.6, 128.0], [45.7, 128.0], [45.8, 128.0], [45.9, 128.0], [46.0, 128.0], [46.1, 128.0], [46.2, 128.0], [46.3, 128.0], [46.4, 128.0], [46.5, 128.0], [46.6, 128.0], [46.7, 128.0], [46.8, 128.0], [46.9, 128.0], [47.0, 128.0], [47.1, 128.0], [47.2, 128.0], [47.3, 128.0], [47.4, 128.0], [47.5, 128.0], [47.6, 128.0], [47.7, 128.0], [47.8, 128.0], [47.9, 128.0], [48.0, 128.0], [48.1, 128.0], [48.2, 128.0], [48.3, 128.0], [48.4, 128.0], [48.5, 128.0], [48.6, 128.0], [48.7, 128.0], [48.8, 128.0], [48.9, 128.0], [49.0, 128.0], [49.1, 128.0], [49.2, 128.0], [49.3, 128.0], [49.4, 128.0], [49.5, 128.0], [49.6, 129.0], [49.7, 129.0], [49.8, 129.0], [49.9, 129.0], [50.0, 129.0], [50.1, 129.0], [50.2, 129.0], [50.3, 129.0], [50.4, 129.0], [50.5, 129.0], [50.6, 129.0], [50.7, 129.0], [50.8, 129.0], [50.9, 129.0], [51.0, 129.0], [51.1, 129.0], [51.2, 129.0], [51.3, 129.0], [51.4, 129.0], [51.5, 129.0], [51.6, 129.0], [51.7, 129.0], [51.8, 129.0], [51.9, 129.0], [52.0, 129.0], [52.1, 129.0], [52.2, 129.0], [52.3, 129.0], [52.4, 129.0], [52.5, 129.0], [52.6, 129.0], [52.7, 129.0], [52.8, 129.0], [52.9, 129.0], [53.0, 129.0], [53.1, 129.0], [53.2, 129.0], [53.3, 129.0], [53.4, 129.0], [53.5, 129.0], [53.6, 129.0], [53.7, 129.0], [53.8, 129.0], [53.9, 129.0], [54.0, 129.0], [54.1, 129.0], [54.2, 129.0], [54.3, 129.0], [54.4, 129.0], [54.5, 129.0], [54.6, 129.0], [54.7, 130.0], [54.8, 130.0], [54.9, 130.0], [55.0, 130.0], [55.1, 130.0], [55.2, 130.0], [55.3, 130.0], [55.4, 130.0], [55.5, 130.0], [55.6, 130.0], [55.7, 130.0], [55.8, 130.0], [55.9, 130.0], [56.0, 130.0], [56.1, 130.0], [56.2, 130.0], [56.3, 130.0], [56.4, 130.0], [56.5, 130.0], [56.6, 130.0], [56.7, 130.0], [56.8, 130.0], [56.9, 130.0], [57.0, 130.0], [57.1, 130.0], [57.2, 130.0], [57.3, 130.0], [57.4, 130.0], [57.5, 130.0], [57.6, 130.0], [57.7, 130.0], [57.8, 130.0], [57.9, 130.0], [58.0, 130.0], [58.1, 130.0], [58.2, 130.0], [58.3, 130.0], [58.4, 130.0], [58.5, 130.0], [58.6, 130.0], [58.7, 130.0], [58.8, 130.0], [58.9, 130.0], [59.0, 130.0], [59.1, 130.0], [59.2, 130.0], [59.3, 130.0], [59.4, 131.0], [59.5, 131.0], [59.6, 131.0], [59.7, 131.0], [59.8, 131.0], [59.9, 131.0], [60.0, 131.0], [60.1, 131.0], [60.2, 131.0], [60.3, 131.0], [60.4, 131.0], [60.5, 131.0], [60.6, 131.0], [60.7, 131.0], [60.8, 131.0], [60.9, 131.0], [61.0, 131.0], [61.1, 131.0], [61.2, 131.0], [61.3, 131.0], [61.4, 131.0], [61.5, 131.0], [61.6, 131.0], [61.7, 131.0], [61.8, 131.0], [61.9, 131.0], [62.0, 131.0], [62.1, 131.0], [62.2, 131.0], [62.3, 131.0], [62.4, 131.0], [62.5, 131.0], [62.6, 131.0], [62.7, 131.0], [62.8, 131.0], [62.9, 131.0], [63.0, 131.0], [63.1, 131.0], [63.2, 131.0], [63.3, 131.0], [63.4, 131.0], [63.5, 131.0], [63.6, 131.0], [63.7, 131.0], [63.8, 131.0], [63.9, 131.0], [64.0, 132.0], [64.1, 132.0], [64.2, 132.0], [64.3, 132.0], [64.4, 132.0], [64.5, 132.0], [64.6, 132.0], [64.7, 132.0], [64.8, 132.0], [64.9, 132.0], [65.0, 132.0], [65.1, 132.0], [65.2, 132.0], [65.3, 132.0], [65.4, 132.0], [65.5, 132.0], [65.6, 132.0], [65.7, 132.0], [65.8, 132.0], [65.9, 132.0], [66.0, 132.0], [66.1, 132.0], [66.2, 132.0], [66.3, 132.0], [66.4, 132.0], [66.5, 132.0], [66.6, 132.0], [66.7, 132.0], [66.8, 132.0], [66.9, 132.0], [67.0, 132.0], [67.1, 132.0], [67.2, 132.0], [67.3, 132.0], [67.4, 132.0], [67.5, 132.0], [67.6, 133.0], [67.7, 133.0], [67.8, 133.0], [67.9, 133.0], [68.0, 133.0], [68.1, 133.0], [68.2, 133.0], [68.3, 133.0], [68.4, 133.0], [68.5, 133.0], [68.6, 133.0], [68.7, 133.0], [68.8, 133.0], [68.9, 133.0], [69.0, 133.0], [69.1, 133.0], [69.2, 133.0], [69.3, 133.0], [69.4, 133.0], [69.5, 133.0], [69.6, 133.0], [69.7, 133.0], [69.8, 133.0], [69.9, 133.0], [70.0, 133.0], [70.1, 133.0], [70.2, 133.0], [70.3, 133.0], [70.4, 133.0], [70.5, 133.0], [70.6, 133.0], [70.7, 133.0], [70.8, 134.0], [70.9, 134.0], [71.0, 134.0], [71.1, 134.0], [71.2, 134.0], [71.3, 134.0], [71.4, 134.0], [71.5, 134.0], [71.6, 134.0], [71.7, 134.0], [71.8, 134.0], [71.9, 134.0], [72.0, 134.0], [72.1, 134.0], [72.2, 134.0], [72.3, 134.0], [72.4, 134.0], [72.5, 134.0], [72.6, 134.0], [72.7, 134.0], [72.8, 134.0], [72.9, 134.0], [73.0, 134.0], [73.1, 134.0], [73.2, 134.0], [73.3, 134.0], [73.4, 134.0], [73.5, 134.0], [73.6, 134.0], [73.7, 134.0], [73.8, 135.0], [73.9, 135.0], [74.0, 135.0], [74.1, 135.0], [74.2, 135.0], [74.3, 135.0], [74.4, 135.0], [74.5, 135.0], [74.6, 135.0], [74.7, 135.0], [74.8, 135.0], [74.9, 135.0], [75.0, 135.0], [75.1, 135.0], [75.2, 135.0], [75.3, 135.0], [75.4, 135.0], [75.5, 135.0], [75.6, 135.0], [75.7, 135.0], [75.8, 135.0], [75.9, 135.0], [76.0, 135.0], [76.1, 135.0], [76.2, 135.0], [76.3, 136.0], [76.4, 136.0], [76.5, 136.0], [76.6, 136.0], [76.7, 136.0], [76.8, 136.0], [76.9, 136.0], [77.0, 136.0], [77.1, 136.0], [77.2, 136.0], [77.3, 136.0], [77.4, 136.0], [77.5, 136.0], [77.6, 136.0], [77.7, 136.0], [77.8, 136.0], [77.9, 136.0], [78.0, 136.0], [78.1, 136.0], [78.2, 136.0], [78.3, 136.0], [78.4, 136.0], [78.5, 136.0], [78.6, 137.0], [78.7, 137.0], [78.8, 137.0], [78.9, 137.0], [79.0, 137.0], [79.1, 137.0], [79.2, 137.0], [79.3, 137.0], [79.4, 137.0], [79.5, 137.0], [79.6, 137.0], [79.7, 137.0], [79.8, 137.0], [79.9, 137.0], [80.0, 137.0], [80.1, 137.0], [80.2, 137.0], [80.3, 137.0], [80.4, 138.0], [80.5, 138.0], [80.6, 138.0], [80.7, 138.0], [80.8, 138.0], [80.9, 138.0], [81.0, 138.0], [81.1, 138.0], [81.2, 138.0], [81.3, 138.0], [81.4, 138.0], [81.5, 138.0], [81.6, 138.0], [81.7, 138.0], [81.8, 139.0], [81.9, 139.0], [82.0, 139.0], [82.1, 139.0], [82.2, 139.0], [82.3, 139.0], [82.4, 139.0], [82.5, 139.0], [82.6, 139.0], [82.7, 139.0], [82.8, 139.0], [82.9, 139.0], [83.0, 139.0], [83.1, 139.0], [83.2, 139.0], [83.3, 140.0], [83.4, 140.0], [83.5, 140.0], [83.6, 140.0], [83.7, 140.0], [83.8, 140.0], [83.9, 140.0], [84.0, 140.0], [84.1, 140.0], [84.2, 140.0], [84.3, 140.0], [84.4, 141.0], [84.5, 141.0], [84.6, 141.0], [84.7, 141.0], [84.8, 141.0], [84.9, 141.0], [85.0, 141.0], [85.1, 141.0], [85.2, 141.0], [85.3, 141.0], [85.4, 142.0], [85.5, 142.0], [85.6, 142.0], [85.7, 142.0], [85.8, 142.0], [85.9, 142.0], [86.0, 142.0], [86.1, 142.0], [86.2, 142.0], [86.3, 142.0], [86.4, 143.0], [86.5, 143.0], [86.6, 143.0], [86.7, 143.0], [86.8, 143.0], [86.9, 143.0], [87.0, 143.0], [87.1, 143.0], [87.2, 144.0], [87.3, 144.0], [87.4, 144.0], [87.5, 144.0], [87.6, 144.0], [87.7, 144.0], [87.8, 145.0], [87.9, 145.0], [88.0, 145.0], [88.1, 145.0], [88.2, 145.0], [88.3, 146.0], [88.4, 146.0], [88.5, 146.0], [88.6, 146.0], [88.7, 146.0], [88.8, 147.0], [88.9, 147.0], [89.0, 147.0], [89.1, 147.0], [89.2, 148.0], [89.3, 148.0], [89.4, 148.0], [89.5, 148.0], [89.6, 149.0], [89.7, 149.0], [89.8, 149.0], [89.9, 150.0], [90.0, 150.0], [90.1, 150.0], [90.2, 151.0], [90.3, 151.0], [90.4, 151.0], [90.5, 152.0], [90.6, 152.0], [90.7, 152.0], [90.8, 153.0], [90.9, 154.0], [91.0, 155.0], [91.1, 155.0], [91.2, 156.0], [91.3, 157.0], [91.4, 157.0], [91.5, 158.0], [91.6, 159.0], [91.7, 160.0], [91.8, 160.0], [91.9, 161.0], [92.0, 162.0], [92.1, 163.0], [92.2, 163.0], [92.3, 164.0], [92.4, 165.0], [92.5, 166.0], [92.6, 167.0], [92.7, 167.0], [92.8, 168.0], [92.9, 169.0], [93.0, 170.0], [93.1, 171.0], [93.2, 172.0], [93.3, 174.0], [93.4, 174.0], [93.5, 175.0], [93.6, 176.0], [93.7, 176.0], [93.8, 177.0], [93.9, 178.0], [94.0, 179.0], [94.1, 180.0], [94.2, 180.0], [94.3, 181.0], [94.4, 182.0], [94.5, 184.0], [94.6, 185.0], [94.7, 186.0], [94.8, 188.0], [94.9, 189.0], [95.0, 192.0], [95.1, 193.0], [95.2, 196.0], [95.3, 198.0], [95.4, 201.0], [95.5, 205.0], [95.6, 207.0], [95.7, 211.0], [95.8, 217.0], [95.9, 222.0], [96.0, 227.0], [96.1, 231.0], [96.2, 235.0], [96.3, 240.0], [96.4, 249.0], [96.5, 276.0], [96.6, 302.0], [96.7, 313.0], [96.8, 324.0], [96.9, 327.0], [97.0, 332.0], [97.1, 337.0], [97.2, 380.0], [97.3, 383.0], [97.4, 387.0], [97.5, 389.0], [97.6, 391.0], [97.7, 394.0], [97.8, 397.0], [97.9, 401.0], [98.0, 406.0], [98.1, 415.0], [98.2, 422.0], [98.3, 427.0], [98.4, 432.0], [98.5, 438.0], [98.6, 445.0], [98.7, 455.0], [98.8, 496.0], [98.9, 531.0], [99.0, 725.0], [99.1, 1127.0], [99.2, 1133.0], [99.3, 1135.0], [99.4, 1137.0], [99.5, 1142.0], [99.6, 1148.0], [99.7, 1194.0], [99.8, 1334.0], [99.9, 3149.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 14301.0, "series": [{"data": [[600.0, 5.0], [700.0, 2.0], [800.0, 4.0], [1000.0, 3.0], [1100.0, 100.0], [1200.0, 11.0], [1300.0, 3.0], [1400.0, 4.0], [1500.0, 2.0], [100.0, 14301.0], [1800.0, 1.0], [2000.0, 1.0], [2200.0, 2.0], [2600.0, 1.0], [2700.0, 1.0], [2800.0, 1.0], [3100.0, 1.0], [3200.0, 3.0], [200.0, 185.0], [3400.0, 1.0], [3500.0, 1.0], [3800.0, 1.0], [4000.0, 1.0], [4200.0, 1.0], [4100.0, 1.0], [4500.0, 1.0], [4800.0, 4.0], [300.0, 193.0], [400.0, 144.0], [500.0, 21.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 24.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 14823.0, "series": [{"data": [[0.0, 14823.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 153.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 24.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.724355E12, "maxY": 2.4671280276816603, "series": [{"data": [[1.72435554E12, 1.1400000000000008], [1.72435776E12, 1.1166666666666676], [1.72435716E12, 1.079734219269104], [1.72435656E12, 1.0761589403973526], [1.72435596E12, 1.1705685618729096], [1.72435758E12, 1.1233333333333337], [1.72435536E12, 1.0730897009966769], [1.72435698E12, 1.1315789473684212], [1.72435638E12, 1.0637583892617444], [1.72435578E12, 1.0697674418604646], [1.724358E12, 1.0], [1.72435518E12, 1.0802675585284274], [1.7243574E12, 1.0366666666666655], [1.7243568E12, 1.1438127090301], [1.72435782E12, 1.0431893687707638], [1.7243562E12, 1.0802675585284276], [1.7243556E12, 1.5499999999999998], [1.72435722E12, 1.060200668896321], [1.724355E12, 2.4671280276816603], [1.72435662E12, 1.123333333333334], [1.72435602E12, 1.0266666666666657], [1.72435542E12, 1.0568561872909694], [1.72435764E12, 1.110367892976589], [1.72435704E12, 1.0799999999999992], [1.72435644E12, 1.0635451505016713], [1.72435584E12, 1.0635451505016724], [1.72435746E12, 1.0666666666666664], [1.72435524E12, 1.163879598662208], [1.72435686E12, 1.106666666666667], [1.72435626E12, 1.0730897009966782], [1.72435566E12, 1.1833333333333338], [1.72435788E12, 1.1499999999999997], [1.72435506E12, 1.0535117056856187], [1.72435728E12, 1.0999999999999999], [1.72435668E12, 1.1225165562913904], [1.7243577E12, 1.023333333333333], [1.72435608E12, 1.2433333333333336], [1.72435548E12, 1.3633333333333346], [1.7243571E12, 1.1099999999999992], [1.7243565E12, 1.0833333333333346], [1.7243559E12, 1.1700000000000002], [1.7243553E12, 1.0498338870431883], [1.72435752E12, 1.0299999999999994], [1.72435692E12, 1.0608108108108103], [1.72435794E12, 1.063333333333333], [1.72435632E12, 1.10299003322259], [1.72435572E12, 1.1200000000000012], [1.72435734E12, 1.0531561461794008], [1.72435512E12, 1.0664451827242531], [1.72435674E12, 1.0366666666666664], [1.72435614E12, 1.102990033222591]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.724358E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 137.7673973811975, "minX": 1.0, "maxY": 4833.0, "series": [{"data": [[8.0, 2547.5], [2.0, 227.3353090601187], [10.0, 3077.5], [11.0, 2612.0], [3.0, 351.66857142857145], [13.0, 2945.5], [4.0, 404.5833333333333], [1.0, 137.7673973811975], [17.0, 1244.0], [18.0, 3163.0], [19.0, 1059.0], [20.0, 3426.0], [5.0, 1619.5], [22.0, 4833.0], [24.0, 2847.0], [26.0, 2218.0], [27.0, 4024.0], [7.0, 1455.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.133533333333338, 152.42186666666615]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 27.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 24.166666666666668, "minX": 1.724355E12, "maxY": 42066.23333333333, "series": [{"data": [[1.72435554E12, 41514.8], [1.72435776E12, 41514.03333333333], [1.72435716E12, 41652.63333333333], [1.72435656E12, 41790.86666666667], [1.72435596E12, 41375.63333333333], [1.72435758E12, 41513.1], [1.72435536E12, 41652.88333333333], [1.72435698E12, 42066.23333333333], [1.72435638E12, 41235.78333333333], [1.72435578E12, 41651.333333333336], [1.724358E12, 1383.8166666666666], [1.72435518E12, 41374.083333333336], [1.7243574E12, 41505.53333333333], [1.7243568E12, 41367.13333333333], [1.72435782E12, 41652.833333333336], [1.7243562E12, 41367.15], [1.7243556E12, 41505.5], [1.72435722E12, 41376.083333333336], [1.724355E12, 39982.23333333333], [1.72435662E12, 41514.71666666667], [1.72435602E12, 41514.53333333333], [1.72435542E12, 41376.21666666667], [1.72435764E12, 41374.71666666667], [1.72435704E12, 41513.55], [1.72435644E12, 41375.03333333333], [1.72435584E12, 41374.76666666667], [1.72435746E12, 41506.48333333333], [1.72435524E12, 41374.933333333334], [1.72435686E12, 41506.25], [1.72435626E12, 41644.8], [1.72435566E12, 41506.78333333333], [1.72435788E12, 41514.61666666667], [1.72435506E12, 41368.166666666664], [1.72435728E12, 41514.6], [1.72435668E12, 41791.23333333333], [1.7243577E12, 41513.46666666667], [1.72435608E12, 41514.55], [1.72435548E12, 41514.666666666664], [1.7243571E12, 41513.73333333333], [1.7243565E12, 41513.833333333336], [1.7243559E12, 41513.73333333333], [1.7243553E12, 41652.45], [1.72435752E12, 41511.61666666667], [1.72435692E12, 40958.1], [1.72435794E12, 41514.73333333333], [1.72435632E12, 41649.9], [1.72435572E12, 41511.88333333333], [1.72435734E12, 41653.183333333334], [1.72435512E12, 41649.46666666667], [1.72435674E12, 41514.583333333336], [1.72435614E12, 41652.75]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.72435554E12, 725.0], [1.72435776E12, 725.0], [1.72435716E12, 727.4166666666666], [1.72435656E12, 729.8333333333334], [1.72435596E12, 722.5833333333334], [1.72435758E12, 725.0], [1.72435536E12, 727.4166666666666], [1.72435698E12, 734.6666666666666], [1.72435638E12, 720.1666666666666], [1.72435578E12, 727.4166666666666], [1.724358E12, 24.166666666666668], [1.72435518E12, 722.5833333333334], [1.7243574E12, 725.0], [1.7243568E12, 722.5833333333334], [1.72435782E12, 727.4166666666666], [1.7243562E12, 722.5833333333334], [1.7243556E12, 725.0], [1.72435722E12, 722.5833333333334], [1.724355E12, 698.4166666666666], [1.72435662E12, 725.0], [1.72435602E12, 725.0], [1.72435542E12, 722.5833333333334], [1.72435764E12, 722.5833333333334], [1.72435704E12, 725.0], [1.72435644E12, 722.5833333333334], [1.72435584E12, 722.5833333333334], [1.72435746E12, 725.0], [1.72435524E12, 722.5833333333334], [1.72435686E12, 725.0], [1.72435626E12, 727.4166666666666], [1.72435566E12, 725.0], [1.72435788E12, 725.0], [1.72435506E12, 722.5833333333334], [1.72435728E12, 725.0], [1.72435668E12, 729.8333333333334], [1.7243577E12, 725.0], [1.72435608E12, 725.0], [1.72435548E12, 725.0], [1.7243571E12, 725.0], [1.7243565E12, 725.0], [1.7243559E12, 725.0], [1.7243553E12, 727.4166666666666], [1.72435752E12, 725.0], [1.72435692E12, 715.3333333333334], [1.72435794E12, 725.0], [1.72435632E12, 727.4166666666666], [1.72435572E12, 725.0], [1.72435734E12, 727.4166666666666], [1.72435512E12, 727.4166666666666], [1.72435674E12, 725.0], [1.72435614E12, 727.4166666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.724358E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 125.7, "minX": 1.724355E12, "maxY": 389.41868512110733, "series": [{"data": [[1.72435554E12, 141.94000000000014], [1.72435776E12, 147.76333333333335], [1.72435716E12, 142.74418604651154], [1.72435656E12, 141.658940397351], [1.72435596E12, 165.92642140468237], [1.72435758E12, 150.2133333333335], [1.72435536E12, 144.35880398671094], [1.72435698E12, 148.1513157894736], [1.72435638E12, 144.21140939597316], [1.72435578E12, 141.36212624584718], [1.724358E12, 125.7], [1.72435518E12, 143.36120401337794], [1.7243574E12, 134.60000000000002], [1.7243568E12, 156.0735785953178], [1.72435782E12, 137.345514950166], [1.7243562E12, 147.97658862876256], [1.7243556E12, 204.1066666666667], [1.72435722E12, 139.78595317725762], [1.724355E12, 389.41868512110733], [1.72435662E12, 152.43333333333328], [1.72435602E12, 133.16666666666666], [1.72435542E12, 143.21404682274246], [1.72435764E12, 148.2140468227425], [1.72435704E12, 140.15000000000003], [1.72435644E12, 140.8127090301004], [1.72435584E12, 141.85284280936455], [1.72435746E12, 140.51666666666674], [1.72435524E12, 155.39130434782615], [1.72435686E12, 145.84999999999985], [1.72435626E12, 145.27906976744183], [1.72435566E12, 153.72666666666657], [1.72435788E12, 154.48000000000002], [1.72435506E12, 141.56856187290964], [1.72435728E12, 145.1266666666666], [1.72435668E12, 150.66887417218535], [1.7243577E12, 132.02666666666656], [1.72435608E12, 177.93666666666667], [1.72435548E12, 183.6433333333335], [1.7243571E12, 148.81], [1.7243565E12, 142.37333333333342], [1.7243559E12, 163.74000000000007], [1.7243553E12, 139.75747508305653], [1.72435752E12, 135.2766666666667], [1.72435692E12, 139.92567567567568], [1.72435794E12, 140.0599999999999], [1.72435632E12, 151.85049833887035], [1.72435572E12, 154.8233333333333], [1.72435734E12, 137.9900332225914], [1.72435512E12, 144.66445182724254], [1.72435674E12, 135.19000000000008], [1.72435614E12, 149.1993355481727]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.724358E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 125.3, "minX": 1.724355E12, "maxY": 371.7024221453287, "series": [{"data": [[1.72435554E12, 141.2800000000001], [1.72435776E12, 147.05333333333326], [1.72435716E12, 141.74750830564787], [1.72435656E12, 140.0827814569538], [1.72435596E12, 165.12374581939795], [1.72435758E12, 149.11000000000007], [1.72435536E12, 143.43189368770769], [1.72435698E12, 147.59539473684214], [1.72435638E12, 143.2013422818792], [1.72435578E12, 140.59800664451828], [1.724358E12, 125.3], [1.72435518E12, 141.66889632107032], [1.7243574E12, 132.93666666666664], [1.7243568E12, 154.1270903010034], [1.72435782E12, 136.33554817275743], [1.7243562E12, 147.13377926421398], [1.7243556E12, 203.22], [1.72435722E12, 138.41471571906348], [1.724355E12, 371.7024221453287], [1.72435662E12, 151.63000000000002], [1.72435602E12, 132.38666666666683], [1.72435542E12, 142.36120401337772], [1.72435764E12, 146.33779264214036], [1.72435704E12, 139.47333333333336], [1.72435644E12, 139.7993311036788], [1.72435584E12, 140.57525083612052], [1.72435746E12, 139.35333333333344], [1.72435524E12, 154.42809364548495], [1.72435686E12, 145.22666666666663], [1.72435626E12, 144.2857142857141], [1.72435566E12, 152.91666666666666], [1.72435788E12, 153.8966666666667], [1.72435506E12, 140.89966555183946], [1.72435728E12, 144.60666666666683], [1.72435668E12, 149.8145695364239], [1.7243577E12, 131.2133333333334], [1.72435608E12, 176.90333333333317], [1.72435548E12, 182.6700000000001], [1.7243571E12, 147.87999999999997], [1.7243565E12, 140.99000000000004], [1.7243559E12, 162.99333333333342], [1.7243553E12, 138.51495016611295], [1.72435752E12, 134.21000000000004], [1.72435692E12, 139.2939189189188], [1.72435794E12, 137.9933333333333], [1.72435632E12, 149.2890365448505], [1.72435572E12, 153.22333333333333], [1.72435734E12, 136.87375415282395], [1.72435512E12, 143.99335548172746], [1.72435674E12, 134.6099999999999], [1.72435614E12, 148.41196013289039]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.724358E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 84.9, "minX": 1.724355E12, "maxY": 292.6089965397925, "series": [{"data": [[1.72435554E12, 96.61333333333333], [1.72435776E12, 103.30999999999996], [1.72435716E12, 100.5083056478405], [1.72435656E12, 95.05298013245037], [1.72435596E12, 115.95652173913041], [1.72435758E12, 101.28000000000003], [1.72435536E12, 98.72425249169434], [1.72435698E12, 102.3980263157895], [1.72435638E12, 96.92281879194633], [1.72435578E12, 95.41528239202651], [1.724358E12, 84.9], [1.72435518E12, 95.27759197324417], [1.7243574E12, 89.94000000000011], [1.7243568E12, 108.16387959866219], [1.72435782E12, 93.34219269102984], [1.7243562E12, 97.03010033444816], [1.7243556E12, 140.3533333333333], [1.72435722E12, 97.47826086956526], [1.724355E12, 292.6089965397925], [1.72435662E12, 105.11666666666669], [1.72435602E12, 88.44333333333333], [1.72435542E12, 97.67558528428093], [1.72435764E12, 101.81605351170563], [1.72435704E12, 97.55333333333337], [1.72435644E12, 96.15719063545146], [1.72435584E12, 96.69565217391309], [1.72435746E12, 95.18999999999996], [1.72435524E12, 106.8494983277592], [1.72435686E12, 99.2300000000001], [1.72435626E12, 97.42524916943526], [1.72435566E12, 105.02999999999999], [1.72435788E12, 105.93333333333337], [1.72435506E12, 95.51505016722409], [1.72435728E12, 101.75333333333332], [1.72435668E12, 103.44039735099341], [1.7243577E12, 89.28333333333332], [1.72435608E12, 120.05666666666667], [1.72435548E12, 122.20333333333328], [1.7243571E12, 104.16000000000001], [1.7243565E12, 97.7666666666667], [1.7243559E12, 107.37666666666668], [1.7243553E12, 95.02990033222596], [1.72435752E12, 91.60666666666671], [1.72435692E12, 96.73986486486484], [1.72435794E12, 97.23666666666664], [1.72435632E12, 103.90033222591362], [1.72435572E12, 101.8166666666666], [1.72435734E12, 93.4717607973422], [1.72435512E12, 94.05647840531563], [1.72435674E12, 89.9666666666667], [1.72435614E12, 99.99999999999997]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.724358E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 112.0, "minX": 1.724355E12, "maxY": 4889.0, "series": [{"data": [[1.72435554E12, 1155.0], [1.72435776E12, 1139.0], [1.72435716E12, 1146.0], [1.72435656E12, 1139.0], [1.72435596E12, 3201.0], [1.72435758E12, 1334.0], [1.72435536E12, 1139.0], [1.72435698E12, 1136.0], [1.72435638E12, 1132.0], [1.72435578E12, 1147.0], [1.724358E12, 135.0], [1.72435518E12, 1135.0], [1.7243574E12, 1158.0], [1.7243568E12, 1137.0], [1.72435782E12, 1128.0], [1.7243562E12, 1142.0], [1.7243556E12, 1229.0], [1.72435722E12, 1140.0], [1.724355E12, 4889.0], [1.72435662E12, 1183.0], [1.72435602E12, 427.0], [1.72435542E12, 1145.0], [1.72435764E12, 1133.0], [1.72435704E12, 1134.0], [1.72435644E12, 1141.0], [1.72435584E12, 1140.0], [1.72435746E12, 1134.0], [1.72435524E12, 1203.0], [1.72435686E12, 1410.0], [1.72435626E12, 1131.0], [1.72435566E12, 1489.0], [1.72435788E12, 1412.0], [1.72435506E12, 1153.0], [1.72435728E12, 1135.0], [1.72435668E12, 1155.0], [1.7243577E12, 1147.0], [1.72435608E12, 1396.0], [1.72435548E12, 3216.0], [1.7243571E12, 1143.0], [1.7243565E12, 1146.0], [1.7243559E12, 1188.0], [1.7243553E12, 1135.0], [1.72435752E12, 399.0], [1.72435692E12, 1240.0], [1.72435794E12, 1150.0], [1.72435632E12, 1148.0], [1.72435572E12, 1142.0], [1.72435734E12, 1142.0], [1.72435512E12, 452.0], [1.72435674E12, 519.0], [1.72435614E12, 1163.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.72435554E12, 145.90000000000003], [1.72435776E12, 135.0], [1.72435716E12, 137.0], [1.72435656E12, 141.7], [1.72435596E12, 166.0], [1.72435758E12, 138.0], [1.72435536E12, 145.8], [1.72435698E12, 139.0], [1.72435638E12, 148.0], [1.72435578E12, 147.8], [1.724358E12, 134.3], [1.72435518E12, 149.0], [1.7243574E12, 138.0], [1.7243568E12, 160.0], [1.72435782E12, 137.0], [1.7243562E12, 151.0], [1.7243556E12, 235.90000000000003], [1.72435722E12, 137.0], [1.724355E12, 387.0], [1.72435662E12, 142.90000000000003], [1.72435602E12, 145.80000000000007], [1.72435542E12, 147.0], [1.72435764E12, 138.0], [1.72435704E12, 136.0], [1.72435644E12, 147.0], [1.72435584E12, 144.0], [1.72435746E12, 140.0], [1.72435524E12, 164.0], [1.72435686E12, 141.0], [1.72435626E12, 151.8], [1.72435566E12, 175.0], [1.72435788E12, 141.90000000000003], [1.72435506E12, 149.0], [1.72435728E12, 147.60000000000014], [1.72435668E12, 144.7], [1.7243577E12, 136.0], [1.72435608E12, 206.80000000000007], [1.72435548E12, 218.90000000000003], [1.7243571E12, 137.90000000000003], [1.7243565E12, 140.0], [1.7243559E12, 188.90000000000003], [1.7243553E12, 144.60000000000002], [1.72435752E12, 143.0], [1.72435692E12, 137.0], [1.72435794E12, 136.0], [1.72435632E12, 150.8], [1.72435572E12, 161.90000000000003], [1.72435734E12, 137.8], [1.72435512E12, 156.60000000000002], [1.72435674E12, 137.0], [1.72435614E12, 149.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.72435554E12, 466.7700000000002], [1.72435776E12, 1132.94], [1.72435716E12, 403.82000000000016], [1.72435656E12, 447.42999999999944], [1.72435596E12, 1888.0], [1.72435758E12, 1125.1300000000008], [1.72435536E12, 1114.0400000000127], [1.72435698E12, 1097.699999999992], [1.72435638E12, 490.0799999999999], [1.72435578E12, 441.1400000000008], [1.724358E12, 135.0], [1.72435518E12, 496.0], [1.7243574E12, 411.1500000000017], [1.7243568E12, 1134.0], [1.72435782E12, 408.72000000000025], [1.7243562E12, 441.0], [1.7243556E12, 1199.94], [1.72435722E12, 406.0], [1.724355E12, 4837.900000000001], [1.72435662E12, 1130.0800000000063], [1.72435602E12, 213.87000000000012], [1.72435542E12, 516.0], [1.72435764E12, 617.0], [1.72435704E12, 431.71000000000026], [1.72435644E12, 427.0], [1.72435584E12, 457.0], [1.72435746E12, 423.0], [1.72435524E12, 1141.0], [1.72435686E12, 445.9000000000001], [1.72435626E12, 452.5800000000004], [1.72435566E12, 1150.8500000000001], [1.72435788E12, 1133.96], [1.72435506E12, 411.0], [1.72435728E12, 564.5600000000013], [1.72435668E12, 1114.9999999999793], [1.7243577E12, 187.7900000000002], [1.72435608E12, 1250.92], [1.72435548E12, 1229.0600000000009], [1.7243571E12, 1132.4700000000023], [1.7243565E12, 429.93000000000006], [1.7243559E12, 1180.5000000000005], [1.7243553E12, 416.6600000000003], [1.72435752E12, 376.6400000000003], [1.72435692E12, 547.4199999999832], [1.72435794E12, 439.6500000000003], [1.72435632E12, 1137.92], [1.72435572E12, 1127.6300000000058], [1.72435734E12, 437.7600000000002], [1.72435512E12, 434.98], [1.72435674E12, 433.5600000000004], [1.72435614E12, 430.94000000000005]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.72435554E12, 164.79999999999995], [1.72435776E12, 143.95], [1.72435716E12, 205.3999999999994], [1.72435656E12, 158.84999999999997], [1.72435596E12, 186.0], [1.72435758E12, 242.04999999999933], [1.72435536E12, 158.89999999999998], [1.72435698E12, 323.0], [1.72435638E12, 178.10000000000002], [1.72435578E12, 180.0], [1.724358E12, 135.0], [1.72435518E12, 164.0], [1.7243574E12, 143.95], [1.7243568E12, 326.0], [1.72435782E12, 143.89999999999998], [1.7243562E12, 187.0], [1.7243556E12, 515.95], [1.72435722E12, 172.0], [1.724355E12, 2679.5], [1.72435662E12, 327.5499999999999], [1.72435602E12, 160.95], [1.72435542E12, 172.0], [1.72435764E12, 320.0], [1.72435704E12, 147.95], [1.72435644E12, 169.0], [1.72435584E12, 160.0], [1.72435746E12, 176.95], [1.72435524E12, 221.0], [1.72435686E12, 224.84999999999997], [1.72435626E12, 170.79999999999995], [1.72435566E12, 180.0], [1.72435788E12, 312.84999999999997], [1.72435506E12, 161.0], [1.72435728E12, 240.95], [1.72435668E12, 312.5499999999999], [1.7243577E12, 138.0], [1.72435608E12, 384.19999999999914], [1.72435548E12, 429.34999999999985], [1.7243571E12, 244.64999999999992], [1.7243565E12, 175.95], [1.7243559E12, 230.89999999999998], [1.7243553E12, 150.0], [1.72435752E12, 166.79999999999995], [1.72435692E12, 147.49999999999977], [1.72435794E12, 149.69999999999993], [1.72435632E12, 167.0], [1.72435572E12, 366.1999999999987], [1.72435734E12, 150.69999999999993], [1.72435512E12, 180.0], [1.72435674E12, 140.0], [1.72435614E12, 247.39999999999895]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.72435554E12, 115.0], [1.72435776E12, 118.0], [1.72435716E12, 118.0], [1.72435656E12, 118.0], [1.72435596E12, 114.0], [1.72435758E12, 116.0], [1.72435536E12, 114.0], [1.72435698E12, 117.0], [1.72435638E12, 117.0], [1.72435578E12, 113.0], [1.724358E12, 118.0], [1.72435518E12, 115.0], [1.7243574E12, 119.0], [1.7243568E12, 117.0], [1.72435782E12, 118.0], [1.7243562E12, 114.0], [1.7243556E12, 116.0], [1.72435722E12, 118.0], [1.724355E12, 119.0], [1.72435662E12, 118.0], [1.72435602E12, 112.0], [1.72435542E12, 115.0], [1.72435764E12, 114.0], [1.72435704E12, 116.0], [1.72435644E12, 116.0], [1.72435584E12, 112.0], [1.72435746E12, 118.0], [1.72435524E12, 113.0], [1.72435686E12, 117.0], [1.72435626E12, 113.0], [1.72435566E12, 112.0], [1.72435788E12, 114.0], [1.72435506E12, 114.0], [1.72435728E12, 117.0], [1.72435668E12, 117.0], [1.7243577E12, 118.0], [1.72435608E12, 115.0], [1.72435548E12, 113.0], [1.7243571E12, 115.0], [1.7243565E12, 117.0], [1.7243559E12, 115.0], [1.7243553E12, 114.0], [1.72435752E12, 117.0], [1.72435692E12, 115.0], [1.72435794E12, 116.0], [1.72435632E12, 115.0], [1.72435572E12, 113.0], [1.72435734E12, 116.0], [1.72435512E12, 115.0], [1.72435674E12, 117.0], [1.72435614E12, 113.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.72435554E12, 130.0], [1.72435776E12, 126.0], [1.72435716E12, 127.0], [1.72435656E12, 127.0], [1.72435596E12, 129.0], [1.72435758E12, 126.0], [1.72435536E12, 130.0], [1.72435698E12, 126.0], [1.72435638E12, 132.0], [1.72435578E12, 129.0], [1.724358E12, 126.0], [1.72435518E12, 131.0], [1.7243574E12, 128.0], [1.7243568E12, 128.0], [1.72435782E12, 127.0], [1.7243562E12, 133.0], [1.7243556E12, 136.0], [1.72435722E12, 127.0], [1.724355E12, 142.0], [1.72435662E12, 129.0], [1.72435602E12, 128.0], [1.72435542E12, 130.0], [1.72435764E12, 126.0], [1.72435704E12, 127.0], [1.72435644E12, 127.0], [1.72435584E12, 129.0], [1.72435746E12, 127.0], [1.72435524E12, 131.0], [1.72435686E12, 127.0], [1.72435626E12, 132.0], [1.72435566E12, 130.0], [1.72435788E12, 127.0], [1.72435506E12, 133.0], [1.72435728E12, 125.0], [1.72435668E12, 129.0], [1.7243577E12, 127.0], [1.72435608E12, 132.0], [1.72435548E12, 132.0], [1.7243571E12, 127.0], [1.7243565E12, 126.0], [1.7243559E12, 131.0], [1.7243553E12, 130.0], [1.72435752E12, 128.0], [1.72435692E12, 127.0], [1.72435794E12, 126.0], [1.72435632E12, 133.0], [1.72435572E12, 131.0], [1.72435734E12, 128.0], [1.72435512E12, 132.0], [1.72435674E12, 128.0], [1.72435614E12, 131.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.724358E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 128.0, "minX": 2.0, "maxY": 2612.0, "series": [{"data": [[4.0, 130.0], [2.0, 133.0], [5.0, 128.0], [6.0, 131.0], [3.0, 128.0], [7.0, 132.0], [29.0, 2612.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 127.0, "minX": 2.0, "maxY": 2379.0, "series": [{"data": [[4.0, 130.0], [2.0, 132.5], [5.0, 128.0], [6.0, 130.0], [3.0, 127.0], [7.0, 132.0], [29.0, 2379.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.724355E12, "maxY": 5.066666666666666, "series": [{"data": [[1.72435554E12, 4.983333333333333], [1.72435776E12, 5.0], [1.72435716E12, 5.0], [1.72435656E12, 5.0], [1.72435596E12, 4.983333333333333], [1.72435758E12, 5.0], [1.72435536E12, 5.0], [1.72435698E12, 5.066666666666666], [1.72435638E12, 4.983333333333333], [1.72435578E12, 5.016666666666667], [1.724358E12, 0.16666666666666666], [1.72435518E12, 4.966666666666667], [1.7243574E12, 5.0], [1.7243568E12, 5.0], [1.72435782E12, 5.0], [1.7243562E12, 5.0], [1.7243556E12, 5.016666666666667], [1.72435722E12, 5.0], [1.724355E12, 4.816666666666666], [1.72435662E12, 5.016666666666667], [1.72435602E12, 5.0], [1.72435542E12, 5.0], [1.72435764E12, 5.0], [1.72435704E12, 5.016666666666667], [1.72435644E12, 4.983333333333333], [1.72435584E12, 4.983333333333333], [1.72435746E12, 5.0], [1.72435524E12, 5.0], [1.72435686E12, 5.0], [1.72435626E12, 5.016666666666667], [1.72435566E12, 4.983333333333333], [1.72435788E12, 5.0], [1.72435506E12, 5.0], [1.72435728E12, 5.0], [1.72435668E12, 5.016666666666667], [1.7243577E12, 5.0], [1.72435608E12, 5.0], [1.72435548E12, 5.0], [1.7243571E12, 5.0], [1.7243565E12, 5.016666666666667], [1.7243559E12, 5.0], [1.7243553E12, 5.016666666666667], [1.72435752E12, 5.0], [1.72435692E12, 4.916666666666667], [1.72435794E12, 5.0], [1.72435632E12, 5.0], [1.72435572E12, 5.016666666666667], [1.72435734E12, 5.0], [1.72435512E12, 5.016666666666667], [1.72435674E12, 5.0], [1.72435614E12, 5.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.724358E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.724355E12, "maxY": 5.066666666666666, "series": [{"data": [[1.72435554E12, 5.0], [1.72435776E12, 5.0], [1.72435716E12, 5.016666666666667], [1.72435656E12, 5.033333333333333], [1.72435596E12, 4.983333333333333], [1.72435758E12, 5.0], [1.72435536E12, 5.016666666666667], [1.72435698E12, 5.066666666666666], [1.72435638E12, 4.966666666666667], [1.72435578E12, 5.016666666666667], [1.724358E12, 0.16666666666666666], [1.72435518E12, 4.983333333333333], [1.7243574E12, 5.0], [1.7243568E12, 4.983333333333333], [1.72435782E12, 5.016666666666667], [1.7243562E12, 4.983333333333333], [1.7243556E12, 5.0], [1.72435722E12, 4.983333333333333], [1.724355E12, 4.816666666666666], [1.72435662E12, 5.0], [1.72435602E12, 5.0], [1.72435542E12, 4.983333333333333], [1.72435764E12, 4.983333333333333], [1.72435704E12, 5.0], [1.72435644E12, 4.983333333333333], [1.72435584E12, 4.983333333333333], [1.72435746E12, 5.0], [1.72435524E12, 4.983333333333333], [1.72435686E12, 5.0], [1.72435626E12, 5.016666666666667], [1.72435566E12, 5.0], [1.72435788E12, 5.0], [1.72435506E12, 4.983333333333333], [1.72435728E12, 5.0], [1.72435668E12, 5.033333333333333], [1.7243577E12, 5.0], [1.72435608E12, 5.0], [1.72435548E12, 5.0], [1.7243571E12, 5.0], [1.7243565E12, 5.0], [1.7243559E12, 5.0], [1.7243553E12, 5.016666666666667], [1.72435752E12, 5.0], [1.72435692E12, 4.933333333333334], [1.72435794E12, 5.0], [1.72435632E12, 5.016666666666667], [1.72435572E12, 5.0], [1.72435734E12, 5.016666666666667], [1.72435512E12, 5.016666666666667], [1.72435674E12, 5.0], [1.72435614E12, 5.016666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.724358E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.724355E12, "maxY": 5.066666666666666, "series": [{"data": [[1.72435554E12, 5.0], [1.72435776E12, 5.0], [1.72435716E12, 5.016666666666667], [1.72435656E12, 5.033333333333333], [1.72435596E12, 4.983333333333333], [1.72435758E12, 5.0], [1.72435536E12, 5.016666666666667], [1.72435698E12, 5.066666666666666], [1.72435638E12, 4.966666666666667], [1.72435578E12, 5.016666666666667], [1.724358E12, 0.16666666666666666], [1.72435518E12, 4.983333333333333], [1.7243574E12, 5.0], [1.7243568E12, 4.983333333333333], [1.72435782E12, 5.016666666666667], [1.7243562E12, 4.983333333333333], [1.7243556E12, 5.0], [1.72435722E12, 4.983333333333333], [1.724355E12, 4.816666666666666], [1.72435662E12, 5.0], [1.72435602E12, 5.0], [1.72435542E12, 4.983333333333333], [1.72435764E12, 4.983333333333333], [1.72435704E12, 5.0], [1.72435644E12, 4.983333333333333], [1.72435584E12, 4.983333333333333], [1.72435746E12, 5.0], [1.72435524E12, 4.983333333333333], [1.72435686E12, 5.0], [1.72435626E12, 5.016666666666667], [1.72435566E12, 5.0], [1.72435788E12, 5.0], [1.72435506E12, 4.983333333333333], [1.72435728E12, 5.0], [1.72435668E12, 5.033333333333333], [1.7243577E12, 5.0], [1.72435608E12, 5.0], [1.72435548E12, 5.0], [1.7243571E12, 5.0], [1.7243565E12, 5.0], [1.7243559E12, 5.0], [1.7243553E12, 5.016666666666667], [1.72435752E12, 5.0], [1.72435692E12, 4.933333333333334], [1.72435794E12, 5.0], [1.72435632E12, 5.016666666666667], [1.72435572E12, 5.0], [1.72435734E12, 5.016666666666667], [1.72435512E12, 5.016666666666667], [1.72435674E12, 5.0], [1.72435614E12, 5.016666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.724358E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.724355E12, "maxY": 5.066666666666666, "series": [{"data": [[1.72435554E12, 5.0], [1.72435776E12, 5.0], [1.72435716E12, 5.016666666666667], [1.72435656E12, 5.033333333333333], [1.72435596E12, 4.983333333333333], [1.72435758E12, 5.0], [1.72435536E12, 5.016666666666667], [1.72435698E12, 5.066666666666666], [1.72435638E12, 4.966666666666667], [1.72435578E12, 5.016666666666667], [1.724358E12, 0.16666666666666666], [1.72435518E12, 4.983333333333333], [1.7243574E12, 5.0], [1.7243568E12, 4.983333333333333], [1.72435782E12, 5.016666666666667], [1.7243562E12, 4.983333333333333], [1.7243556E12, 5.0], [1.72435722E12, 4.983333333333333], [1.724355E12, 4.816666666666666], [1.72435662E12, 5.0], [1.72435602E12, 5.0], [1.72435542E12, 4.983333333333333], [1.72435764E12, 4.983333333333333], [1.72435704E12, 5.0], [1.72435644E12, 4.983333333333333], [1.72435584E12, 4.983333333333333], [1.72435746E12, 5.0], [1.72435524E12, 4.983333333333333], [1.72435686E12, 5.0], [1.72435626E12, 5.016666666666667], [1.72435566E12, 5.0], [1.72435788E12, 5.0], [1.72435506E12, 4.983333333333333], [1.72435728E12, 5.0], [1.72435668E12, 5.033333333333333], [1.7243577E12, 5.0], [1.72435608E12, 5.0], [1.72435548E12, 5.0], [1.7243571E12, 5.0], [1.7243565E12, 5.0], [1.7243559E12, 5.0], [1.7243553E12, 5.016666666666667], [1.72435752E12, 5.0], [1.72435692E12, 4.933333333333334], [1.72435794E12, 5.0], [1.72435632E12, 5.016666666666667], [1.72435572E12, 5.0], [1.72435734E12, 5.016666666666667], [1.72435512E12, 5.016666666666667], [1.72435674E12, 5.0], [1.72435614E12, 5.016666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.724358E12, "title": "Total Transactions Per Second"}},
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

