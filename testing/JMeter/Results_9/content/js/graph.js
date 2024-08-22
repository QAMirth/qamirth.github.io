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
        data: {"result": {"minY": 121.0, "minX": 0.0, "maxY": 5123.0, "series": [{"data": [[0.0, 121.0], [0.1, 123.0], [0.2, 124.0], [0.3, 124.0], [0.4, 125.0], [0.5, 125.0], [0.6, 126.0], [0.7, 126.0], [0.8, 126.0], [0.9, 126.0], [1.0, 127.0], [1.1, 127.0], [1.2, 127.0], [1.3, 127.0], [1.4, 127.0], [1.5, 127.0], [1.6, 128.0], [1.7, 128.0], [1.8, 128.0], [1.9, 128.0], [2.0, 128.0], [2.1, 128.0], [2.2, 128.0], [2.3, 128.0], [2.4, 128.0], [2.5, 129.0], [2.6, 129.0], [2.7, 129.0], [2.8, 129.0], [2.9, 129.0], [3.0, 129.0], [3.1, 129.0], [3.2, 129.0], [3.3, 129.0], [3.4, 129.0], [3.5, 129.0], [3.6, 129.0], [3.7, 129.0], [3.8, 129.0], [3.9, 130.0], [4.0, 130.0], [4.1, 130.0], [4.2, 130.0], [4.3, 130.0], [4.4, 130.0], [4.5, 130.0], [4.6, 130.0], [4.7, 130.0], [4.8, 130.0], [4.9, 130.0], [5.0, 130.0], [5.1, 130.0], [5.2, 130.0], [5.3, 130.0], [5.4, 130.0], [5.5, 130.0], [5.6, 130.0], [5.7, 131.0], [5.8, 131.0], [5.9, 131.0], [6.0, 131.0], [6.1, 131.0], [6.2, 131.0], [6.3, 131.0], [6.4, 131.0], [6.5, 131.0], [6.6, 131.0], [6.7, 131.0], [6.8, 131.0], [6.9, 131.0], [7.0, 131.0], [7.1, 131.0], [7.2, 131.0], [7.3, 131.0], [7.4, 131.0], [7.5, 131.0], [7.6, 131.0], [7.7, 131.0], [7.8, 131.0], [7.9, 132.0], [8.0, 132.0], [8.1, 132.0], [8.2, 132.0], [8.3, 132.0], [8.4, 132.0], [8.5, 132.0], [8.6, 132.0], [8.7, 132.0], [8.8, 132.0], [8.9, 132.0], [9.0, 132.0], [9.1, 132.0], [9.2, 132.0], [9.3, 132.0], [9.4, 132.0], [9.5, 132.0], [9.6, 132.0], [9.7, 132.0], [9.8, 132.0], [9.9, 132.0], [10.0, 132.0], [10.1, 132.0], [10.2, 132.0], [10.3, 133.0], [10.4, 133.0], [10.5, 133.0], [10.6, 133.0], [10.7, 133.0], [10.8, 133.0], [10.9, 133.0], [11.0, 133.0], [11.1, 133.0], [11.2, 133.0], [11.3, 133.0], [11.4, 133.0], [11.5, 133.0], [11.6, 133.0], [11.7, 133.0], [11.8, 133.0], [11.9, 133.0], [12.0, 133.0], [12.1, 133.0], [12.2, 133.0], [12.3, 133.0], [12.4, 133.0], [12.5, 133.0], [12.6, 133.0], [12.7, 133.0], [12.8, 133.0], [12.9, 133.0], [13.0, 133.0], [13.1, 133.0], [13.2, 134.0], [13.3, 134.0], [13.4, 134.0], [13.5, 134.0], [13.6, 134.0], [13.7, 134.0], [13.8, 134.0], [13.9, 134.0], [14.0, 134.0], [14.1, 134.0], [14.2, 134.0], [14.3, 134.0], [14.4, 134.0], [14.5, 134.0], [14.6, 134.0], [14.7, 134.0], [14.8, 134.0], [14.9, 134.0], [15.0, 134.0], [15.1, 134.0], [15.2, 134.0], [15.3, 134.0], [15.4, 134.0], [15.5, 134.0], [15.6, 134.0], [15.7, 134.0], [15.8, 134.0], [15.9, 134.0], [16.0, 134.0], [16.1, 134.0], [16.2, 134.0], [16.3, 134.0], [16.4, 134.0], [16.5, 134.0], [16.6, 134.0], [16.7, 135.0], [16.8, 135.0], [16.9, 135.0], [17.0, 135.0], [17.1, 135.0], [17.2, 135.0], [17.3, 135.0], [17.4, 135.0], [17.5, 135.0], [17.6, 135.0], [17.7, 135.0], [17.8, 135.0], [17.9, 135.0], [18.0, 135.0], [18.1, 135.0], [18.2, 135.0], [18.3, 135.0], [18.4, 135.0], [18.5, 135.0], [18.6, 135.0], [18.7, 135.0], [18.8, 135.0], [18.9, 135.0], [19.0, 135.0], [19.1, 135.0], [19.2, 135.0], [19.3, 135.0], [19.4, 135.0], [19.5, 135.0], [19.6, 135.0], [19.7, 135.0], [19.8, 135.0], [19.9, 135.0], [20.0, 136.0], [20.1, 136.0], [20.2, 136.0], [20.3, 136.0], [20.4, 136.0], [20.5, 136.0], [20.6, 136.0], [20.7, 136.0], [20.8, 136.0], [20.9, 136.0], [21.0, 136.0], [21.1, 136.0], [21.2, 136.0], [21.3, 136.0], [21.4, 136.0], [21.5, 136.0], [21.6, 136.0], [21.7, 136.0], [21.8, 136.0], [21.9, 136.0], [22.0, 136.0], [22.1, 136.0], [22.2, 136.0], [22.3, 136.0], [22.4, 136.0], [22.5, 136.0], [22.6, 136.0], [22.7, 136.0], [22.8, 136.0], [22.9, 136.0], [23.0, 136.0], [23.1, 136.0], [23.2, 136.0], [23.3, 136.0], [23.4, 136.0], [23.5, 136.0], [23.6, 136.0], [23.7, 136.0], [23.8, 136.0], [23.9, 136.0], [24.0, 137.0], [24.1, 137.0], [24.2, 137.0], [24.3, 137.0], [24.4, 137.0], [24.5, 137.0], [24.6, 137.0], [24.7, 137.0], [24.8, 137.0], [24.9, 137.0], [25.0, 137.0], [25.1, 137.0], [25.2, 137.0], [25.3, 137.0], [25.4, 137.0], [25.5, 137.0], [25.6, 137.0], [25.7, 137.0], [25.8, 137.0], [25.9, 137.0], [26.0, 137.0], [26.1, 137.0], [26.2, 137.0], [26.3, 137.0], [26.4, 137.0], [26.5, 137.0], [26.6, 137.0], [26.7, 137.0], [26.8, 137.0], [26.9, 137.0], [27.0, 137.0], [27.1, 137.0], [27.2, 137.0], [27.3, 137.0], [27.4, 137.0], [27.5, 137.0], [27.6, 137.0], [27.7, 137.0], [27.8, 137.0], [27.9, 137.0], [28.0, 137.0], [28.1, 137.0], [28.2, 138.0], [28.3, 138.0], [28.4, 138.0], [28.5, 138.0], [28.6, 138.0], [28.7, 138.0], [28.8, 138.0], [28.9, 138.0], [29.0, 138.0], [29.1, 138.0], [29.2, 138.0], [29.3, 138.0], [29.4, 138.0], [29.5, 138.0], [29.6, 138.0], [29.7, 138.0], [29.8, 138.0], [29.9, 138.0], [30.0, 138.0], [30.1, 138.0], [30.2, 138.0], [30.3, 138.0], [30.4, 138.0], [30.5, 138.0], [30.6, 138.0], [30.7, 138.0], [30.8, 138.0], [30.9, 138.0], [31.0, 138.0], [31.1, 138.0], [31.2, 138.0], [31.3, 138.0], [31.4, 138.0], [31.5, 138.0], [31.6, 138.0], [31.7, 138.0], [31.8, 138.0], [31.9, 138.0], [32.0, 138.0], [32.1, 138.0], [32.2, 138.0], [32.3, 138.0], [32.4, 138.0], [32.5, 138.0], [32.6, 138.0], [32.7, 138.0], [32.8, 138.0], [32.9, 138.0], [33.0, 138.0], [33.1, 139.0], [33.2, 139.0], [33.3, 139.0], [33.4, 139.0], [33.5, 139.0], [33.6, 139.0], [33.7, 139.0], [33.8, 139.0], [33.9, 139.0], [34.0, 139.0], [34.1, 139.0], [34.2, 139.0], [34.3, 139.0], [34.4, 139.0], [34.5, 139.0], [34.6, 139.0], [34.7, 139.0], [34.8, 139.0], [34.9, 139.0], [35.0, 139.0], [35.1, 139.0], [35.2, 139.0], [35.3, 139.0], [35.4, 139.0], [35.5, 139.0], [35.6, 139.0], [35.7, 139.0], [35.8, 139.0], [35.9, 139.0], [36.0, 139.0], [36.1, 139.0], [36.2, 139.0], [36.3, 139.0], [36.4, 139.0], [36.5, 139.0], [36.6, 139.0], [36.7, 139.0], [36.8, 139.0], [36.9, 139.0], [37.0, 139.0], [37.1, 139.0], [37.2, 139.0], [37.3, 139.0], [37.4, 139.0], [37.5, 139.0], [37.6, 139.0], [37.7, 140.0], [37.8, 140.0], [37.9, 140.0], [38.0, 140.0], [38.1, 140.0], [38.2, 140.0], [38.3, 140.0], [38.4, 140.0], [38.5, 140.0], [38.6, 140.0], [38.7, 140.0], [38.8, 140.0], [38.9, 140.0], [39.0, 140.0], [39.1, 140.0], [39.2, 140.0], [39.3, 140.0], [39.4, 140.0], [39.5, 140.0], [39.6, 140.0], [39.7, 140.0], [39.8, 140.0], [39.9, 140.0], [40.0, 140.0], [40.1, 140.0], [40.2, 140.0], [40.3, 140.0], [40.4, 140.0], [40.5, 140.0], [40.6, 140.0], [40.7, 140.0], [40.8, 140.0], [40.9, 140.0], [41.0, 140.0], [41.1, 140.0], [41.2, 140.0], [41.3, 140.0], [41.4, 140.0], [41.5, 140.0], [41.6, 140.0], [41.7, 140.0], [41.8, 140.0], [41.9, 140.0], [42.0, 140.0], [42.1, 140.0], [42.2, 140.0], [42.3, 140.0], [42.4, 140.0], [42.5, 140.0], [42.6, 140.0], [42.7, 140.0], [42.8, 140.0], [42.9, 141.0], [43.0, 141.0], [43.1, 141.0], [43.2, 141.0], [43.3, 141.0], [43.4, 141.0], [43.5, 141.0], [43.6, 141.0], [43.7, 141.0], [43.8, 141.0], [43.9, 141.0], [44.0, 141.0], [44.1, 141.0], [44.2, 141.0], [44.3, 141.0], [44.4, 141.0], [44.5, 141.0], [44.6, 141.0], [44.7, 141.0], [44.8, 141.0], [44.9, 141.0], [45.0, 141.0], [45.1, 141.0], [45.2, 141.0], [45.3, 141.0], [45.4, 141.0], [45.5, 141.0], [45.6, 141.0], [45.7, 141.0], [45.8, 141.0], [45.9, 141.0], [46.0, 141.0], [46.1, 141.0], [46.2, 141.0], [46.3, 141.0], [46.4, 141.0], [46.5, 141.0], [46.6, 141.0], [46.7, 141.0], [46.8, 141.0], [46.9, 141.0], [47.0, 141.0], [47.1, 141.0], [47.2, 141.0], [47.3, 141.0], [47.4, 141.0], [47.5, 141.0], [47.6, 141.0], [47.7, 141.0], [47.8, 141.0], [47.9, 141.0], [48.0, 142.0], [48.1, 142.0], [48.2, 142.0], [48.3, 142.0], [48.4, 142.0], [48.5, 142.0], [48.6, 142.0], [48.7, 142.0], [48.8, 142.0], [48.9, 142.0], [49.0, 142.0], [49.1, 142.0], [49.2, 142.0], [49.3, 142.0], [49.4, 142.0], [49.5, 142.0], [49.6, 142.0], [49.7, 142.0], [49.8, 142.0], [49.9, 142.0], [50.0, 142.0], [50.1, 142.0], [50.2, 142.0], [50.3, 142.0], [50.4, 142.0], [50.5, 142.0], [50.6, 142.0], [50.7, 142.0], [50.8, 142.0], [50.9, 142.0], [51.0, 142.0], [51.1, 142.0], [51.2, 142.0], [51.3, 142.0], [51.4, 142.0], [51.5, 142.0], [51.6, 142.0], [51.7, 142.0], [51.8, 142.0], [51.9, 142.0], [52.0, 142.0], [52.1, 142.0], [52.2, 142.0], [52.3, 142.0], [52.4, 142.0], [52.5, 142.0], [52.6, 142.0], [52.7, 142.0], [52.8, 142.0], [52.9, 142.0], [53.0, 143.0], [53.1, 143.0], [53.2, 143.0], [53.3, 143.0], [53.4, 143.0], [53.5, 143.0], [53.6, 143.0], [53.7, 143.0], [53.8, 143.0], [53.9, 143.0], [54.0, 143.0], [54.1, 143.0], [54.2, 143.0], [54.3, 143.0], [54.4, 143.0], [54.5, 143.0], [54.6, 143.0], [54.7, 143.0], [54.8, 143.0], [54.9, 143.0], [55.0, 143.0], [55.1, 143.0], [55.2, 143.0], [55.3, 143.0], [55.4, 143.0], [55.5, 143.0], [55.6, 143.0], [55.7, 143.0], [55.8, 143.0], [55.9, 143.0], [56.0, 143.0], [56.1, 143.0], [56.2, 143.0], [56.3, 143.0], [56.4, 143.0], [56.5, 143.0], [56.6, 143.0], [56.7, 143.0], [56.8, 143.0], [56.9, 143.0], [57.0, 143.0], [57.1, 143.0], [57.2, 143.0], [57.3, 143.0], [57.4, 143.0], [57.5, 143.0], [57.6, 143.0], [57.7, 143.0], [57.8, 143.0], [57.9, 143.0], [58.0, 143.0], [58.1, 143.0], [58.2, 144.0], [58.3, 144.0], [58.4, 144.0], [58.5, 144.0], [58.6, 144.0], [58.7, 144.0], [58.8, 144.0], [58.9, 144.0], [59.0, 144.0], [59.1, 144.0], [59.2, 144.0], [59.3, 144.0], [59.4, 144.0], [59.5, 144.0], [59.6, 144.0], [59.7, 144.0], [59.8, 144.0], [59.9, 144.0], [60.0, 144.0], [60.1, 144.0], [60.2, 144.0], [60.3, 144.0], [60.4, 144.0], [60.5, 144.0], [60.6, 144.0], [60.7, 144.0], [60.8, 144.0], [60.9, 144.0], [61.0, 144.0], [61.1, 144.0], [61.2, 144.0], [61.3, 144.0], [61.4, 144.0], [61.5, 144.0], [61.6, 144.0], [61.7, 144.0], [61.8, 144.0], [61.9, 144.0], [62.0, 144.0], [62.1, 144.0], [62.2, 144.0], [62.3, 144.0], [62.4, 144.0], [62.5, 144.0], [62.6, 144.0], [62.7, 144.0], [62.8, 144.0], [62.9, 144.0], [63.0, 144.0], [63.1, 144.0], [63.2, 144.0], [63.3, 144.0], [63.4, 144.0], [63.5, 144.0], [63.6, 145.0], [63.7, 145.0], [63.8, 145.0], [63.9, 145.0], [64.0, 145.0], [64.1, 145.0], [64.2, 145.0], [64.3, 145.0], [64.4, 145.0], [64.5, 145.0], [64.6, 145.0], [64.7, 145.0], [64.8, 145.0], [64.9, 145.0], [65.0, 145.0], [65.1, 145.0], [65.2, 145.0], [65.3, 145.0], [65.4, 145.0], [65.5, 145.0], [65.6, 145.0], [65.7, 145.0], [65.8, 145.0], [65.9, 145.0], [66.0, 145.0], [66.1, 145.0], [66.2, 145.0], [66.3, 145.0], [66.4, 145.0], [66.5, 145.0], [66.6, 145.0], [66.7, 145.0], [66.8, 145.0], [66.9, 145.0], [67.0, 145.0], [67.1, 145.0], [67.2, 145.0], [67.3, 145.0], [67.4, 145.0], [67.5, 145.0], [67.6, 145.0], [67.7, 145.0], [67.8, 145.0], [67.9, 145.0], [68.0, 145.0], [68.1, 145.0], [68.2, 145.0], [68.3, 145.0], [68.4, 146.0], [68.5, 146.0], [68.6, 146.0], [68.7, 146.0], [68.8, 146.0], [68.9, 146.0], [69.0, 146.0], [69.1, 146.0], [69.2, 146.0], [69.3, 146.0], [69.4, 146.0], [69.5, 146.0], [69.6, 146.0], [69.7, 146.0], [69.8, 146.0], [69.9, 146.0], [70.0, 146.0], [70.1, 146.0], [70.2, 146.0], [70.3, 146.0], [70.4, 146.0], [70.5, 146.0], [70.6, 146.0], [70.7, 146.0], [70.8, 146.0], [70.9, 146.0], [71.0, 146.0], [71.1, 146.0], [71.2, 146.0], [71.3, 146.0], [71.4, 146.0], [71.5, 146.0], [71.6, 146.0], [71.7, 146.0], [71.8, 146.0], [71.9, 146.0], [72.0, 146.0], [72.1, 146.0], [72.2, 146.0], [72.3, 146.0], [72.4, 147.0], [72.5, 147.0], [72.6, 147.0], [72.7, 147.0], [72.8, 147.0], [72.9, 147.0], [73.0, 147.0], [73.1, 147.0], [73.2, 147.0], [73.3, 147.0], [73.4, 147.0], [73.5, 147.0], [73.6, 147.0], [73.7, 147.0], [73.8, 147.0], [73.9, 147.0], [74.0, 147.0], [74.1, 147.0], [74.2, 147.0], [74.3, 147.0], [74.4, 147.0], [74.5, 147.0], [74.6, 147.0], [74.7, 147.0], [74.8, 147.0], [74.9, 147.0], [75.0, 147.0], [75.1, 147.0], [75.2, 147.0], [75.3, 147.0], [75.4, 147.0], [75.5, 147.0], [75.6, 148.0], [75.7, 148.0], [75.8, 148.0], [75.9, 148.0], [76.0, 148.0], [76.1, 148.0], [76.2, 148.0], [76.3, 148.0], [76.4, 148.0], [76.5, 148.0], [76.6, 148.0], [76.7, 148.0], [76.8, 148.0], [76.9, 148.0], [77.0, 148.0], [77.1, 148.0], [77.2, 148.0], [77.3, 148.0], [77.4, 148.0], [77.5, 148.0], [77.6, 148.0], [77.7, 148.0], [77.8, 148.0], [77.9, 148.0], [78.0, 148.0], [78.1, 148.0], [78.2, 148.0], [78.3, 148.0], [78.4, 148.0], [78.5, 148.0], [78.6, 149.0], [78.7, 149.0], [78.8, 149.0], [78.9, 149.0], [79.0, 149.0], [79.1, 149.0], [79.2, 149.0], [79.3, 149.0], [79.4, 149.0], [79.5, 149.0], [79.6, 149.0], [79.7, 149.0], [79.8, 149.0], [79.9, 149.0], [80.0, 149.0], [80.1, 149.0], [80.2, 149.0], [80.3, 149.0], [80.4, 149.0], [80.5, 149.0], [80.6, 149.0], [80.7, 149.0], [80.8, 149.0], [80.9, 150.0], [81.0, 150.0], [81.1, 150.0], [81.2, 150.0], [81.3, 150.0], [81.4, 150.0], [81.5, 150.0], [81.6, 150.0], [81.7, 150.0], [81.8, 150.0], [81.9, 150.0], [82.0, 150.0], [82.1, 150.0], [82.2, 150.0], [82.3, 150.0], [82.4, 150.0], [82.5, 150.0], [82.6, 150.0], [82.7, 151.0], [82.8, 151.0], [82.9, 151.0], [83.0, 151.0], [83.1, 151.0], [83.2, 151.0], [83.3, 151.0], [83.4, 151.0], [83.5, 151.0], [83.6, 151.0], [83.7, 151.0], [83.8, 151.0], [83.9, 151.0], [84.0, 151.0], [84.1, 152.0], [84.2, 152.0], [84.3, 152.0], [84.4, 152.0], [84.5, 152.0], [84.6, 152.0], [84.7, 152.0], [84.8, 152.0], [84.9, 152.0], [85.0, 153.0], [85.1, 153.0], [85.2, 153.0], [85.3, 153.0], [85.4, 153.0], [85.5, 153.0], [85.6, 153.0], [85.7, 153.0], [85.8, 153.0], [85.9, 153.0], [86.0, 154.0], [86.1, 154.0], [86.2, 154.0], [86.3, 154.0], [86.4, 154.0], [86.5, 154.0], [86.6, 154.0], [86.7, 155.0], [86.8, 155.0], [86.9, 155.0], [87.0, 155.0], [87.1, 155.0], [87.2, 156.0], [87.3, 156.0], [87.4, 156.0], [87.5, 156.0], [87.6, 156.0], [87.7, 156.0], [87.8, 157.0], [87.9, 157.0], [88.0, 157.0], [88.1, 157.0], [88.2, 157.0], [88.3, 158.0], [88.4, 158.0], [88.5, 158.0], [88.6, 158.0], [88.7, 159.0], [88.8, 159.0], [88.9, 159.0], [89.0, 160.0], [89.1, 160.0], [89.2, 160.0], [89.3, 160.0], [89.4, 161.0], [89.5, 161.0], [89.6, 161.0], [89.7, 162.0], [89.8, 162.0], [89.9, 162.0], [90.0, 163.0], [90.1, 163.0], [90.2, 164.0], [90.3, 164.0], [90.4, 164.0], [90.5, 165.0], [90.6, 166.0], [90.7, 166.0], [90.8, 166.0], [90.9, 167.0], [91.0, 167.0], [91.1, 167.0], [91.2, 168.0], [91.3, 168.0], [91.4, 169.0], [91.5, 170.0], [91.6, 170.0], [91.7, 171.0], [91.8, 172.0], [91.9, 172.0], [92.0, 172.0], [92.1, 173.0], [92.2, 173.0], [92.3, 174.0], [92.4, 174.0], [92.5, 175.0], [92.6, 176.0], [92.7, 176.0], [92.8, 177.0], [92.9, 177.0], [93.0, 178.0], [93.1, 178.0], [93.2, 178.0], [93.3, 179.0], [93.4, 180.0], [93.5, 180.0], [93.6, 181.0], [93.7, 181.0], [93.8, 182.0], [93.9, 182.0], [94.0, 183.0], [94.1, 184.0], [94.2, 184.0], [94.3, 185.0], [94.4, 186.0], [94.5, 186.0], [94.6, 187.0], [94.7, 189.0], [94.8, 190.0], [94.9, 191.0], [95.0, 193.0], [95.1, 195.0], [95.2, 198.0], [95.3, 200.0], [95.4, 203.0], [95.5, 205.0], [95.6, 207.0], [95.7, 212.0], [95.8, 217.0], [95.9, 221.0], [96.0, 226.0], [96.1, 232.0], [96.2, 243.0], [96.3, 251.0], [96.4, 256.0], [96.5, 269.0], [96.6, 290.0], [96.7, 316.0], [96.8, 331.0], [96.9, 336.0], [97.0, 340.0], [97.1, 344.0], [97.2, 351.0], [97.3, 389.0], [97.4, 398.0], [97.5, 405.0], [97.6, 413.0], [97.7, 422.0], [97.8, 429.0], [97.9, 433.0], [98.0, 437.0], [98.1, 441.0], [98.2, 443.0], [98.3, 446.0], [98.4, 448.0], [98.5, 450.0], [98.6, 455.0], [98.7, 467.0], [98.8, 475.0], [98.9, 535.0], [99.0, 649.0], [99.1, 1127.0], [99.2, 1138.0], [99.3, 1143.0], [99.4, 1145.0], [99.5, 1150.0], [99.6, 1153.0], [99.7, 1160.0], [99.8, 1464.0], [99.9, 2916.0], [100.0, 5123.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 9526.0, "series": [{"data": [[600.0, 8.0], [700.0, 1.0], [800.0, 4.0], [1000.0, 2.0], [1100.0, 68.0], [1200.0, 1.0], [1300.0, 1.0], [1400.0, 2.0], [1500.0, 1.0], [100.0, 9526.0], [1800.0, 1.0], [1900.0, 3.0], [2000.0, 1.0], [2100.0, 1.0], [2400.0, 1.0], [2900.0, 2.0], [3100.0, 1.0], [200.0, 137.0], [3400.0, 1.0], [3600.0, 1.0], [3900.0, 1.0], [4300.0, 1.0], [4100.0, 3.0], [4700.0, 1.0], [300.0, 78.0], [5100.0, 1.0], [400.0, 145.0], [500.0, 7.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 20.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 9886.0, "series": [{"data": [[0.0, 9886.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 94.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 20.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.7243382E12, "maxY": 6.775862068965517, "series": [{"data": [[1.7243397E12, 1.0833333333333333], [1.72434E12, 1.053511705685618], [1.7243391E12, 1.1705685618729096], [1.7243394E12, 1.1766666666666665], [1.7243388E12, 1.0996677740863783], [1.7243385E12, 1.1705685618729103], [1.7243382E12, 6.775862068965517], [1.72433982E12, 1.1033333333333333], [1.72434012E12, 1.1096345514950166], [1.72433856E12, 1.1066666666666687], [1.72434018E12, 1.1066666666666667], [1.72433826E12, 1.1174496644295302], [1.72433958E12, 1.0966666666666667], [1.72433988E12, 1.0866666666666667], [1.72433898E12, 1.0766666666666669], [1.72433928E12, 1.06], [1.72433868E12, 1.1337792642140478], [1.72433838E12, 1.139534883720931], [1.72433904E12, 1.119601328903654], [1.72433874E12, 1.0505050505050504], [1.72433844E12, 1.0899999999999996], [1.72434006E12, 1.0533333333333328], [1.72433946E12, 1.0433333333333337], [1.72433976E12, 1.103333333333333], [1.72433916E12, 1.063333333333334], [1.72433886E12, 1.1029900332225901], [1.72433922E12, 1.059800664451827], [1.72433952E12, 1.11], [1.72433892E12, 1.0764119601328899], [1.72433862E12, 1.1262458471760797], [1.72433832E12, 1.1133333333333328], [1.72433994E12, 1.1166666666666674], [1.72434024E12, 1.0], [1.72433934E12, 1.1029900332225913], [1.72433964E12, 1.0533333333333332]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72434024E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 148.34339664068565, "minX": 1.0, "maxY": 4741.0, "series": [{"data": [[8.0, 1998.5], [2.0, 253.81659973226252], [9.0, 3452.0], [10.0, 256.0], [11.0, 243.0], [12.0, 219.0], [3.0, 395.3070175438595], [13.0, 1226.5], [14.0, 2911.0], [15.0, 231.0], [16.0, 4741.0], [4.0, 981.5], [1.0, 148.34339664068565], [17.0, 2412.0], [18.0, 2916.0], [19.0, 4060.0], [20.0, 3161.0], [5.0, 1520.0], [21.0, 3135.0], [22.0, 3182.5], [23.0, 1893.0], [6.0, 1940.0], [7.0, 269.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.1317999999999977, 164.5183999999997]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 23.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 90.3, "minX": 1.7243382E12, "maxY": 123003.56666666667, "series": [{"data": [[1.7243397E12, 122589.56666666667], [1.72434E12, 122185.58333333333], [1.7243391E12, 122180.86666666667], [1.7243394E12, 122593.96666666666], [1.7243388E12, 123002.98333333334], [1.7243385E12, 122180.93333333333], [1.7243382E12, 23701.633333333335], [1.72433982E12, 122593.05], [1.72434012E12, 123003.56666666667], [1.72433856E12, 122591.88333333333], [1.72434018E12, 122590.6], [1.72433826E12, 121777.28333333334], [1.72433958E12, 122590.51666666666], [1.72433988E12, 122593.55], [1.72433898E12, 122590.46666666666], [1.72433928E12, 122593.56666666667], [1.72433868E12, 122184.96666666666], [1.72433838E12, 122999.0], [1.72433904E12, 122993.8], [1.72433874E12, 121368.1], [1.72433844E12, 122585.11666666667], [1.72434006E12, 122594.61666666667], [1.72433946E12, 122594.6], [1.72433976E12, 122591.78333333334], [1.72433916E12, 122592.08333333333], [1.72433886E12, 123003.25], [1.72433922E12, 123001.78333333334], [1.72433952E12, 122594.8], [1.72433892E12, 123003.4], [1.72433862E12, 123001.48333333334], [1.72433832E12, 122594.66666666667], [1.72433994E12, 122594.06666666667], [1.72434024E12, 17161.9], [1.72433934E12, 123002.8], [1.72433964E12, 122585.08333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7243397E12, 645.0], [1.72434E12, 642.85], [1.7243391E12, 642.85], [1.7243394E12, 645.0], [1.7243388E12, 647.15], [1.7243385E12, 642.85], [1.7243382E12, 124.7], [1.72433982E12, 645.0], [1.72434012E12, 647.15], [1.72433856E12, 645.0], [1.72434018E12, 645.0], [1.72433826E12, 640.7], [1.72433958E12, 645.0], [1.72433988E12, 645.0], [1.72433898E12, 645.0], [1.72433928E12, 645.0], [1.72433868E12, 642.85], [1.72433838E12, 647.15], [1.72433904E12, 647.15], [1.72433874E12, 638.55], [1.72433844E12, 645.0], [1.72434006E12, 645.0], [1.72433946E12, 645.0], [1.72433976E12, 645.0], [1.72433916E12, 645.0], [1.72433886E12, 647.15], [1.72433922E12, 647.15], [1.72433952E12, 645.0], [1.72433892E12, 647.15], [1.72433862E12, 647.15], [1.72433832E12, 645.0], [1.72433994E12, 645.0], [1.72434024E12, 90.3], [1.72433934E12, 647.15], [1.72433964E12, 645.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72434024E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 143.59523809523807, "minX": 1.7243382E12, "maxY": 1231.6896551724146, "series": [{"data": [[1.7243397E12, 156.1233333333333], [1.72434E12, 151.40133779264212], [1.7243391E12, 168.08361204013374], [1.7243394E12, 174.59666666666666], [1.7243388E12, 156.0797342192692], [1.7243385E12, 171.33444816053506], [1.7243382E12, 1231.6896551724146], [1.72433982E12, 158.11999999999995], [1.72434012E12, 160.5913621262459], [1.72433856E12, 161.3933333333333], [1.72434018E12, 158.27000000000004], [1.72433826E12, 163.2382550335571], [1.72433958E12, 157.17333333333332], [1.72433988E12, 155.15333333333342], [1.72433898E12, 154.87333333333333], [1.72433928E12, 151.72000000000006], [1.72433868E12, 159.26086956521738], [1.72433838E12, 167.89036544850507], [1.72433904E12, 158.4651162790698], [1.72433874E12, 148.4276094276095], [1.72433844E12, 156.73999999999995], [1.72434006E12, 151.32], [1.72433946E12, 148.99666666666664], [1.72433976E12, 161.32666666666654], [1.72433916E12, 148.76666666666665], [1.72433886E12, 158.65116279069773], [1.72433922E12, 150.25581395348837], [1.72433952E12, 161.6533333333333], [1.72433892E12, 152.72093023255803], [1.72433862E12, 165.51162790697677], [1.72433832E12, 165.25666666666666], [1.72433994E12, 163.67666666666676], [1.72434024E12, 143.59523809523807], [1.72433934E12, 158.7009966777409], [1.72433964E12, 149.91999999999996]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72434024E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 134.64285714285714, "minX": 1.7243382E12, "maxY": 1198.6551724137928, "series": [{"data": [[1.7243397E12, 145.74666666666658], [1.72434E12, 142.9297658862876], [1.7243391E12, 158.85618729096996], [1.7243394E12, 164.0733333333333], [1.7243388E12, 142.66112956810625], [1.7243385E12, 159.69565217391303], [1.7243382E12, 1198.6551724137928], [1.72433982E12, 149.1966666666667], [1.72434012E12, 150.6212624584718], [1.72433856E12, 150.58333333333312], [1.72434018E12, 149.13999999999993], [1.72433826E12, 153.52013422818806], [1.72433958E12, 147.9566666666665], [1.72433988E12, 145.4166666666667], [1.72433898E12, 145.58333333333343], [1.72433928E12, 141.83999999999997], [1.72433868E12, 147.6655518394649], [1.72433838E12, 158.5647840531561], [1.72433904E12, 149.33222591362141], [1.72433874E12, 138.946127946128], [1.72433844E12, 146.34000000000017], [1.72434006E12, 141.72666666666666], [1.72433946E12, 137.03333333333333], [1.72433976E12, 150.96333333333334], [1.72433916E12, 138.76000000000002], [1.72433886E12, 149.59468438538207], [1.72433922E12, 141.5514950166113], [1.72433952E12, 151.17666666666656], [1.72433892E12, 141.0232558139534], [1.72433862E12, 154.57807308970095], [1.72433832E12, 155.92333333333355], [1.72433994E12, 154.24333333333337], [1.72434024E12, 134.64285714285714], [1.72433934E12, 149.79401993355492], [1.72433964E12, 141.78666666666663]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72434024E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 90.95238095238098, "minX": 1.7243382E12, "maxY": 1043.568965517242, "series": [{"data": [[1.7243397E12, 100.78333333333333], [1.72434E12, 94.91638795986616], [1.7243391E12, 115.07357859531771], [1.7243394E12, 116.9933333333333], [1.7243388E12, 99.89036544850497], [1.7243385E12, 109.59866220735788], [1.7243382E12, 1043.568965517242], [1.72433982E12, 102.81666666666662], [1.72434012E12, 106.20598006644522], [1.72433856E12, 106.20666666666665], [1.72434018E12, 101.97666666666667], [1.72433826E12, 105.22147651006716], [1.72433958E12, 100.64666666666663], [1.72433988E12, 98.16666666666659], [1.72433898E12, 97.44333333333333], [1.72433928E12, 97.21000000000001], [1.72433868E12, 97.94983277591976], [1.72433838E12, 113.12292358803985], [1.72433904E12, 103.42524916943526], [1.72433874E12, 94.76094276094274], [1.72433844E12, 100.3966666666667], [1.72434006E12, 96.11999999999998], [1.72433946E12, 93.72333333333331], [1.72433976E12, 104.71333333333334], [1.72433916E12, 94.56333333333336], [1.72433886E12, 105.0365448504983], [1.72433922E12, 98.90365448504977], [1.72433952E12, 102.79999999999994], [1.72433892E12, 97.36544850498339], [1.72433862E12, 107.69767441860463], [1.72433832E12, 110.66999999999993], [1.72433994E12, 107.38000000000002], [1.72434024E12, 90.95238095238098], [1.72433934E12, 104.10963455149505], [1.72433964E12, 96.06]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72434024E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 121.0, "minX": 1.7243382E12, "maxY": 5123.0, "series": [{"data": [[1.7243397E12, 1169.0], [1.72434E12, 452.0], [1.7243391E12, 1151.0], [1.7243394E12, 1157.0], [1.7243388E12, 1147.0], [1.7243385E12, 1150.0], [1.7243382E12, 5123.0], [1.72433982E12, 1160.0], [1.72434012E12, 1159.0], [1.72433856E12, 1150.0], [1.72434018E12, 1464.0], [1.72433826E12, 1163.0], [1.72433958E12, 1142.0], [1.72433988E12, 1159.0], [1.72433898E12, 1165.0], [1.72433928E12, 444.0], [1.72433868E12, 1147.0], [1.72433838E12, 1150.0], [1.72433904E12, 1143.0], [1.72433874E12, 1138.0], [1.72433844E12, 1144.0], [1.72434006E12, 548.0], [1.72433946E12, 1005.0], [1.72433976E12, 1151.0], [1.72433916E12, 1337.0], [1.72433886E12, 1178.0], [1.72433922E12, 1150.0], [1.72433952E12, 1184.0], [1.72433892E12, 1153.0], [1.72433862E12, 1287.0], [1.72433832E12, 1160.0], [1.72433994E12, 1157.0], [1.72434024E12, 170.0], [1.72433934E12, 1159.0], [1.72433964E12, 1147.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7243397E12, 156.90000000000003], [1.72434E12, 150.0], [1.7243391E12, 156.0], [1.7243394E12, 186.90000000000003], [1.7243388E12, 154.8], [1.7243385E12, 179.0], [1.7243382E12, 4139.2], [1.72433982E12, 163.0], [1.72434012E12, 168.8], [1.72433856E12, 171.90000000000003], [1.72434018E12, 166.90000000000003], [1.72433826E12, 174.0], [1.72433958E12, 157.0], [1.72433988E12, 166.90000000000003], [1.72433898E12, 155.80000000000007], [1.72433928E12, 161.0], [1.72433868E12, 179.0], [1.72433838E12, 161.0], [1.72433904E12, 153.8], [1.72433874E12, 151.0], [1.72433844E12, 157.0], [1.72434006E12, 157.0], [1.72433946E12, 157.90000000000003], [1.72433976E12, 158.90000000000003], [1.72433916E12, 148.90000000000003], [1.72433886E12, 152.8], [1.72433922E12, 153.8], [1.72433952E12, 169.7000000000001], [1.72433892E12, 172.0], [1.72433862E12, 177.8], [1.72433832E12, 163.0], [1.72433994E12, 164.80000000000007], [1.72434024E12, 151.4], [1.72433934E12, 155.0], [1.72433964E12, 155.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7243397E12, 459.9200000000001], [1.72434E12, 442.0], [1.7243391E12, 1142.0], [1.7243394E12, 1143.94], [1.7243388E12, 1124.720000000012], [1.7243385E12, 1136.0], [1.7243382E12, 5123.0], [1.72433982E12, 446.94000000000005], [1.72434012E12, 1133.4400000000105], [1.72433856E12, 1135.400000000006], [1.72434018E12, 610.5000000000014], [1.72433826E12, 648.9999999999955], [1.72433958E12, 452.97], [1.72433988E12, 492.51000000000045], [1.72433898E12, 697.3900000000024], [1.72433928E12, 441.99], [1.72433868E12, 474.0], [1.72433838E12, 1143.96], [1.72433904E12, 1137.0], [1.72433874E12, 439.01999999999634], [1.72433844E12, 492.5700000000004], [1.72434006E12, 449.99], [1.72433946E12, 427.8200000000011], [1.72433976E12, 640.1800000000017], [1.72433916E12, 427.97], [1.72433886E12, 1148.0], [1.72433922E12, 444.9400000000019], [1.72433952E12, 841.2800000000034], [1.72433892E12, 443.98], [1.72433862E12, 1118.860000000012], [1.72433832E12, 1128.9500000000055], [1.72433994E12, 1138.0600000000045], [1.72434024E12, 170.0], [1.72433934E12, 1138.780000000013], [1.72433964E12, 419.96000000000004]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7243397E12, 187.0], [1.72434E12, 175.0], [1.7243391E12, 340.0], [1.7243394E12, 342.95], [1.7243388E12, 183.89999999999998], [1.7243385E12, 333.0], [1.7243382E12, 4409.449999999999], [1.72433982E12, 202.29999999999984], [1.72434012E12, 215.4999999999992], [1.72433856E12, 197.5999999999999], [1.72434018E12, 200.24999999999983], [1.72433826E12, 200.80000000000018], [1.72433958E12, 247.5499999999999], [1.72433988E12, 181.95], [1.72433898E12, 181.89999999999998], [1.72433928E12, 187.89999999999998], [1.72433868E12, 209.0], [1.72433838E12, 239.19999999999914], [1.72433904E12, 190.89999999999998], [1.72433874E12, 175.2999999999999], [1.72433844E12, 180.95], [1.72434006E12, 176.89999999999998], [1.72433946E12, 171.79999999999995], [1.72433976E12, 200.84999999999997], [1.72433916E12, 180.0], [1.72433886E12, 175.79999999999995], [1.72433922E12, 169.69999999999993], [1.72433952E12, 205.89999999999998], [1.72433892E12, 183.0], [1.72433862E12, 247.29999999999984], [1.72433832E12, 188.95], [1.72433994E12, 199.74999999999994], [1.72434024E12, 166.90000000000003], [1.72433934E12, 182.69999999999993], [1.72433964E12, 170.95]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.7243397E12, 127.0], [1.72434E12, 129.0], [1.7243391E12, 123.0], [1.7243394E12, 124.0], [1.7243388E12, 126.0], [1.7243385E12, 128.0], [1.7243382E12, 140.0], [1.72433982E12, 123.0], [1.72434012E12, 123.0], [1.72433856E12, 122.0], [1.72434018E12, 124.0], [1.72433826E12, 127.0], [1.72433958E12, 123.0], [1.72433988E12, 123.0], [1.72433898E12, 124.0], [1.72433928E12, 123.0], [1.72433868E12, 124.0], [1.72433838E12, 130.0], [1.72433904E12, 124.0], [1.72433874E12, 121.0], [1.72433844E12, 126.0], [1.72434006E12, 124.0], [1.72433946E12, 125.0], [1.72433976E12, 128.0], [1.72433916E12, 124.0], [1.72433886E12, 125.0], [1.72433922E12, 124.0], [1.72433952E12, 126.0], [1.72433892E12, 124.0], [1.72433862E12, 124.0], [1.72433832E12, 124.0], [1.72433994E12, 124.0], [1.72434024E12, 133.0], [1.72433934E12, 127.0], [1.72433964E12, 123.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7243397E12, 142.5], [1.72434E12, 143.0], [1.7243391E12, 137.0], [1.7243394E12, 144.0], [1.7243388E12, 139.0], [1.7243385E12, 143.0], [1.7243382E12, 203.0], [1.72433982E12, 143.0], [1.72434012E12, 141.0], [1.72433856E12, 142.0], [1.72434018E12, 142.0], [1.72433826E12, 145.0], [1.72433958E12, 142.0], [1.72433988E12, 142.0], [1.72433898E12, 141.0], [1.72433928E12, 144.0], [1.72433868E12, 143.0], [1.72433838E12, 144.0], [1.72433904E12, 137.0], [1.72433874E12, 139.0], [1.72433844E12, 144.0], [1.72434006E12, 142.0], [1.72433946E12, 142.0], [1.72433976E12, 143.0], [1.72433916E12, 136.0], [1.72433886E12, 140.0], [1.72433922E12, 140.0], [1.72433952E12, 143.0], [1.72433892E12, 140.0], [1.72433862E12, 143.0], [1.72433832E12, 145.0], [1.72433994E12, 143.0], [1.72434024E12, 142.0], [1.72433934E12, 142.0], [1.72433964E12, 141.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72434024E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 138.0, "minX": 2.0, "maxY": 2103.0, "series": [{"data": [[4.0, 141.0], [2.0, 138.0], [8.0, 142.0], [5.0, 142.0], [6.0, 143.0], [3.0, 145.0], [28.0, 2103.0], [7.0, 148.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 129.5, "minX": 2.0, "maxY": 2097.0, "series": [{"data": [[4.0, 133.0], [2.0, 129.5], [8.0, 133.5], [5.0, 134.0], [6.0, 134.0], [3.0, 136.0], [28.0, 2097.0], [7.0, 138.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.6833333333333333, "minX": 1.7243382E12, "maxY": 5.016666666666667, "series": [{"data": [[1.7243397E12, 5.016666666666667], [1.72434E12, 5.0], [1.7243391E12, 5.0], [1.7243394E12, 5.0], [1.7243388E12, 5.016666666666667], [1.7243385E12, 4.983333333333333], [1.7243382E12, 0.9833333333333333], [1.72433982E12, 5.0], [1.72434012E12, 4.983333333333333], [1.72433856E12, 5.016666666666667], [1.72434018E12, 5.016666666666667], [1.72433826E12, 4.95], [1.72433958E12, 5.0], [1.72433988E12, 5.0], [1.72433898E12, 5.0], [1.72433928E12, 5.016666666666667], [1.72433868E12, 5.016666666666667], [1.72433838E12, 5.0], [1.72433904E12, 5.0], [1.72433874E12, 4.933333333333334], [1.72433844E12, 5.0], [1.72434006E12, 5.0], [1.72433946E12, 5.0], [1.72433976E12, 5.0], [1.72433916E12, 5.0], [1.72433886E12, 5.016666666666667], [1.72433922E12, 5.0], [1.72433952E12, 5.0], [1.72433892E12, 5.016666666666667], [1.72433862E12, 5.0], [1.72433832E12, 5.016666666666667], [1.72433994E12, 5.0], [1.72434024E12, 0.6833333333333333], [1.72433934E12, 5.016666666666667], [1.72433964E12, 4.983333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72434024E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.7, "minX": 1.7243382E12, "maxY": 5.016666666666667, "series": [{"data": [[1.7243397E12, 5.0], [1.72434E12, 4.983333333333333], [1.7243391E12, 4.983333333333333], [1.7243394E12, 5.0], [1.7243388E12, 5.016666666666667], [1.7243385E12, 4.983333333333333], [1.7243382E12, 0.9666666666666667], [1.72433982E12, 5.0], [1.72434012E12, 5.016666666666667], [1.72433856E12, 5.0], [1.72434018E12, 5.0], [1.72433826E12, 4.966666666666667], [1.72433958E12, 5.0], [1.72433988E12, 5.0], [1.72433898E12, 5.0], [1.72433928E12, 5.0], [1.72433868E12, 4.983333333333333], [1.72433838E12, 5.016666666666667], [1.72433904E12, 5.016666666666667], [1.72433874E12, 4.95], [1.72433844E12, 5.0], [1.72434006E12, 5.0], [1.72433946E12, 5.0], [1.72433976E12, 5.0], [1.72433916E12, 5.0], [1.72433886E12, 5.016666666666667], [1.72433922E12, 5.016666666666667], [1.72433952E12, 5.0], [1.72433892E12, 5.016666666666667], [1.72433862E12, 5.016666666666667], [1.72433832E12, 5.0], [1.72433994E12, 5.0], [1.72434024E12, 0.7], [1.72433934E12, 5.016666666666667], [1.72433964E12, 5.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72434024E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.7, "minX": 1.7243382E12, "maxY": 5.016666666666667, "series": [{"data": [[1.7243397E12, 5.0], [1.72434E12, 4.983333333333333], [1.7243391E12, 4.983333333333333], [1.7243394E12, 5.0], [1.7243388E12, 5.016666666666667], [1.7243385E12, 4.983333333333333], [1.7243382E12, 0.9666666666666667], [1.72433982E12, 5.0], [1.72434012E12, 5.016666666666667], [1.72433856E12, 5.0], [1.72434018E12, 5.0], [1.72433826E12, 4.966666666666667], [1.72433958E12, 5.0], [1.72433988E12, 5.0], [1.72433898E12, 5.0], [1.72433928E12, 5.0], [1.72433868E12, 4.983333333333333], [1.72433838E12, 5.016666666666667], [1.72433904E12, 5.016666666666667], [1.72433874E12, 4.95], [1.72433844E12, 5.0], [1.72434006E12, 5.0], [1.72433946E12, 5.0], [1.72433976E12, 5.0], [1.72433916E12, 5.0], [1.72433886E12, 5.016666666666667], [1.72433922E12, 5.016666666666667], [1.72433952E12, 5.0], [1.72433892E12, 5.016666666666667], [1.72433862E12, 5.016666666666667], [1.72433832E12, 5.0], [1.72433994E12, 5.0], [1.72434024E12, 0.7], [1.72433934E12, 5.016666666666667], [1.72433964E12, 5.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72434024E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.7, "minX": 1.7243382E12, "maxY": 5.016666666666667, "series": [{"data": [[1.7243397E12, 5.0], [1.72434E12, 4.983333333333333], [1.7243391E12, 4.983333333333333], [1.7243394E12, 5.0], [1.7243388E12, 5.016666666666667], [1.7243385E12, 4.983333333333333], [1.7243382E12, 0.9666666666666667], [1.72433982E12, 5.0], [1.72434012E12, 5.016666666666667], [1.72433856E12, 5.0], [1.72434018E12, 5.0], [1.72433826E12, 4.966666666666667], [1.72433958E12, 5.0], [1.72433988E12, 5.0], [1.72433898E12, 5.0], [1.72433928E12, 5.0], [1.72433868E12, 4.983333333333333], [1.72433838E12, 5.016666666666667], [1.72433904E12, 5.016666666666667], [1.72433874E12, 4.95], [1.72433844E12, 5.0], [1.72434006E12, 5.0], [1.72433946E12, 5.0], [1.72433976E12, 5.0], [1.72433916E12, 5.0], [1.72433886E12, 5.016666666666667], [1.72433922E12, 5.016666666666667], [1.72433952E12, 5.0], [1.72433892E12, 5.016666666666667], [1.72433862E12, 5.016666666666667], [1.72433832E12, 5.0], [1.72433994E12, 5.0], [1.72434024E12, 0.7], [1.72433934E12, 5.016666666666667], [1.72433964E12, 5.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72434024E12, "title": "Total Transactions Per Second"}},
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

