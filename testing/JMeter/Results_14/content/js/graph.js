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
        data: {"result": {"minY": 113.0, "minX": 0.0, "maxY": 7156.0, "series": [{"data": [[0.0, 113.0], [0.1, 116.0], [0.2, 117.0], [0.3, 117.0], [0.4, 117.0], [0.5, 117.0], [0.6, 118.0], [0.7, 118.0], [0.8, 118.0], [0.9, 118.0], [1.0, 118.0], [1.1, 118.0], [1.2, 118.0], [1.3, 119.0], [1.4, 119.0], [1.5, 119.0], [1.6, 119.0], [1.7, 119.0], [1.8, 119.0], [1.9, 119.0], [2.0, 119.0], [2.1, 119.0], [2.2, 119.0], [2.3, 119.0], [2.4, 119.0], [2.5, 119.0], [2.6, 120.0], [2.7, 120.0], [2.8, 120.0], [2.9, 120.0], [3.0, 120.0], [3.1, 120.0], [3.2, 120.0], [3.3, 120.0], [3.4, 120.0], [3.5, 120.0], [3.6, 120.0], [3.7, 120.0], [3.8, 120.0], [3.9, 120.0], [4.0, 120.0], [4.1, 120.0], [4.2, 120.0], [4.3, 120.0], [4.4, 120.0], [4.5, 120.0], [4.6, 121.0], [4.7, 121.0], [4.8, 121.0], [4.9, 121.0], [5.0, 121.0], [5.1, 121.0], [5.2, 121.0], [5.3, 121.0], [5.4, 121.0], [5.5, 121.0], [5.6, 121.0], [5.7, 121.0], [5.8, 121.0], [5.9, 121.0], [6.0, 121.0], [6.1, 121.0], [6.2, 121.0], [6.3, 121.0], [6.4, 121.0], [6.5, 121.0], [6.6, 121.0], [6.7, 121.0], [6.8, 121.0], [6.9, 121.0], [7.0, 121.0], [7.1, 121.0], [7.2, 121.0], [7.3, 122.0], [7.4, 122.0], [7.5, 122.0], [7.6, 122.0], [7.7, 122.0], [7.8, 122.0], [7.9, 122.0], [8.0, 122.0], [8.1, 122.0], [8.2, 122.0], [8.3, 122.0], [8.4, 122.0], [8.5, 122.0], [8.6, 122.0], [8.7, 122.0], [8.8, 122.0], [8.9, 122.0], [9.0, 122.0], [9.1, 122.0], [9.2, 122.0], [9.3, 122.0], [9.4, 122.0], [9.5, 122.0], [9.6, 122.0], [9.7, 122.0], [9.8, 122.0], [9.9, 122.0], [10.0, 122.0], [10.1, 122.0], [10.2, 122.0], [10.3, 122.0], [10.4, 122.0], [10.5, 122.0], [10.6, 122.0], [10.7, 122.0], [10.8, 123.0], [10.9, 123.0], [11.0, 123.0], [11.1, 123.0], [11.2, 123.0], [11.3, 123.0], [11.4, 123.0], [11.5, 123.0], [11.6, 123.0], [11.7, 123.0], [11.8, 123.0], [11.9, 123.0], [12.0, 123.0], [12.1, 123.0], [12.2, 123.0], [12.3, 123.0], [12.4, 123.0], [12.5, 123.0], [12.6, 123.0], [12.7, 123.0], [12.8, 123.0], [12.9, 123.0], [13.0, 123.0], [13.1, 123.0], [13.2, 123.0], [13.3, 123.0], [13.4, 123.0], [13.5, 123.0], [13.6, 123.0], [13.7, 123.0], [13.8, 123.0], [13.9, 123.0], [14.0, 123.0], [14.1, 123.0], [14.2, 123.0], [14.3, 123.0], [14.4, 123.0], [14.5, 123.0], [14.6, 123.0], [14.7, 123.0], [14.8, 123.0], [14.9, 123.0], [15.0, 124.0], [15.1, 124.0], [15.2, 124.0], [15.3, 124.0], [15.4, 124.0], [15.5, 124.0], [15.6, 124.0], [15.7, 124.0], [15.8, 124.0], [15.9, 124.0], [16.0, 124.0], [16.1, 124.0], [16.2, 124.0], [16.3, 124.0], [16.4, 124.0], [16.5, 124.0], [16.6, 124.0], [16.7, 124.0], [16.8, 124.0], [16.9, 124.0], [17.0, 124.0], [17.1, 124.0], [17.2, 124.0], [17.3, 124.0], [17.4, 124.0], [17.5, 124.0], [17.6, 124.0], [17.7, 124.0], [17.8, 124.0], [17.9, 124.0], [18.0, 124.0], [18.1, 124.0], [18.2, 124.0], [18.3, 124.0], [18.4, 124.0], [18.5, 124.0], [18.6, 124.0], [18.7, 124.0], [18.8, 124.0], [18.9, 124.0], [19.0, 124.0], [19.1, 124.0], [19.2, 124.0], [19.3, 124.0], [19.4, 124.0], [19.5, 124.0], [19.6, 124.0], [19.7, 124.0], [19.8, 124.0], [19.9, 124.0], [20.0, 124.0], [20.1, 125.0], [20.2, 125.0], [20.3, 125.0], [20.4, 125.0], [20.5, 125.0], [20.6, 125.0], [20.7, 125.0], [20.8, 125.0], [20.9, 125.0], [21.0, 125.0], [21.1, 125.0], [21.2, 125.0], [21.3, 125.0], [21.4, 125.0], [21.5, 125.0], [21.6, 125.0], [21.7, 125.0], [21.8, 125.0], [21.9, 125.0], [22.0, 125.0], [22.1, 125.0], [22.2, 125.0], [22.3, 125.0], [22.4, 125.0], [22.5, 125.0], [22.6, 125.0], [22.7, 125.0], [22.8, 125.0], [22.9, 125.0], [23.0, 125.0], [23.1, 125.0], [23.2, 125.0], [23.3, 125.0], [23.4, 125.0], [23.5, 125.0], [23.6, 125.0], [23.7, 125.0], [23.8, 125.0], [23.9, 125.0], [24.0, 125.0], [24.1, 125.0], [24.2, 125.0], [24.3, 125.0], [24.4, 125.0], [24.5, 125.0], [24.6, 125.0], [24.7, 125.0], [24.8, 125.0], [24.9, 125.0], [25.0, 125.0], [25.1, 125.0], [25.2, 125.0], [25.3, 126.0], [25.4, 126.0], [25.5, 126.0], [25.6, 126.0], [25.7, 126.0], [25.8, 126.0], [25.9, 126.0], [26.0, 126.0], [26.1, 126.0], [26.2, 126.0], [26.3, 126.0], [26.4, 126.0], [26.5, 126.0], [26.6, 126.0], [26.7, 126.0], [26.8, 126.0], [26.9, 126.0], [27.0, 126.0], [27.1, 126.0], [27.2, 126.0], [27.3, 126.0], [27.4, 126.0], [27.5, 126.0], [27.6, 126.0], [27.7, 126.0], [27.8, 126.0], [27.9, 126.0], [28.0, 126.0], [28.1, 126.0], [28.2, 126.0], [28.3, 126.0], [28.4, 126.0], [28.5, 126.0], [28.6, 126.0], [28.7, 126.0], [28.8, 126.0], [28.9, 126.0], [29.0, 126.0], [29.1, 126.0], [29.2, 126.0], [29.3, 126.0], [29.4, 126.0], [29.5, 126.0], [29.6, 126.0], [29.7, 126.0], [29.8, 126.0], [29.9, 126.0], [30.0, 126.0], [30.1, 126.0], [30.2, 126.0], [30.3, 126.0], [30.4, 127.0], [30.5, 127.0], [30.6, 127.0], [30.7, 127.0], [30.8, 127.0], [30.9, 127.0], [31.0, 127.0], [31.1, 127.0], [31.2, 127.0], [31.3, 127.0], [31.4, 127.0], [31.5, 127.0], [31.6, 127.0], [31.7, 127.0], [31.8, 127.0], [31.9, 127.0], [32.0, 127.0], [32.1, 127.0], [32.2, 127.0], [32.3, 127.0], [32.4, 127.0], [32.5, 127.0], [32.6, 127.0], [32.7, 127.0], [32.8, 127.0], [32.9, 127.0], [33.0, 127.0], [33.1, 127.0], [33.2, 127.0], [33.3, 127.0], [33.4, 127.0], [33.5, 127.0], [33.6, 127.0], [33.7, 127.0], [33.8, 127.0], [33.9, 127.0], [34.0, 127.0], [34.1, 127.0], [34.2, 127.0], [34.3, 127.0], [34.4, 127.0], [34.5, 127.0], [34.6, 127.0], [34.7, 127.0], [34.8, 127.0], [34.9, 127.0], [35.0, 127.0], [35.1, 127.0], [35.2, 127.0], [35.3, 127.0], [35.4, 127.0], [35.5, 127.0], [35.6, 127.0], [35.7, 127.0], [35.8, 127.0], [35.9, 127.0], [36.0, 127.0], [36.1, 127.0], [36.2, 128.0], [36.3, 128.0], [36.4, 128.0], [36.5, 128.0], [36.6, 128.0], [36.7, 128.0], [36.8, 128.0], [36.9, 128.0], [37.0, 128.0], [37.1, 128.0], [37.2, 128.0], [37.3, 128.0], [37.4, 128.0], [37.5, 128.0], [37.6, 128.0], [37.7, 128.0], [37.8, 128.0], [37.9, 128.0], [38.0, 128.0], [38.1, 128.0], [38.2, 128.0], [38.3, 128.0], [38.4, 128.0], [38.5, 128.0], [38.6, 128.0], [38.7, 128.0], [38.8, 128.0], [38.9, 128.0], [39.0, 128.0], [39.1, 128.0], [39.2, 128.0], [39.3, 128.0], [39.4, 128.0], [39.5, 128.0], [39.6, 128.0], [39.7, 128.0], [39.8, 128.0], [39.9, 128.0], [40.0, 128.0], [40.1, 128.0], [40.2, 128.0], [40.3, 128.0], [40.4, 128.0], [40.5, 128.0], [40.6, 128.0], [40.7, 128.0], [40.8, 128.0], [40.9, 128.0], [41.0, 128.0], [41.1, 128.0], [41.2, 129.0], [41.3, 129.0], [41.4, 129.0], [41.5, 129.0], [41.6, 129.0], [41.7, 129.0], [41.8, 129.0], [41.9, 129.0], [42.0, 129.0], [42.1, 129.0], [42.2, 129.0], [42.3, 129.0], [42.4, 129.0], [42.5, 129.0], [42.6, 129.0], [42.7, 129.0], [42.8, 129.0], [42.9, 129.0], [43.0, 129.0], [43.1, 129.0], [43.2, 129.0], [43.3, 129.0], [43.4, 129.0], [43.5, 129.0], [43.6, 129.0], [43.7, 129.0], [43.8, 129.0], [43.9, 129.0], [44.0, 129.0], [44.1, 129.0], [44.2, 129.0], [44.3, 129.0], [44.4, 129.0], [44.5, 129.0], [44.6, 129.0], [44.7, 129.0], [44.8, 129.0], [44.9, 129.0], [45.0, 129.0], [45.1, 129.0], [45.2, 129.0], [45.3, 129.0], [45.4, 129.0], [45.5, 129.0], [45.6, 129.0], [45.7, 129.0], [45.8, 129.0], [45.9, 129.0], [46.0, 129.0], [46.1, 129.0], [46.2, 129.0], [46.3, 129.0], [46.4, 129.0], [46.5, 129.0], [46.6, 130.0], [46.7, 130.0], [46.8, 130.0], [46.9, 130.0], [47.0, 130.0], [47.1, 130.0], [47.2, 130.0], [47.3, 130.0], [47.4, 130.0], [47.5, 130.0], [47.6, 130.0], [47.7, 130.0], [47.8, 130.0], [47.9, 130.0], [48.0, 130.0], [48.1, 130.0], [48.2, 130.0], [48.3, 130.0], [48.4, 130.0], [48.5, 130.0], [48.6, 130.0], [48.7, 130.0], [48.8, 130.0], [48.9, 130.0], [49.0, 130.0], [49.1, 130.0], [49.2, 130.0], [49.3, 130.0], [49.4, 130.0], [49.5, 130.0], [49.6, 130.0], [49.7, 130.0], [49.8, 130.0], [49.9, 130.0], [50.0, 130.0], [50.1, 130.0], [50.2, 130.0], [50.3, 130.0], [50.4, 130.0], [50.5, 130.0], [50.6, 130.0], [50.7, 130.0], [50.8, 130.0], [50.9, 130.0], [51.0, 130.0], [51.1, 130.0], [51.2, 130.0], [51.3, 130.0], [51.4, 130.0], [51.5, 130.0], [51.6, 130.0], [51.7, 130.0], [51.8, 130.0], [51.9, 131.0], [52.0, 131.0], [52.1, 131.0], [52.2, 131.0], [52.3, 131.0], [52.4, 131.0], [52.5, 131.0], [52.6, 131.0], [52.7, 131.0], [52.8, 131.0], [52.9, 131.0], [53.0, 131.0], [53.1, 131.0], [53.2, 131.0], [53.3, 131.0], [53.4, 131.0], [53.5, 131.0], [53.6, 131.0], [53.7, 131.0], [53.8, 131.0], [53.9, 131.0], [54.0, 131.0], [54.1, 131.0], [54.2, 131.0], [54.3, 131.0], [54.4, 131.0], [54.5, 131.0], [54.6, 131.0], [54.7, 131.0], [54.8, 131.0], [54.9, 131.0], [55.0, 131.0], [55.1, 131.0], [55.2, 131.0], [55.3, 131.0], [55.4, 131.0], [55.5, 131.0], [55.6, 131.0], [55.7, 131.0], [55.8, 131.0], [55.9, 131.0], [56.0, 131.0], [56.1, 131.0], [56.2, 131.0], [56.3, 131.0], [56.4, 131.0], [56.5, 131.0], [56.6, 131.0], [56.7, 131.0], [56.8, 131.0], [56.9, 131.0], [57.0, 131.0], [57.1, 132.0], [57.2, 132.0], [57.3, 132.0], [57.4, 132.0], [57.5, 132.0], [57.6, 132.0], [57.7, 132.0], [57.8, 132.0], [57.9, 132.0], [58.0, 132.0], [58.1, 132.0], [58.2, 132.0], [58.3, 132.0], [58.4, 132.0], [58.5, 132.0], [58.6, 132.0], [58.7, 132.0], [58.8, 132.0], [58.9, 132.0], [59.0, 132.0], [59.1, 132.0], [59.2, 132.0], [59.3, 132.0], [59.4, 132.0], [59.5, 132.0], [59.6, 132.0], [59.7, 132.0], [59.8, 132.0], [59.9, 132.0], [60.0, 132.0], [60.1, 132.0], [60.2, 132.0], [60.3, 132.0], [60.4, 132.0], [60.5, 132.0], [60.6, 132.0], [60.7, 132.0], [60.8, 132.0], [60.9, 132.0], [61.0, 132.0], [61.1, 132.0], [61.2, 132.0], [61.3, 132.0], [61.4, 132.0], [61.5, 132.0], [61.6, 132.0], [61.7, 132.0], [61.8, 132.0], [61.9, 132.0], [62.0, 132.0], [62.1, 132.0], [62.2, 132.0], [62.3, 133.0], [62.4, 133.0], [62.5, 133.0], [62.6, 133.0], [62.7, 133.0], [62.8, 133.0], [62.9, 133.0], [63.0, 133.0], [63.1, 133.0], [63.2, 133.0], [63.3, 133.0], [63.4, 133.0], [63.5, 133.0], [63.6, 133.0], [63.7, 133.0], [63.8, 133.0], [63.9, 133.0], [64.0, 133.0], [64.1, 133.0], [64.2, 133.0], [64.3, 133.0], [64.4, 133.0], [64.5, 133.0], [64.6, 133.0], [64.7, 133.0], [64.8, 133.0], [64.9, 133.0], [65.0, 133.0], [65.1, 133.0], [65.2, 133.0], [65.3, 133.0], [65.4, 133.0], [65.5, 133.0], [65.6, 133.0], [65.7, 133.0], [65.8, 133.0], [65.9, 133.0], [66.0, 133.0], [66.1, 133.0], [66.2, 133.0], [66.3, 133.0], [66.4, 133.0], [66.5, 133.0], [66.6, 133.0], [66.7, 133.0], [66.8, 133.0], [66.9, 133.0], [67.0, 133.0], [67.1, 134.0], [67.2, 134.0], [67.3, 134.0], [67.4, 134.0], [67.5, 134.0], [67.6, 134.0], [67.7, 134.0], [67.8, 134.0], [67.9, 134.0], [68.0, 134.0], [68.1, 134.0], [68.2, 134.0], [68.3, 134.0], [68.4, 134.0], [68.5, 134.0], [68.6, 134.0], [68.7, 134.0], [68.8, 134.0], [68.9, 134.0], [69.0, 134.0], [69.1, 134.0], [69.2, 134.0], [69.3, 134.0], [69.4, 134.0], [69.5, 134.0], [69.6, 134.0], [69.7, 134.0], [69.8, 134.0], [69.9, 134.0], [70.0, 134.0], [70.1, 134.0], [70.2, 134.0], [70.3, 134.0], [70.4, 134.0], [70.5, 134.0], [70.6, 134.0], [70.7, 134.0], [70.8, 134.0], [70.9, 134.0], [71.0, 134.0], [71.1, 134.0], [71.2, 134.0], [71.3, 134.0], [71.4, 134.0], [71.5, 134.0], [71.6, 135.0], [71.7, 135.0], [71.8, 135.0], [71.9, 135.0], [72.0, 135.0], [72.1, 135.0], [72.2, 135.0], [72.3, 135.0], [72.4, 135.0], [72.5, 135.0], [72.6, 135.0], [72.7, 135.0], [72.8, 135.0], [72.9, 135.0], [73.0, 135.0], [73.1, 135.0], [73.2, 135.0], [73.3, 135.0], [73.4, 135.0], [73.5, 135.0], [73.6, 135.0], [73.7, 135.0], [73.8, 135.0], [73.9, 135.0], [74.0, 135.0], [74.1, 135.0], [74.2, 135.0], [74.3, 135.0], [74.4, 135.0], [74.5, 135.0], [74.6, 135.0], [74.7, 135.0], [74.8, 135.0], [74.9, 135.0], [75.0, 135.0], [75.1, 135.0], [75.2, 136.0], [75.3, 136.0], [75.4, 136.0], [75.5, 136.0], [75.6, 136.0], [75.7, 136.0], [75.8, 136.0], [75.9, 136.0], [76.0, 136.0], [76.1, 136.0], [76.2, 136.0], [76.3, 136.0], [76.4, 136.0], [76.5, 136.0], [76.6, 136.0], [76.7, 136.0], [76.8, 136.0], [76.9, 136.0], [77.0, 136.0], [77.1, 136.0], [77.2, 136.0], [77.3, 136.0], [77.4, 136.0], [77.5, 136.0], [77.6, 136.0], [77.7, 136.0], [77.8, 136.0], [77.9, 136.0], [78.0, 136.0], [78.1, 136.0], [78.2, 136.0], [78.3, 136.0], [78.4, 136.0], [78.5, 137.0], [78.6, 137.0], [78.7, 137.0], [78.8, 137.0], [78.9, 137.0], [79.0, 137.0], [79.1, 137.0], [79.2, 137.0], [79.3, 137.0], [79.4, 137.0], [79.5, 137.0], [79.6, 137.0], [79.7, 137.0], [79.8, 137.0], [79.9, 137.0], [80.0, 137.0], [80.1, 137.0], [80.2, 137.0], [80.3, 137.0], [80.4, 137.0], [80.5, 137.0], [80.6, 137.0], [80.7, 137.0], [80.8, 137.0], [80.9, 137.0], [81.0, 137.0], [81.1, 138.0], [81.2, 138.0], [81.3, 138.0], [81.4, 138.0], [81.5, 138.0], [81.6, 138.0], [81.7, 138.0], [81.8, 138.0], [81.9, 138.0], [82.0, 138.0], [82.1, 138.0], [82.2, 138.0], [82.3, 138.0], [82.4, 138.0], [82.5, 138.0], [82.6, 138.0], [82.7, 138.0], [82.8, 138.0], [82.9, 138.0], [83.0, 138.0], [83.1, 138.0], [83.2, 138.0], [83.3, 138.0], [83.4, 138.0], [83.5, 138.0], [83.6, 138.0], [83.7, 139.0], [83.8, 139.0], [83.9, 139.0], [84.0, 139.0], [84.1, 139.0], [84.2, 139.0], [84.3, 139.0], [84.4, 139.0], [84.5, 139.0], [84.6, 139.0], [84.7, 139.0], [84.8, 139.0], [84.9, 139.0], [85.0, 139.0], [85.1, 139.0], [85.2, 139.0], [85.3, 139.0], [85.4, 139.0], [85.5, 139.0], [85.6, 139.0], [85.7, 139.0], [85.8, 139.0], [85.9, 139.0], [86.0, 140.0], [86.1, 140.0], [86.2, 140.0], [86.3, 140.0], [86.4, 140.0], [86.5, 140.0], [86.6, 140.0], [86.7, 140.0], [86.8, 140.0], [86.9, 140.0], [87.0, 140.0], [87.1, 140.0], [87.2, 140.0], [87.3, 140.0], [87.4, 140.0], [87.5, 140.0], [87.6, 140.0], [87.7, 141.0], [87.8, 141.0], [87.9, 141.0], [88.0, 141.0], [88.1, 141.0], [88.2, 141.0], [88.3, 141.0], [88.4, 141.0], [88.5, 141.0], [88.6, 141.0], [88.7, 141.0], [88.8, 141.0], [88.9, 142.0], [89.0, 142.0], [89.1, 142.0], [89.2, 142.0], [89.3, 142.0], [89.4, 142.0], [89.5, 142.0], [89.6, 142.0], [89.7, 142.0], [89.8, 142.0], [89.9, 142.0], [90.0, 142.0], [90.1, 143.0], [90.2, 143.0], [90.3, 143.0], [90.4, 143.0], [90.5, 143.0], [90.6, 143.0], [90.7, 143.0], [90.8, 144.0], [90.9, 144.0], [91.0, 144.0], [91.1, 144.0], [91.2, 144.0], [91.3, 144.0], [91.4, 145.0], [91.5, 145.0], [91.6, 145.0], [91.7, 145.0], [91.8, 145.0], [91.9, 146.0], [92.0, 146.0], [92.1, 146.0], [92.2, 147.0], [92.3, 147.0], [92.4, 147.0], [92.5, 147.0], [92.6, 148.0], [92.7, 148.0], [92.8, 148.0], [92.9, 149.0], [93.0, 149.0], [93.1, 150.0], [93.2, 151.0], [93.3, 151.0], [93.4, 152.0], [93.5, 153.0], [93.6, 154.0], [93.7, 155.0], [93.8, 156.0], [93.9, 157.0], [94.0, 158.0], [94.1, 160.0], [94.2, 162.0], [94.3, 164.0], [94.4, 165.0], [94.5, 167.0], [94.6, 168.0], [94.7, 171.0], [94.8, 173.0], [94.9, 175.0], [95.0, 177.0], [95.1, 179.0], [95.2, 181.0], [95.3, 183.0], [95.4, 186.0], [95.5, 189.0], [95.6, 192.0], [95.7, 200.0], [95.8, 214.0], [95.9, 223.0], [96.0, 231.0], [96.1, 243.0], [96.2, 248.0], [96.3, 269.0], [96.4, 291.0], [96.5, 306.0], [96.6, 316.0], [96.7, 323.0], [96.8, 327.0], [96.9, 329.0], [97.0, 332.0], [97.1, 339.0], [97.2, 365.0], [97.3, 382.0], [97.4, 386.0], [97.5, 388.0], [97.6, 390.0], [97.7, 393.0], [97.8, 395.0], [97.9, 396.0], [98.0, 398.0], [98.1, 401.0], [98.2, 405.0], [98.3, 413.0], [98.4, 421.0], [98.5, 427.0], [98.6, 430.0], [98.7, 434.0], [98.8, 443.0], [98.9, 452.0], [99.0, 493.0], [99.1, 656.0], [99.2, 1123.0], [99.3, 1134.0], [99.4, 1136.0], [99.5, 1139.0], [99.6, 1142.0], [99.7, 1147.0], [99.8, 1340.0], [99.9, 3557.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 14353.0, "series": [{"data": [[600.0, 7.0], [700.0, 3.0], [800.0, 2.0], [900.0, 2.0], [1000.0, 2.0], [1100.0, 86.0], [1200.0, 3.0], [1300.0, 3.0], [1400.0, 3.0], [1500.0, 2.0], [100.0, 14353.0], [2000.0, 1.0], [2100.0, 1.0], [2300.0, 1.0], [2500.0, 2.0], [2900.0, 1.0], [3100.0, 1.0], [200.0, 117.0], [3400.0, 1.0], [3500.0, 2.0], [3900.0, 1.0], [4000.0, 1.0], [4300.0, 2.0], [4400.0, 2.0], [300.0, 238.0], [5100.0, 1.0], [5300.0, 1.0], [5600.0, 1.0], [5500.0, 1.0], [5900.0, 2.0], [6000.0, 1.0], [400.0, 143.0], [7100.0, 1.0], [500.0, 12.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 26.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 14852.0, "series": [{"data": [[0.0, 14852.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 122.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 26.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0167224080267565, "minX": 1.72434336E12, "maxY": 6.212962962962964, "series": [{"data": [[1.72434486E12, 1.1066666666666674], [1.72434546E12, 1.046666666666666], [1.72434384E12, 1.0802675585284285], [1.72434606E12, 1.063545150501672], [1.72434366E12, 1.066889632107025], [1.72434624E12, 1.039999999999999], [1.72434426E12, 1.053333333333333], [1.72434564E12, 1.1033333333333326], [1.72434342E12, 1.1476510067114092], [1.72434402E12, 1.1040268456375832], [1.72434588E12, 1.0365448504983379], [1.72434444E12, 1.0366666666666655], [1.72434504E12, 1.1270903010033444], [1.7243439E12, 1.093645484949833], [1.7243457E12, 1.0766666666666669], [1.7243445E12, 1.1333333333333324], [1.72434492E12, 1.0836120401337799], [1.7243463E12, 1.0604026845637582], [1.72434552E12, 1.073089700996677], [1.72434468E12, 1.07641196013289], [1.72434528E12, 1.2255892255892262], [1.7243451E12, 1.1129568106312295], [1.72434348E12, 1.0866666666666662], [1.72434612E12, 1.0598006644518279], [1.72434408E12, 1.0167224080267565], [1.72434516E12, 1.0466666666666662], [1.72434354E12, 1.0733333333333328], [1.72434636E12, 1.087179487179487], [1.72434396E12, 1.1395348837209298], [1.72434594E12, 1.0866666666666664], [1.72434456E12, 1.0838926174496648], [1.72434534E12, 1.0990099009900982], [1.72434372E12, 1.0863787375415277], [1.72434618E12, 1.0466666666666669], [1.72434432E12, 1.0993377483443698], [1.72434558E12, 1.1233333333333329], [1.72434414E12, 1.0598006644518276], [1.72434576E12, 1.0564784053156153], [1.72434474E12, 1.0766666666666675], [1.724346E12, 1.0466666666666662], [1.7243442E12, 1.1893687707641196], [1.7243448E12, 1.0863787375415277], [1.72434462E12, 1.0730897009966784], [1.72434522E12, 1.1040268456375835], [1.7243436E12, 1.0631229235880397], [1.72434438E12, 1.0969899665551848], [1.72434336E12, 6.212962962962964], [1.72434498E12, 1.0833333333333328], [1.7243454E12, 1.09], [1.72434378E12, 1.0933333333333337], [1.72434582E12, 1.086666666666667]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72434636E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 136.93999566755693, "minX": 1.0, "maxY": 6020.0, "series": [{"data": [[2.0, 237.6564805057956], [3.0, 378.1772151898734], [4.0, 380.9166666666667], [5.0, 2138.0], [6.0, 673.0], [8.0, 2653.0], [10.0, 1556.0], [11.0, 2353.0], [12.0, 3411.0], [13.0, 3681.5], [15.0, 2301.5], [16.0, 3131.0], [1.0, 136.93999566755693], [17.0, 3908.0], [18.0, 4469.0], [19.0, 4471.0], [20.0, 6020.0], [21.0, 3557.0], [22.0, 3538.0], [23.0, 5943.0], [24.0, 2586.0], [25.0, 4090.0], [26.0, 5544.0], [27.0, 1340.0], [28.0, 5646.0], [29.0, 5985.0], [31.0, 2349.25]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.1226666666666616, 152.55453333333313]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 31.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 216.0, "minX": 1.72434336E12, "maxY": 39919.333333333336, "series": [{"data": [[1.72434486E12, 39524.53333333333], [1.72434546E12, 39524.45], [1.72434384E12, 39383.01666666667], [1.72434606E12, 39374.7], [1.72434366E12, 39392.8], [1.72434624E12, 39513.28333333333], [1.72434426E12, 39524.35], [1.72434564E12, 39514.9], [1.72434342E12, 39258.61666666667], [1.72434402E12, 39258.73333333333], [1.72434588E12, 39638.28333333333], [1.72434444E12, 39514.75], [1.72434504E12, 39383.01666666667], [1.7243439E12, 39385.3], [1.7243457E12, 39517.083333333336], [1.7243445E12, 39516.933333333334], [1.72434492E12, 39393.166666666664], [1.7243463E12, 39250.3], [1.72434552E12, 39656.45], [1.72434468E12, 39654.63333333333], [1.72434528E12, 39127.96666666667], [1.7243451E12, 39648.55], [1.72434348E12, 39522.86666666667], [1.72434612E12, 39643.433333333334], [1.72434408E12, 39391.35], [1.72434516E12, 39521.4], [1.72434354E12, 39523.53333333333], [1.72434636E12, 25684.233333333334], [1.72434396E12, 39653.46666666667], [1.72434594E12, 39511.833333333336], [1.72434456E12, 39258.066666666666], [1.72434534E12, 39919.333333333336], [1.72434372E12, 39656.2], [1.72434618E12, 39512.51666666667], [1.72434432E12, 39788.333333333336], [1.72434558E12, 39524.85], [1.72434414E12, 39655.6], [1.72434576E12, 39653.183333333334], [1.72434474E12, 39523.88333333333], [1.724346E12, 39505.55], [1.7243442E12, 39656.13333333333], [1.7243448E12, 39656.566666666666], [1.72434462E12, 39653.98333333333], [1.72434522E12, 39258.98333333333], [1.7243436E12, 39655.98333333333], [1.72434438E12, 39393.15], [1.72434336E12, 14227.716666666667], [1.72434498E12, 39524.85], [1.7243454E12, 39524.316666666666], [1.72434378E12, 39524.75], [1.72434582E12, 39506.51666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.72434486E12, 600.0], [1.72434546E12, 600.0], [1.72434384E12, 598.0], [1.72434606E12, 598.0], [1.72434366E12, 598.0], [1.72434624E12, 600.0], [1.72434426E12, 600.0], [1.72434564E12, 600.0], [1.72434342E12, 596.0], [1.72434402E12, 596.0], [1.72434588E12, 602.0], [1.72434444E12, 600.0], [1.72434504E12, 598.0], [1.7243439E12, 598.0], [1.7243457E12, 600.0], [1.7243445E12, 600.0], [1.72434492E12, 598.0], [1.7243463E12, 596.0], [1.72434552E12, 602.0], [1.72434468E12, 602.0], [1.72434528E12, 594.0], [1.7243451E12, 602.0], [1.72434348E12, 600.0], [1.72434612E12, 602.0], [1.72434408E12, 598.0], [1.72434516E12, 600.0], [1.72434354E12, 600.0], [1.72434636E12, 390.0], [1.72434396E12, 602.0], [1.72434594E12, 600.0], [1.72434456E12, 596.0], [1.72434534E12, 606.0], [1.72434372E12, 602.0], [1.72434618E12, 600.0], [1.72434432E12, 604.0], [1.72434558E12, 600.0], [1.72434414E12, 602.0], [1.72434576E12, 602.0], [1.72434474E12, 600.0], [1.724346E12, 600.0], [1.7243442E12, 602.0], [1.7243448E12, 602.0], [1.72434462E12, 602.0], [1.72434522E12, 596.0], [1.7243436E12, 602.0], [1.72434438E12, 598.0], [1.72434336E12, 216.0], [1.72434498E12, 600.0], [1.7243454E12, 600.0], [1.72434378E12, 600.0], [1.72434582E12, 600.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72434636E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 132.33110367892988, "minX": 1.72434336E12, "maxY": 1062.9907407407406, "series": [{"data": [[1.72434486E12, 147.38333333333313], [1.72434546E12, 140.25666666666655], [1.72434384E12, 143.22073578595325], [1.72434606E12, 141.92976588628778], [1.72434366E12, 138.7959866220736], [1.72434624E12, 140.0899999999999], [1.72434426E12, 139.20999999999995], [1.72434564E12, 152.37333333333336], [1.72434342E12, 158.1879194630872], [1.72434402E12, 146.68120805369134], [1.72434588E12, 140.8139534883721], [1.72434444E12, 135.63000000000014], [1.72434504E12, 150.42140468227424], [1.7243439E12, 145.56187290969885], [1.7243457E12, 148.08333333333312], [1.7243445E12, 153.85000000000005], [1.72434492E12, 143.27759197324414], [1.7243463E12, 143.6174496644295], [1.72434552E12, 147.29568106312283], [1.72434468E12, 142.02990033222594], [1.72434528E12, 176.19865319865312], [1.7243451E12, 149.32225913621264], [1.72434348E12, 145.38333333333344], [1.72434612E12, 142.86046511627922], [1.72434408E12, 132.33110367892988], [1.72434516E12, 135.31999999999982], [1.72434354E12, 144.71666666666667], [1.72434636E12, 145.35897435897434], [1.72434396E12, 155.24916943521603], [1.72434594E12, 148.3533333333334], [1.72434456E12, 145.2919463087248], [1.72434534E12, 151.09900990099004], [1.72434372E12, 147.29900332225904], [1.72434618E12, 140.88], [1.72434432E12, 144.14900662251654], [1.72434558E12, 154.32333333333335], [1.72434414E12, 139.4152823920267], [1.72434576E12, 142.9269102990032], [1.72434474E12, 143.22000000000008], [1.724346E12, 143.79000000000005], [1.7243442E12, 162.87707641196008], [1.7243448E12, 144.9003322259136], [1.72434462E12, 143.07308970099655], [1.72434522E12, 149.43288590604024], [1.7243436E12, 141.8538205980067], [1.72434438E12, 144.51505016722408], [1.72434336E12, 1062.9907407407406], [1.72434498E12, 140.13666666666654], [1.7243454E12, 151.92000000000007], [1.72434378E12, 143.2299999999999], [1.72434582E12, 149.49999999999997]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72434636E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 131.5685618729097, "minX": 1.72434336E12, "maxY": 892.8240740740741, "series": [{"data": [[1.72434486E12, 146.43000000000015], [1.72434546E12, 138.90333333333336], [1.72434384E12, 142.3177257525083], [1.72434606E12, 141.13712374581945], [1.72434366E12, 137.93645484949843], [1.72434624E12, 138.19666666666674], [1.72434426E12, 137.8833333333333], [1.72434564E12, 151.23999999999992], [1.72434342E12, 156.34228187919464], [1.72434402E12, 146.15771812080533], [1.72434588E12, 140.13621262458457], [1.72434444E12, 134.7466666666668], [1.72434504E12, 149.66889632107024], [1.7243439E12, 143.80267558528442], [1.7243457E12, 146.9333333333334], [1.7243445E12, 153.11000000000007], [1.72434492E12, 141.68227424749156], [1.7243463E12, 141.91946308724826], [1.72434552E12, 146.30897009966785], [1.72434468E12, 139.47176079734214], [1.72434528E12, 175.24915824915826], [1.7243451E12, 148.47840531561454], [1.72434348E12, 144.34666666666652], [1.72434612E12, 140.0797342192691], [1.72434408E12, 131.5685618729097], [1.72434516E12, 134.33666666666656], [1.72434354E12, 144.14999999999998], [1.72434636E12, 144.53846153846155], [1.72434396E12, 152.1063122923587], [1.72434594E12, 146.50333333333327], [1.72434456E12, 144.33557046979868], [1.72434534E12, 149.9504950495048], [1.72434372E12, 146.55813953488365], [1.72434618E12, 139.84333333333322], [1.72434432E12, 143.46357615894047], [1.72434558E12, 153.21], [1.72434414E12, 137.65448504983385], [1.72434576E12, 142.2126245847175], [1.72434474E12, 141.35333333333338], [1.724346E12, 141.77333333333334], [1.7243442E12, 162.08637873754137], [1.7243448E12, 144.1229235880398], [1.72434462E12, 142.23255813953492], [1.72434522E12, 148.66107382550317], [1.7243436E12, 139.4019933554817], [1.72434438E12, 143.93979933110364], [1.72434336E12, 892.8240740740741], [1.72434498E12, 139.50666666666675], [1.7243454E12, 149.5966666666667], [1.72434378E12, 142.20333333333338], [1.72434582E12, 148.84333333333336]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72434636E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 90.03666666666669, "minX": 1.72434336E12, "maxY": 776.4999999999998, "series": [{"data": [[1.72434486E12, 101.49666666666671], [1.72434546E12, 93.8366666666666], [1.72434384E12, 97.14046822742479], [1.72434606E12, 94.56856187290971], [1.72434366E12, 94.25752508361208], [1.72434624E12, 94.5900000000001], [1.72434426E12, 96.78000000000003], [1.72434564E12, 103.58], [1.72434342E12, 110.22818791946305], [1.72434402E12, 102.94295302013427], [1.72434588E12, 94.17607973421929], [1.72434444E12, 90.03666666666669], [1.72434504E12, 103.45484949832775], [1.7243439E12, 99.21739130434786], [1.7243457E12, 98.9133333333334], [1.7243445E12, 107.95666666666678], [1.72434492E12, 99.52842809364554], [1.7243463E12, 96.9026845637584], [1.72434552E12, 101.16611295681062], [1.72434468E12, 97.20930232558145], [1.72434528E12, 131.7845117845118], [1.7243451E12, 101.32225913621262], [1.72434348E12, 100.81666666666669], [1.72434612E12, 97.78737541528234], [1.72434408E12, 90.3879598662207], [1.72434516E12, 90.35333333333328], [1.72434354E12, 101.10333333333334], [1.72434636E12, 103.34871794871792], [1.72434396E12, 105.98338870431893], [1.72434594E12, 98.91000000000003], [1.72434456E12, 100.5402684563758], [1.72434534E12, 107.90759075907584], [1.72434372E12, 104.55149501661128], [1.72434618E12, 95.08999999999999], [1.72434432E12, 100.50662251655629], [1.72434558E12, 105.60666666666663], [1.72434414E12, 94.64119601328902], [1.72434576E12, 97.73421926910295], [1.72434474E12, 93.94333333333338], [1.724346E12, 95.99333333333333], [1.7243442E12, 114.95348837209298], [1.7243448E12, 99.11295681063126], [1.72434462E12, 98.27242524916949], [1.72434522E12, 103.13422818791939], [1.7243436E12, 98.37541528239207], [1.72434438E12, 98.51170568561871], [1.72434336E12, 776.4999999999998], [1.72434498E12, 93.19666666666674], [1.7243454E12, 103.42000000000002], [1.72434378E12, 96.1266666666667], [1.72434582E12, 104.85666666666665]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72434636E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 113.0, "minX": 1.72434336E12, "maxY": 7156.0, "series": [{"data": [[1.72434486E12, 1141.0], [1.72434546E12, 454.0], [1.72434384E12, 1144.0], [1.72434606E12, 441.0], [1.72434366E12, 1139.0], [1.72434624E12, 475.0], [1.72434426E12, 1143.0], [1.72434564E12, 1137.0], [1.72434342E12, 1147.0], [1.72434402E12, 1336.0], [1.72434588E12, 446.0], [1.72434444E12, 487.0], [1.72434504E12, 1135.0], [1.7243439E12, 1151.0], [1.7243457E12, 1140.0], [1.7243445E12, 1147.0], [1.72434492E12, 1421.0], [1.7243463E12, 1132.0], [1.72434552E12, 1138.0], [1.72434468E12, 1167.0], [1.72434528E12, 7156.0], [1.7243451E12, 1138.0], [1.72434348E12, 1405.0], [1.72434612E12, 1145.0], [1.72434408E12, 389.0], [1.72434516E12, 440.0], [1.72434354E12, 1136.0], [1.72434636E12, 1133.0], [1.72434396E12, 1146.0], [1.72434594E12, 1147.0], [1.72434456E12, 1150.0], [1.72434534E12, 1331.0], [1.72434372E12, 1151.0], [1.72434618E12, 532.0], [1.72434432E12, 1285.0], [1.72434558E12, 1142.0], [1.72434414E12, 1402.0], [1.72434576E12, 1139.0], [1.72434474E12, 777.0], [1.724346E12, 1148.0], [1.7243442E12, 1227.0], [1.7243448E12, 1199.0], [1.72434462E12, 1137.0], [1.72434522E12, 1146.0], [1.7243436E12, 1144.0], [1.72434438E12, 1140.0], [1.72434336E12, 6020.0], [1.72434498E12, 445.0], [1.7243454E12, 1141.0], [1.72434378E12, 1142.0], [1.72434582E12, 1145.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.72434486E12, 139.0], [1.72434546E12, 151.90000000000003], [1.72434384E12, 137.0], [1.72434606E12, 144.0], [1.72434366E12, 137.0], [1.72434624E12, 143.0], [1.72434426E12, 136.0], [1.72434564E12, 154.90000000000003], [1.72434342E12, 156.0], [1.72434402E12, 137.0], [1.72434588E12, 143.0], [1.72434444E12, 139.0], [1.72434504E12, 139.0], [1.7243439E12, 140.0], [1.7243457E12, 143.0], [1.7243445E12, 144.80000000000007], [1.72434492E12, 138.0], [1.7243463E12, 144.0], [1.72434552E12, 142.8], [1.72434468E12, 138.0], [1.72434528E12, 147.0], [1.7243451E12, 141.0], [1.72434348E12, 141.0], [1.72434612E12, 144.0], [1.72434408E12, 138.0], [1.72434516E12, 136.0], [1.72434354E12, 141.90000000000003], [1.72434636E12, 141.0], [1.72434396E12, 144.40000000000003], [1.72434594E12, 145.0], [1.72434456E12, 139.0], [1.72434534E12, 148.0], [1.72434372E12, 143.8], [1.72434618E12, 143.90000000000003], [1.72434432E12, 136.0], [1.72434558E12, 145.90000000000003], [1.72434414E12, 136.0], [1.72434576E12, 143.8], [1.72434474E12, 138.0], [1.724346E12, 143.0], [1.7243442E12, 155.60000000000002], [1.7243448E12, 139.0], [1.72434462E12, 138.0], [1.72434522E12, 149.10000000000002], [1.7243436E12, 138.0], [1.72434438E12, 139.0], [1.72434336E12, 4388.5], [1.72434498E12, 137.0], [1.7243454E12, 149.0], [1.72434378E12, 139.0], [1.72434582E12, 143.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.72434486E12, 446.99], [1.72434546E12, 347.6800000000003], [1.72434384E12, 775.0], [1.72434606E12, 422.0], [1.72434366E12, 423.0], [1.72434624E12, 401.94000000000005], [1.72434426E12, 1117.8700000000083], [1.72434564E12, 696.7800000000002], [1.72434342E12, 1143.01], [1.72434402E12, 1138.01], [1.72434588E12, 418.60000000000036], [1.72434444E12, 394.98], [1.72434504E12, 1133.0], [1.7243439E12, 898.0], [1.7243457E12, 438.0], [1.7243445E12, 1141.92], [1.72434492E12, 1130.0], [1.7243463E12, 417.16999999999985], [1.72434552E12, 546.9400000000019], [1.72434468E12, 1048.1200000000117], [1.72434528E12, 1137.02], [1.7243451E12, 1121.6400000000094], [1.72434348E12, 412.9100000000001], [1.72434612E12, 671.5000000000032], [1.72434408E12, 292.0], [1.72434516E12, 406.97], [1.72434354E12, 451.4700000000005], [1.72434636E12, 1116.6799999999998], [1.72434396E12, 1139.92], [1.72434594E12, 440.95000000000005], [1.72434456E12, 561.8399999999947], [1.72434534E12, 1144.7199999999998], [1.72434372E12, 1124.1200000000135], [1.72434618E12, 430.6900000000003], [1.72434432E12, 483.7699999999988], [1.72434558E12, 1133.0600000000054], [1.72434414E12, 399.98], [1.72434576E12, 417.62000000000035], [1.72434474E12, 471.6600000000003], [1.724346E12, 444.7600000000002], [1.7243442E12, 1148.7400000000002], [1.7243448E12, 1113.3600000000088], [1.72434462E12, 556.2600000000025], [1.72434522E12, 416.2599999999934], [1.7243436E12, 650.7600000000048], [1.72434438E12, 443.0], [1.72434336E12, 6016.849999999999], [1.72434498E12, 441.85000000000014], [1.7243454E12, 539.2200000000007], [1.72434378E12, 429.94000000000005], [1.72434582E12, 1116.7900000000066]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.72434486E12, 315.8499999999995], [1.72434546E12, 170.95], [1.72434384E12, 154.0], [1.72434606E12, 161.0], [1.72434366E12, 170.0], [1.72434624E12, 160.79999999999995], [1.72434426E12, 141.89999999999998], [1.72434564E12, 178.89999999999998], [1.72434342E12, 329.4000000000001], [1.72434402E12, 153.95000000000022], [1.72434588E12, 147.89999999999998], [1.72434444E12, 153.95], [1.72434504E12, 322.0], [1.7243439E12, 148.0], [1.7243457E12, 169.69999999999993], [1.7243445E12, 299.79999999999995], [1.72434492E12, 142.0], [1.7243463E12, 151.10000000000002], [1.72434552E12, 158.89999999999975], [1.72434468E12, 142.89999999999998], [1.72434528E12, 223.39999999999986], [1.7243451E12, 296.29999999999893], [1.72434348E12, 177.5499999999999], [1.72434612E12, 151.69999999999993], [1.72434408E12, 143.0], [1.72434516E12, 142.84999999999997], [1.72434354E12, 176.4999999999999], [1.72434636E12, 180.5999999999999], [1.72434396E12, 332.9999999999998], [1.72434594E12, 220.8499999999995], [1.72434456E12, 176.15000000000003], [1.72434534E12, 175.8], [1.72434372E12, 184.29999999999984], [1.72434618E12, 161.89999999999998], [1.72434432E12, 146.24999999999983], [1.72434558E12, 231.24999999999983], [1.72434414E12, 145.0], [1.72434576E12, 162.89999999999998], [1.72434474E12, 188.39999999999986], [1.724346E12, 153.95], [1.7243442E12, 341.4999999999999], [1.7243448E12, 169.6999999999997], [1.72434462E12, 154.29999999999984], [1.72434522E12, 264.0000000000002], [1.7243436E12, 148.79999999999995], [1.72434438E12, 188.0], [1.72434336E12, 5449.049999999999], [1.72434498E12, 245.04999999999956], [1.7243454E12, 198.84999999999997], [1.72434378E12, 218.94999999999953], [1.72434582E12, 175.84999999999997]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.72434486E12, 117.0], [1.72434546E12, 118.0], [1.72434384E12, 116.0], [1.72434606E12, 117.0], [1.72434366E12, 118.0], [1.72434624E12, 117.0], [1.72434426E12, 116.0], [1.72434564E12, 117.0], [1.72434342E12, 117.0], [1.72434402E12, 117.0], [1.72434588E12, 119.0], [1.72434444E12, 117.0], [1.72434504E12, 117.0], [1.7243439E12, 116.0], [1.7243457E12, 116.0], [1.7243445E12, 117.0], [1.72434492E12, 115.0], [1.7243463E12, 117.0], [1.72434552E12, 120.0], [1.72434468E12, 117.0], [1.72434528E12, 117.0], [1.7243451E12, 114.0], [1.72434348E12, 117.0], [1.72434612E12, 117.0], [1.72434408E12, 117.0], [1.72434516E12, 117.0], [1.72434354E12, 119.0], [1.72434636E12, 116.0], [1.72434396E12, 118.0], [1.72434594E12, 115.0], [1.72434456E12, 117.0], [1.72434534E12, 116.0], [1.72434372E12, 117.0], [1.72434618E12, 115.0], [1.72434432E12, 116.0], [1.72434558E12, 119.0], [1.72434414E12, 117.0], [1.72434576E12, 117.0], [1.72434474E12, 117.0], [1.724346E12, 117.0], [1.7243442E12, 118.0], [1.7243448E12, 116.0], [1.72434462E12, 117.0], [1.72434522E12, 117.0], [1.7243436E12, 118.0], [1.72434438E12, 113.0], [1.72434336E12, 123.0], [1.72434498E12, 116.0], [1.7243454E12, 115.0], [1.72434378E12, 118.0], [1.72434582E12, 117.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.72434486E12, 127.5], [1.72434546E12, 134.0], [1.72434384E12, 129.0], [1.72434606E12, 133.0], [1.72434366E12, 127.0], [1.72434624E12, 133.0], [1.72434426E12, 127.0], [1.72434564E12, 135.0], [1.72434342E12, 132.0], [1.72434402E12, 127.0], [1.72434588E12, 134.0], [1.72434444E12, 128.0], [1.72434504E12, 127.0], [1.7243439E12, 128.0], [1.7243457E12, 134.0], [1.7243445E12, 128.0], [1.72434492E12, 128.0], [1.7243463E12, 134.0], [1.72434552E12, 135.0], [1.72434468E12, 127.0], [1.72434528E12, 132.0], [1.7243451E12, 127.0], [1.72434348E12, 130.0], [1.72434612E12, 131.0], [1.72434408E12, 129.0], [1.72434516E12, 127.0], [1.72434354E12, 129.0], [1.72434636E12, 127.0], [1.72434396E12, 128.0], [1.72434594E12, 134.0], [1.72434456E12, 127.0], [1.72434534E12, 131.0], [1.72434372E12, 129.0], [1.72434618E12, 131.0], [1.72434432E12, 128.0], [1.72434558E12, 134.0], [1.72434414E12, 128.0], [1.72434576E12, 133.0], [1.72434474E12, 129.0], [1.724346E12, 135.0], [1.7243442E12, 129.0], [1.7243448E12, 128.0], [1.72434462E12, 127.0], [1.72434522E12, 131.0], [1.7243436E12, 128.0], [1.72434438E12, 128.0], [1.72434336E12, 149.5], [1.72434498E12, 127.0], [1.7243454E12, 135.0], [1.72434378E12, 128.5], [1.72434582E12, 134.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72434636E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 130.0, "minX": 1.0, "maxY": 3474.5, "series": [{"data": [[4.0, 130.0], [2.0, 146.5], [8.0, 139.0], [1.0, 133.0], [5.0, 130.0], [6.0, 131.0], [3.0, 130.0], [7.0, 134.5], [30.0, 3474.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 30.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 129.0, "minX": 1.0, "maxY": 2823.0, "series": [{"data": [[4.0, 130.0], [2.0, 146.0], [8.0, 139.0], [1.0, 133.0], [5.0, 129.0], [6.0, 130.0], [3.0, 129.0], [7.0, 133.0], [30.0, 2823.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 30.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.8, "minX": 1.72434336E12, "maxY": 5.05, "series": [{"data": [[1.72434486E12, 5.0], [1.72434546E12, 5.0], [1.72434384E12, 4.983333333333333], [1.72434606E12, 4.983333333333333], [1.72434366E12, 5.0], [1.72434624E12, 5.0], [1.72434426E12, 5.0], [1.72434564E12, 5.0], [1.72434342E12, 4.983333333333333], [1.72434402E12, 4.966666666666667], [1.72434588E12, 5.0], [1.72434444E12, 5.0], [1.72434504E12, 4.983333333333333], [1.7243439E12, 5.0], [1.7243457E12, 5.0], [1.7243445E12, 5.0], [1.72434492E12, 4.966666666666667], [1.7243463E12, 5.0], [1.72434552E12, 5.016666666666667], [1.72434468E12, 5.0], [1.72434528E12, 4.966666666666667], [1.7243451E12, 5.0], [1.72434348E12, 5.0], [1.72434612E12, 5.016666666666667], [1.72434408E12, 4.983333333333333], [1.72434516E12, 5.016666666666667], [1.72434354E12, 5.0], [1.72434636E12, 3.2], [1.72434396E12, 5.016666666666667], [1.72434594E12, 5.016666666666667], [1.72434456E12, 4.966666666666667], [1.72434534E12, 5.05], [1.72434372E12, 5.0], [1.72434618E12, 5.0], [1.72434432E12, 5.016666666666667], [1.72434558E12, 5.0], [1.72434414E12, 5.016666666666667], [1.72434576E12, 5.0], [1.72434474E12, 5.016666666666667], [1.724346E12, 5.0], [1.7243442E12, 5.016666666666667], [1.7243448E12, 5.016666666666667], [1.72434462E12, 5.016666666666667], [1.72434522E12, 4.95], [1.7243436E12, 5.0], [1.72434438E12, 5.0], [1.72434336E12, 1.8], [1.72434498E12, 5.016666666666667], [1.7243454E12, 5.0], [1.72434378E12, 5.0], [1.72434582E12, 5.016666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72434636E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.8, "minX": 1.72434336E12, "maxY": 5.05, "series": [{"data": [[1.72434486E12, 5.0], [1.72434546E12, 5.0], [1.72434384E12, 4.983333333333333], [1.72434606E12, 4.983333333333333], [1.72434366E12, 4.983333333333333], [1.72434624E12, 5.0], [1.72434426E12, 5.0], [1.72434564E12, 5.0], [1.72434342E12, 4.966666666666667], [1.72434402E12, 4.966666666666667], [1.72434588E12, 5.016666666666667], [1.72434444E12, 5.0], [1.72434504E12, 4.983333333333333], [1.7243439E12, 4.983333333333333], [1.7243457E12, 5.0], [1.7243445E12, 5.0], [1.72434492E12, 4.983333333333333], [1.7243463E12, 4.966666666666667], [1.72434552E12, 5.016666666666667], [1.72434468E12, 5.016666666666667], [1.72434528E12, 4.95], [1.7243451E12, 5.016666666666667], [1.72434348E12, 5.0], [1.72434612E12, 5.016666666666667], [1.72434408E12, 4.983333333333333], [1.72434516E12, 5.0], [1.72434354E12, 5.0], [1.72434636E12, 3.25], [1.72434396E12, 5.016666666666667], [1.72434594E12, 5.0], [1.72434456E12, 4.966666666666667], [1.72434534E12, 5.05], [1.72434372E12, 5.016666666666667], [1.72434618E12, 5.0], [1.72434432E12, 5.033333333333333], [1.72434558E12, 5.0], [1.72434414E12, 5.016666666666667], [1.72434576E12, 5.016666666666667], [1.72434474E12, 5.0], [1.724346E12, 5.0], [1.7243442E12, 5.016666666666667], [1.7243448E12, 5.016666666666667], [1.72434462E12, 5.016666666666667], [1.72434522E12, 4.966666666666667], [1.7243436E12, 5.016666666666667], [1.72434438E12, 4.983333333333333], [1.72434336E12, 1.8], [1.72434498E12, 5.0], [1.7243454E12, 5.0], [1.72434378E12, 5.0], [1.72434582E12, 5.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72434636E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.8, "minX": 1.72434336E12, "maxY": 5.05, "series": [{"data": [[1.72434486E12, 5.0], [1.72434546E12, 5.0], [1.72434384E12, 4.983333333333333], [1.72434606E12, 4.983333333333333], [1.72434366E12, 4.983333333333333], [1.72434624E12, 5.0], [1.72434426E12, 5.0], [1.72434564E12, 5.0], [1.72434342E12, 4.966666666666667], [1.72434402E12, 4.966666666666667], [1.72434588E12, 5.016666666666667], [1.72434444E12, 5.0], [1.72434504E12, 4.983333333333333], [1.7243439E12, 4.983333333333333], [1.7243457E12, 5.0], [1.7243445E12, 5.0], [1.72434492E12, 4.983333333333333], [1.7243463E12, 4.966666666666667], [1.72434552E12, 5.016666666666667], [1.72434468E12, 5.016666666666667], [1.72434528E12, 4.95], [1.7243451E12, 5.016666666666667], [1.72434348E12, 5.0], [1.72434612E12, 5.016666666666667], [1.72434408E12, 4.983333333333333], [1.72434516E12, 5.0], [1.72434354E12, 5.0], [1.72434636E12, 3.25], [1.72434396E12, 5.016666666666667], [1.72434594E12, 5.0], [1.72434456E12, 4.966666666666667], [1.72434534E12, 5.05], [1.72434372E12, 5.016666666666667], [1.72434618E12, 5.0], [1.72434432E12, 5.033333333333333], [1.72434558E12, 5.0], [1.72434414E12, 5.016666666666667], [1.72434576E12, 5.016666666666667], [1.72434474E12, 5.0], [1.724346E12, 5.0], [1.7243442E12, 5.016666666666667], [1.7243448E12, 5.016666666666667], [1.72434462E12, 5.016666666666667], [1.72434522E12, 4.966666666666667], [1.7243436E12, 5.016666666666667], [1.72434438E12, 4.983333333333333], [1.72434336E12, 1.8], [1.72434498E12, 5.0], [1.7243454E12, 5.0], [1.72434378E12, 5.0], [1.72434582E12, 5.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72434636E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.8, "minX": 1.72434336E12, "maxY": 5.05, "series": [{"data": [[1.72434486E12, 5.0], [1.72434546E12, 5.0], [1.72434384E12, 4.983333333333333], [1.72434606E12, 4.983333333333333], [1.72434366E12, 4.983333333333333], [1.72434624E12, 5.0], [1.72434426E12, 5.0], [1.72434564E12, 5.0], [1.72434342E12, 4.966666666666667], [1.72434402E12, 4.966666666666667], [1.72434588E12, 5.016666666666667], [1.72434444E12, 5.0], [1.72434504E12, 4.983333333333333], [1.7243439E12, 4.983333333333333], [1.7243457E12, 5.0], [1.7243445E12, 5.0], [1.72434492E12, 4.983333333333333], [1.7243463E12, 4.966666666666667], [1.72434552E12, 5.016666666666667], [1.72434468E12, 5.016666666666667], [1.72434528E12, 4.95], [1.7243451E12, 5.016666666666667], [1.72434348E12, 5.0], [1.72434612E12, 5.016666666666667], [1.72434408E12, 4.983333333333333], [1.72434516E12, 5.0], [1.72434354E12, 5.0], [1.72434636E12, 3.25], [1.72434396E12, 5.016666666666667], [1.72434594E12, 5.0], [1.72434456E12, 4.966666666666667], [1.72434534E12, 5.05], [1.72434372E12, 5.016666666666667], [1.72434618E12, 5.0], [1.72434432E12, 5.033333333333333], [1.72434558E12, 5.0], [1.72434414E12, 5.016666666666667], [1.72434576E12, 5.016666666666667], [1.72434474E12, 5.0], [1.724346E12, 5.0], [1.7243442E12, 5.016666666666667], [1.7243448E12, 5.016666666666667], [1.72434462E12, 5.016666666666667], [1.72434522E12, 4.966666666666667], [1.7243436E12, 5.016666666666667], [1.72434438E12, 4.983333333333333], [1.72434336E12, 1.8], [1.72434498E12, 5.0], [1.7243454E12, 5.0], [1.72434378E12, 5.0], [1.72434582E12, 5.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72434636E12, "title": "Total Transactions Per Second"}},
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

