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
        data: {"result": {"minY": 116.0, "minX": 0.0, "maxY": 3335.0, "series": [{"data": [[0.0, 116.0], [0.1, 121.0], [0.2, 121.0], [0.3, 122.0], [0.4, 122.0], [0.5, 122.0], [0.6, 123.0], [0.7, 123.0], [0.8, 123.0], [0.9, 123.0], [1.0, 123.0], [1.1, 123.0], [1.2, 124.0], [1.3, 124.0], [1.4, 124.0], [1.5, 124.0], [1.6, 124.0], [1.7, 124.0], [1.8, 124.0], [1.9, 124.0], [2.0, 125.0], [2.1, 125.0], [2.2, 125.0], [2.3, 125.0], [2.4, 125.0], [2.5, 125.0], [2.6, 125.0], [2.7, 125.0], [2.8, 125.0], [2.9, 125.0], [3.0, 125.0], [3.1, 126.0], [3.2, 126.0], [3.3, 126.0], [3.4, 126.0], [3.5, 126.0], [3.6, 126.0], [3.7, 126.0], [3.8, 126.0], [3.9, 126.0], [4.0, 126.0], [4.1, 126.0], [4.2, 126.0], [4.3, 126.0], [4.4, 127.0], [4.5, 127.0], [4.6, 127.0], [4.7, 127.0], [4.8, 127.0], [4.9, 127.0], [5.0, 127.0], [5.1, 127.0], [5.2, 127.0], [5.3, 127.0], [5.4, 127.0], [5.5, 127.0], [5.6, 127.0], [5.7, 127.0], [5.8, 127.0], [5.9, 127.0], [6.0, 128.0], [6.1, 128.0], [6.2, 128.0], [6.3, 128.0], [6.4, 128.0], [6.5, 128.0], [6.6, 128.0], [6.7, 128.0], [6.8, 128.0], [6.9, 128.0], [7.0, 128.0], [7.1, 128.0], [7.2, 128.0], [7.3, 128.0], [7.4, 128.0], [7.5, 128.0], [7.6, 128.0], [7.7, 128.0], [7.8, 128.0], [7.9, 128.0], [8.0, 129.0], [8.1, 129.0], [8.2, 129.0], [8.3, 129.0], [8.4, 129.0], [8.5, 129.0], [8.6, 129.0], [8.7, 129.0], [8.8, 129.0], [8.9, 129.0], [9.0, 129.0], [9.1, 129.0], [9.2, 129.0], [9.3, 129.0], [9.4, 129.0], [9.5, 129.0], [9.6, 129.0], [9.7, 129.0], [9.8, 129.0], [9.9, 129.0], [10.0, 129.0], [10.1, 129.0], [10.2, 129.0], [10.3, 130.0], [10.4, 130.0], [10.5, 130.0], [10.6, 130.0], [10.7, 130.0], [10.8, 130.0], [10.9, 130.0], [11.0, 130.0], [11.1, 130.0], [11.2, 130.0], [11.3, 130.0], [11.4, 130.0], [11.5, 130.0], [11.6, 130.0], [11.7, 130.0], [11.8, 130.0], [11.9, 130.0], [12.0, 130.0], [12.1, 130.0], [12.2, 130.0], [12.3, 130.0], [12.4, 130.0], [12.5, 130.0], [12.6, 130.0], [12.7, 130.0], [12.8, 130.0], [12.9, 130.0], [13.0, 131.0], [13.1, 131.0], [13.2, 131.0], [13.3, 131.0], [13.4, 131.0], [13.5, 131.0], [13.6, 131.0], [13.7, 131.0], [13.8, 131.0], [13.9, 131.0], [14.0, 131.0], [14.1, 131.0], [14.2, 131.0], [14.3, 131.0], [14.4, 131.0], [14.5, 131.0], [14.6, 131.0], [14.7, 131.0], [14.8, 131.0], [14.9, 131.0], [15.0, 131.0], [15.1, 131.0], [15.2, 131.0], [15.3, 131.0], [15.4, 131.0], [15.5, 132.0], [15.6, 132.0], [15.7, 132.0], [15.8, 132.0], [15.9, 132.0], [16.0, 132.0], [16.1, 132.0], [16.2, 132.0], [16.3, 132.0], [16.4, 132.0], [16.5, 132.0], [16.6, 132.0], [16.7, 132.0], [16.8, 132.0], [16.9, 132.0], [17.0, 132.0], [17.1, 132.0], [17.2, 132.0], [17.3, 132.0], [17.4, 132.0], [17.5, 132.0], [17.6, 132.0], [17.7, 132.0], [17.8, 132.0], [17.9, 132.0], [18.0, 132.0], [18.1, 132.0], [18.2, 132.0], [18.3, 132.0], [18.4, 133.0], [18.5, 133.0], [18.6, 133.0], [18.7, 133.0], [18.8, 133.0], [18.9, 133.0], [19.0, 133.0], [19.1, 133.0], [19.2, 133.0], [19.3, 133.0], [19.4, 133.0], [19.5, 133.0], [19.6, 133.0], [19.7, 133.0], [19.8, 133.0], [19.9, 133.0], [20.0, 133.0], [20.1, 133.0], [20.2, 133.0], [20.3, 133.0], [20.4, 133.0], [20.5, 133.0], [20.6, 133.0], [20.7, 133.0], [20.8, 133.0], [20.9, 133.0], [21.0, 133.0], [21.1, 133.0], [21.2, 133.0], [21.3, 133.0], [21.4, 133.0], [21.5, 133.0], [21.6, 133.0], [21.7, 133.0], [21.8, 133.0], [21.9, 133.0], [22.0, 134.0], [22.1, 134.0], [22.2, 134.0], [22.3, 134.0], [22.4, 134.0], [22.5, 134.0], [22.6, 134.0], [22.7, 134.0], [22.8, 134.0], [22.9, 134.0], [23.0, 134.0], [23.1, 134.0], [23.2, 134.0], [23.3, 134.0], [23.4, 134.0], [23.5, 134.0], [23.6, 134.0], [23.7, 134.0], [23.8, 134.0], [23.9, 134.0], [24.0, 134.0], [24.1, 134.0], [24.2, 134.0], [24.3, 134.0], [24.4, 134.0], [24.5, 134.0], [24.6, 134.0], [24.7, 134.0], [24.8, 134.0], [24.9, 134.0], [25.0, 134.0], [25.1, 134.0], [25.2, 134.0], [25.3, 134.0], [25.4, 134.0], [25.5, 134.0], [25.6, 135.0], [25.7, 135.0], [25.8, 135.0], [25.9, 135.0], [26.0, 135.0], [26.1, 135.0], [26.2, 135.0], [26.3, 135.0], [26.4, 135.0], [26.5, 135.0], [26.6, 135.0], [26.7, 135.0], [26.8, 135.0], [26.9, 135.0], [27.0, 135.0], [27.1, 135.0], [27.2, 135.0], [27.3, 135.0], [27.4, 135.0], [27.5, 135.0], [27.6, 135.0], [27.7, 135.0], [27.8, 135.0], [27.9, 135.0], [28.0, 135.0], [28.1, 135.0], [28.2, 135.0], [28.3, 135.0], [28.4, 135.0], [28.5, 135.0], [28.6, 135.0], [28.7, 135.0], [28.8, 135.0], [28.9, 135.0], [29.0, 135.0], [29.1, 135.0], [29.2, 135.0], [29.3, 135.0], [29.4, 135.0], [29.5, 135.0], [29.6, 136.0], [29.7, 136.0], [29.8, 136.0], [29.9, 136.0], [30.0, 136.0], [30.1, 136.0], [30.2, 136.0], [30.3, 136.0], [30.4, 136.0], [30.5, 136.0], [30.6, 136.0], [30.7, 136.0], [30.8, 136.0], [30.9, 136.0], [31.0, 136.0], [31.1, 136.0], [31.2, 136.0], [31.3, 136.0], [31.4, 136.0], [31.5, 136.0], [31.6, 136.0], [31.7, 136.0], [31.8, 136.0], [31.9, 136.0], [32.0, 136.0], [32.1, 136.0], [32.2, 136.0], [32.3, 136.0], [32.4, 136.0], [32.5, 136.0], [32.6, 136.0], [32.7, 136.0], [32.8, 136.0], [32.9, 136.0], [33.0, 136.0], [33.1, 136.0], [33.2, 136.0], [33.3, 136.0], [33.4, 136.0], [33.5, 136.0], [33.6, 136.0], [33.7, 136.0], [33.8, 137.0], [33.9, 137.0], [34.0, 137.0], [34.1, 137.0], [34.2, 137.0], [34.3, 137.0], [34.4, 137.0], [34.5, 137.0], [34.6, 137.0], [34.7, 137.0], [34.8, 137.0], [34.9, 137.0], [35.0, 137.0], [35.1, 137.0], [35.2, 137.0], [35.3, 137.0], [35.4, 137.0], [35.5, 137.0], [35.6, 137.0], [35.7, 137.0], [35.8, 137.0], [35.9, 137.0], [36.0, 137.0], [36.1, 137.0], [36.2, 137.0], [36.3, 137.0], [36.4, 137.0], [36.5, 137.0], [36.6, 137.0], [36.7, 137.0], [36.8, 137.0], [36.9, 137.0], [37.0, 137.0], [37.1, 137.0], [37.2, 137.0], [37.3, 137.0], [37.4, 137.0], [37.5, 137.0], [37.6, 137.0], [37.7, 137.0], [37.8, 137.0], [37.9, 137.0], [38.0, 137.0], [38.1, 137.0], [38.2, 137.0], [38.3, 137.0], [38.4, 137.0], [38.5, 137.0], [38.6, 138.0], [38.7, 138.0], [38.8, 138.0], [38.9, 138.0], [39.0, 138.0], [39.1, 138.0], [39.2, 138.0], [39.3, 138.0], [39.4, 138.0], [39.5, 138.0], [39.6, 138.0], [39.7, 138.0], [39.8, 138.0], [39.9, 138.0], [40.0, 138.0], [40.1, 138.0], [40.2, 138.0], [40.3, 138.0], [40.4, 138.0], [40.5, 138.0], [40.6, 138.0], [40.7, 138.0], [40.8, 138.0], [40.9, 138.0], [41.0, 138.0], [41.1, 138.0], [41.2, 138.0], [41.3, 138.0], [41.4, 138.0], [41.5, 138.0], [41.6, 138.0], [41.7, 138.0], [41.8, 138.0], [41.9, 138.0], [42.0, 138.0], [42.1, 138.0], [42.2, 138.0], [42.3, 138.0], [42.4, 138.0], [42.5, 138.0], [42.6, 138.0], [42.7, 138.0], [42.8, 138.0], [42.9, 138.0], [43.0, 138.0], [43.1, 138.0], [43.2, 138.0], [43.3, 138.0], [43.4, 138.0], [43.5, 138.0], [43.6, 139.0], [43.7, 139.0], [43.8, 139.0], [43.9, 139.0], [44.0, 139.0], [44.1, 139.0], [44.2, 139.0], [44.3, 139.0], [44.4, 139.0], [44.5, 139.0], [44.6, 139.0], [44.7, 139.0], [44.8, 139.0], [44.9, 139.0], [45.0, 139.0], [45.1, 139.0], [45.2, 139.0], [45.3, 139.0], [45.4, 139.0], [45.5, 139.0], [45.6, 139.0], [45.7, 139.0], [45.8, 139.0], [45.9, 139.0], [46.0, 139.0], [46.1, 139.0], [46.2, 139.0], [46.3, 139.0], [46.4, 139.0], [46.5, 139.0], [46.6, 139.0], [46.7, 139.0], [46.8, 139.0], [46.9, 139.0], [47.0, 139.0], [47.1, 139.0], [47.2, 139.0], [47.3, 139.0], [47.4, 139.0], [47.5, 139.0], [47.6, 139.0], [47.7, 139.0], [47.8, 139.0], [47.9, 139.0], [48.0, 139.0], [48.1, 139.0], [48.2, 139.0], [48.3, 139.0], [48.4, 139.0], [48.5, 139.0], [48.6, 139.0], [48.7, 139.0], [48.8, 139.0], [48.9, 140.0], [49.0, 140.0], [49.1, 140.0], [49.2, 140.0], [49.3, 140.0], [49.4, 140.0], [49.5, 140.0], [49.6, 140.0], [49.7, 140.0], [49.8, 140.0], [49.9, 140.0], [50.0, 140.0], [50.1, 140.0], [50.2, 140.0], [50.3, 140.0], [50.4, 140.0], [50.5, 140.0], [50.6, 140.0], [50.7, 140.0], [50.8, 140.0], [50.9, 140.0], [51.0, 140.0], [51.1, 140.0], [51.2, 140.0], [51.3, 140.0], [51.4, 140.0], [51.5, 140.0], [51.6, 140.0], [51.7, 140.0], [51.8, 140.0], [51.9, 140.0], [52.0, 140.0], [52.1, 140.0], [52.2, 140.0], [52.3, 140.0], [52.4, 140.0], [52.5, 140.0], [52.6, 140.0], [52.7, 140.0], [52.8, 140.0], [52.9, 140.0], [53.0, 140.0], [53.1, 140.0], [53.2, 140.0], [53.3, 140.0], [53.4, 140.0], [53.5, 140.0], [53.6, 140.0], [53.7, 140.0], [53.8, 140.0], [53.9, 140.0], [54.0, 140.0], [54.1, 141.0], [54.2, 141.0], [54.3, 141.0], [54.4, 141.0], [54.5, 141.0], [54.6, 141.0], [54.7, 141.0], [54.8, 141.0], [54.9, 141.0], [55.0, 141.0], [55.1, 141.0], [55.2, 141.0], [55.3, 141.0], [55.4, 141.0], [55.5, 141.0], [55.6, 141.0], [55.7, 141.0], [55.8, 141.0], [55.9, 141.0], [56.0, 141.0], [56.1, 141.0], [56.2, 141.0], [56.3, 141.0], [56.4, 141.0], [56.5, 141.0], [56.6, 141.0], [56.7, 141.0], [56.8, 141.0], [56.9, 141.0], [57.0, 141.0], [57.1, 141.0], [57.2, 141.0], [57.3, 141.0], [57.4, 141.0], [57.5, 141.0], [57.6, 141.0], [57.7, 141.0], [57.8, 141.0], [57.9, 141.0], [58.0, 141.0], [58.1, 141.0], [58.2, 141.0], [58.3, 141.0], [58.4, 141.0], [58.5, 141.0], [58.6, 141.0], [58.7, 141.0], [58.8, 141.0], [58.9, 142.0], [59.0, 142.0], [59.1, 142.0], [59.2, 142.0], [59.3, 142.0], [59.4, 142.0], [59.5, 142.0], [59.6, 142.0], [59.7, 142.0], [59.8, 142.0], [59.9, 142.0], [60.0, 142.0], [60.1, 142.0], [60.2, 142.0], [60.3, 142.0], [60.4, 142.0], [60.5, 142.0], [60.6, 142.0], [60.7, 142.0], [60.8, 142.0], [60.9, 142.0], [61.0, 142.0], [61.1, 142.0], [61.2, 142.0], [61.3, 142.0], [61.4, 142.0], [61.5, 142.0], [61.6, 142.0], [61.7, 142.0], [61.8, 142.0], [61.9, 142.0], [62.0, 142.0], [62.1, 142.0], [62.2, 142.0], [62.3, 142.0], [62.4, 142.0], [62.5, 142.0], [62.6, 142.0], [62.7, 142.0], [62.8, 142.0], [62.9, 142.0], [63.0, 142.0], [63.1, 142.0], [63.2, 142.0], [63.3, 142.0], [63.4, 143.0], [63.5, 143.0], [63.6, 143.0], [63.7, 143.0], [63.8, 143.0], [63.9, 143.0], [64.0, 143.0], [64.1, 143.0], [64.2, 143.0], [64.3, 143.0], [64.4, 143.0], [64.5, 143.0], [64.6, 143.0], [64.7, 143.0], [64.8, 143.0], [64.9, 143.0], [65.0, 143.0], [65.1, 143.0], [65.2, 143.0], [65.3, 143.0], [65.4, 143.0], [65.5, 143.0], [65.6, 143.0], [65.7, 143.0], [65.8, 143.0], [65.9, 143.0], [66.0, 143.0], [66.1, 143.0], [66.2, 143.0], [66.3, 143.0], [66.4, 143.0], [66.5, 143.0], [66.6, 143.0], [66.7, 143.0], [66.8, 143.0], [66.9, 143.0], [67.0, 143.0], [67.1, 143.0], [67.2, 144.0], [67.3, 144.0], [67.4, 144.0], [67.5, 144.0], [67.6, 144.0], [67.7, 144.0], [67.8, 144.0], [67.9, 144.0], [68.0, 144.0], [68.1, 144.0], [68.2, 144.0], [68.3, 144.0], [68.4, 144.0], [68.5, 144.0], [68.6, 144.0], [68.7, 144.0], [68.8, 144.0], [68.9, 144.0], [69.0, 144.0], [69.1, 144.0], [69.2, 144.0], [69.3, 144.0], [69.4, 144.0], [69.5, 144.0], [69.6, 144.0], [69.7, 144.0], [69.8, 144.0], [69.9, 144.0], [70.0, 144.0], [70.1, 144.0], [70.2, 144.0], [70.3, 145.0], [70.4, 145.0], [70.5, 145.0], [70.6, 145.0], [70.7, 145.0], [70.8, 145.0], [70.9, 145.0], [71.0, 145.0], [71.1, 145.0], [71.2, 145.0], [71.3, 145.0], [71.4, 145.0], [71.5, 145.0], [71.6, 145.0], [71.7, 145.0], [71.8, 145.0], [71.9, 145.0], [72.0, 145.0], [72.1, 145.0], [72.2, 145.0], [72.3, 145.0], [72.4, 145.0], [72.5, 145.0], [72.6, 145.0], [72.7, 145.0], [72.8, 146.0], [72.9, 146.0], [73.0, 146.0], [73.1, 146.0], [73.2, 146.0], [73.3, 146.0], [73.4, 146.0], [73.5, 146.0], [73.6, 146.0], [73.7, 146.0], [73.8, 146.0], [73.9, 146.0], [74.0, 146.0], [74.1, 146.0], [74.2, 146.0], [74.3, 146.0], [74.4, 146.0], [74.5, 146.0], [74.6, 146.0], [74.7, 146.0], [74.8, 146.0], [74.9, 147.0], [75.0, 147.0], [75.1, 147.0], [75.2, 147.0], [75.3, 147.0], [75.4, 147.0], [75.5, 147.0], [75.6, 147.0], [75.7, 147.0], [75.8, 147.0], [75.9, 147.0], [76.0, 147.0], [76.1, 147.0], [76.2, 147.0], [76.3, 147.0], [76.4, 148.0], [76.5, 148.0], [76.6, 148.0], [76.7, 148.0], [76.8, 148.0], [76.9, 148.0], [77.0, 148.0], [77.1, 148.0], [77.2, 148.0], [77.3, 148.0], [77.4, 148.0], [77.5, 148.0], [77.6, 148.0], [77.7, 148.0], [77.8, 149.0], [77.9, 149.0], [78.0, 149.0], [78.1, 149.0], [78.2, 149.0], [78.3, 149.0], [78.4, 149.0], [78.5, 149.0], [78.6, 149.0], [78.7, 149.0], [78.8, 149.0], [78.9, 149.0], [79.0, 150.0], [79.1, 150.0], [79.2, 150.0], [79.3, 150.0], [79.4, 150.0], [79.5, 150.0], [79.6, 150.0], [79.7, 151.0], [79.8, 151.0], [79.9, 151.0], [80.0, 151.0], [80.1, 151.0], [80.2, 151.0], [80.3, 151.0], [80.4, 151.0], [80.5, 152.0], [80.6, 152.0], [80.7, 152.0], [80.8, 152.0], [80.9, 152.0], [81.0, 152.0], [81.1, 152.0], [81.2, 152.0], [81.3, 153.0], [81.4, 153.0], [81.5, 153.0], [81.6, 153.0], [81.7, 153.0], [81.8, 153.0], [81.9, 154.0], [82.0, 154.0], [82.1, 154.0], [82.2, 154.0], [82.3, 154.0], [82.4, 155.0], [82.5, 155.0], [82.6, 155.0], [82.7, 155.0], [82.8, 156.0], [82.9, 156.0], [83.0, 156.0], [83.1, 156.0], [83.2, 157.0], [83.3, 157.0], [83.4, 157.0], [83.5, 158.0], [83.6, 158.0], [83.7, 158.0], [83.8, 158.0], [83.9, 158.0], [84.0, 159.0], [84.1, 159.0], [84.2, 159.0], [84.3, 160.0], [84.4, 160.0], [84.5, 160.0], [84.6, 161.0], [84.7, 161.0], [84.8, 161.0], [84.9, 162.0], [85.0, 162.0], [85.1, 162.0], [85.2, 163.0], [85.3, 163.0], [85.4, 163.0], [85.5, 164.0], [85.6, 164.0], [85.7, 165.0], [85.8, 165.0], [85.9, 165.0], [86.0, 166.0], [86.1, 167.0], [86.2, 167.0], [86.3, 167.0], [86.4, 168.0], [86.5, 168.0], [86.6, 169.0], [86.7, 169.0], [86.8, 170.0], [86.9, 170.0], [87.0, 171.0], [87.1, 171.0], [87.2, 171.0], [87.3, 172.0], [87.4, 172.0], [87.5, 173.0], [87.6, 174.0], [87.7, 175.0], [87.8, 175.0], [87.9, 176.0], [88.0, 176.0], [88.1, 177.0], [88.2, 178.0], [88.3, 178.0], [88.4, 179.0], [88.5, 179.0], [88.6, 180.0], [88.7, 181.0], [88.8, 181.0], [88.9, 182.0], [89.0, 182.0], [89.1, 183.0], [89.2, 184.0], [89.3, 185.0], [89.4, 186.0], [89.5, 187.0], [89.6, 188.0], [89.7, 188.0], [89.8, 189.0], [89.9, 190.0], [90.0, 191.0], [90.1, 192.0], [90.2, 193.0], [90.3, 194.0], [90.4, 195.0], [90.5, 196.0], [90.6, 197.0], [90.7, 198.0], [90.8, 199.0], [90.9, 200.0], [91.0, 202.0], [91.1, 203.0], [91.2, 204.0], [91.3, 204.0], [91.4, 205.0], [91.5, 207.0], [91.6, 208.0], [91.7, 209.0], [91.8, 210.0], [91.9, 213.0], [92.0, 214.0], [92.1, 215.0], [92.2, 217.0], [92.3, 219.0], [92.4, 221.0], [92.5, 223.0], [92.6, 225.0], [92.7, 227.0], [92.8, 229.0], [92.9, 231.0], [93.0, 233.0], [93.1, 235.0], [93.2, 238.0], [93.3, 242.0], [93.4, 245.0], [93.5, 249.0], [93.6, 252.0], [93.7, 256.0], [93.8, 263.0], [93.9, 270.0], [94.0, 274.0], [94.1, 280.0], [94.2, 284.0], [94.3, 293.0], [94.4, 301.0], [94.5, 308.0], [94.6, 314.0], [94.7, 317.0], [94.8, 320.0], [94.9, 325.0], [95.0, 328.0], [95.1, 331.0], [95.2, 336.0], [95.3, 338.0], [95.4, 341.0], [95.5, 343.0], [95.6, 348.0], [95.7, 353.0], [95.8, 364.0], [95.9, 377.0], [96.0, 388.0], [96.1, 396.0], [96.2, 405.0], [96.3, 409.0], [96.4, 416.0], [96.5, 418.0], [96.6, 421.0], [96.7, 423.0], [96.8, 425.0], [96.9, 427.0], [97.0, 429.0], [97.1, 431.0], [97.2, 434.0], [97.3, 437.0], [97.4, 438.0], [97.5, 442.0], [97.6, 446.0], [97.7, 448.0], [97.8, 454.0], [97.9, 463.0], [98.0, 472.0], [98.1, 487.0], [98.2, 503.0], [98.3, 532.0], [98.4, 554.0], [98.5, 581.0], [98.6, 634.0], [98.7, 668.0], [98.8, 720.0], [98.9, 756.0], [99.0, 840.0], [99.1, 971.0], [99.2, 1132.0], [99.3, 1140.0], [99.4, 1142.0], [99.5, 1146.0], [99.6, 1151.0], [99.7, 1158.0], [99.8, 1211.0], [99.9, 1507.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 13631.0, "series": [{"data": [[600.0, 35.0], [700.0, 30.0], [800.0, 11.0], [900.0, 11.0], [1000.0, 8.0], [1100.0, 92.0], [1200.0, 14.0], [1300.0, 1.0], [1400.0, 2.0], [1500.0, 1.0], [1600.0, 1.0], [100.0, 13631.0], [1700.0, 1.0], [2000.0, 1.0], [2300.0, 1.0], [2200.0, 1.0], [2600.0, 2.0], [2700.0, 1.0], [3100.0, 2.0], [200.0, 521.0], [3200.0, 2.0], [3300.0, 2.0], [300.0, 269.0], [400.0, 306.0], [500.0, 54.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 15.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 14728.0, "series": [{"data": [[0.0, 14728.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 257.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 15.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0363036303630355, "minX": 1.7243481E12, "maxY": 3.148148148148148, "series": [{"data": [[1.72434888E12, 1.099667774086378], [1.7243499E12, 1.0996677740863785], [1.72434828E12, 1.1033333333333342], [1.7243505E12, 1.2657807308970102], [1.7243511E12, 3.148148148148148], [1.72435008E12, 1.0433333333333328], [1.72434948E12, 1.1174496644295298], [1.7243481E12, 1.7554744525547452], [1.72434972E12, 1.1362126245847173], [1.72435032E12, 1.0833333333333337], [1.7243493E12, 1.0365448504983397], [1.72435092E12, 1.2724252491694361], [1.7243487E12, 1.2033333333333345], [1.72434954E12, 1.1561461794019927], [1.72434894E12, 1.1066666666666667], [1.72434912E12, 1.103333333333333], [1.72435014E12, 1.0735785953177266], [1.72435074E12, 1.2159468438538208], [1.72434852E12, 1.0533333333333328], [1.72434936E12, 1.2966666666666662], [1.72435038E12, 1.073089700996678], [1.72434876E12, 1.1162790697674414], [1.72435098E12, 1.305369127516779], [1.72434834E12, 1.1428571428571421], [1.72434996E12, 1.096989966555185], [1.72435056E12, 1.2066666666666668], [1.72434858E12, 1.4232081911262802], [1.7243502E12, 1.1409395973154361], [1.7243508E12, 1.1133333333333342], [1.72434816E12, 1.0363036303630355], [1.72434918E12, 1.0766666666666673], [1.72434978E12, 1.342281879194632], [1.7243484E12, 1.12], [1.72434942E12, 1.120401337792642], [1.72435002E12, 1.0800000000000003], [1.7243496E12, 1.126666666666667], [1.72435062E12, 1.329999999999999], [1.724349E12, 1.1133333333333344], [1.72435086E12, 1.1003344481605348], [1.72434984E12, 1.1423841059602649], [1.72434924E12, 1.07641196013289], [1.72434882E12, 1.309764309764309], [1.72435044E12, 1.0766666666666664], [1.72435104E12, 2.352348993288589], [1.72434822E12, 1.0675675675675684], [1.72434906E12, 1.059999999999999], [1.72435068E12, 1.1270903010033455], [1.72434846E12, 1.1029900332225906], [1.72434864E12, 1.7361563517915308], [1.72434966E12, 1.2691029900332211], [1.72435026E12, 1.0629139072847689]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7243511E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 146.34455140546768, "minX": 1.0, "maxY": 1736.5, "series": [{"data": [[8.0, 1065.7142857142858], [2.0, 266.6846905537456], [9.0, 689.4], [10.0, 1367.0], [11.0, 555.3333333333334], [12.0, 595.5], [3.0, 389.2536873156341], [13.0, 1736.5], [14.0, 962.0], [15.0, 230.0], [16.0, 1634.0], [4.0, 523.4843749999997], [1.0, 146.34455140546768], [17.0, 1496.5], [5.0, 551.2857142857144], [6.0, 604.7647058823529], [7.0, 571.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.1958666666666706, 168.99586666666727]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 17.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 57.6, "minX": 1.7243481E12, "maxY": 101001.7, "series": [{"data": [[1.72434888E12, 99028.61666666667], [1.7243499E12, 99028.06666666667], [1.72434828E12, 98699.01666666666], [1.7243505E12, 99028.03333333334], [1.7243511E12, 8882.933333333332], [1.72435008E12, 98699.83333333333], [1.72434948E12, 98041.85], [1.7243481E12, 90144.08333333333], [1.72434972E12, 99026.1], [1.72435032E12, 98697.0], [1.7243493E12, 99028.13333333333], [1.72435092E12, 99026.43333333333], [1.7243487E12, 98699.36666666667], [1.72434954E12, 99023.41666666667], [1.72434894E12, 98694.3], [1.72434912E12, 98696.88333333333], [1.72435014E12, 98365.53333333334], [1.72435074E12, 99023.46666666666], [1.72434852E12, 98696.75], [1.72434936E12, 98699.4], [1.72435038E12, 99026.98333333334], [1.72434876E12, 99028.41666666667], [1.72435098E12, 98040.68333333333], [1.72434834E12, 99023.11666666667], [1.72434996E12, 98370.43333333333], [1.72435056E12, 98699.43333333333], [1.72434858E12, 96394.9], [1.7243502E12, 98032.3], [1.7243508E12, 98690.26666666666], [1.72434816E12, 99685.5], [1.72434918E12, 98697.93333333333], [1.72434978E12, 98040.33333333333], [1.7243484E12, 98690.06666666667], [1.72434942E12, 98370.65], [1.72435002E12, 98699.58333333333], [1.7243496E12, 98690.08333333333], [1.72435062E12, 98699.53333333334], [1.724349E12, 98690.08333333333], [1.72435086E12, 98366.05], [1.72434984E12, 99356.76666666666], [1.72434924E12, 99027.68333333333], [1.72434882E12, 97712.43333333333], [1.72435044E12, 98698.75], [1.72435104E12, 98040.78333333334], [1.72434822E12, 97382.33333333333], [1.72434906E12, 98694.76666666666], [1.72435068E12, 98370.71666666666], [1.72434846E12, 99024.28333333334], [1.72434864E12, 101001.7], [1.72434966E12, 99023.85], [1.72435026E12, 99352.83333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.72434888E12, 642.1333333333333], [1.7243499E12, 642.1333333333333], [1.72434828E12, 640.0], [1.7243505E12, 642.1333333333333], [1.7243511E12, 57.6], [1.72435008E12, 640.0], [1.72434948E12, 635.7333333333333], [1.7243481E12, 584.5333333333333], [1.72434972E12, 642.1333333333333], [1.72435032E12, 640.0], [1.7243493E12, 642.1333333333333], [1.72435092E12, 642.1333333333333], [1.7243487E12, 640.0], [1.72434954E12, 642.1333333333333], [1.72434894E12, 640.0], [1.72434912E12, 640.0], [1.72435014E12, 637.8666666666667], [1.72435074E12, 642.1333333333333], [1.72434852E12, 640.0], [1.72434936E12, 640.0], [1.72435038E12, 642.1333333333333], [1.72434876E12, 642.1333333333333], [1.72435098E12, 635.7333333333333], [1.72434834E12, 642.1333333333333], [1.72434996E12, 637.8666666666667], [1.72435056E12, 640.0], [1.72434858E12, 625.0666666666667], [1.7243502E12, 635.7333333333333], [1.7243508E12, 640.0], [1.72434816E12, 646.4], [1.72434918E12, 640.0], [1.72434978E12, 635.7333333333333], [1.7243484E12, 640.0], [1.72434942E12, 637.8666666666667], [1.72435002E12, 640.0], [1.7243496E12, 640.0], [1.72435062E12, 640.0], [1.724349E12, 640.0], [1.72435086E12, 637.8666666666667], [1.72434984E12, 644.2666666666667], [1.72434924E12, 642.1333333333333], [1.72434882E12, 633.6], [1.72435044E12, 640.0], [1.72435104E12, 635.7333333333333], [1.72434822E12, 631.4666666666667], [1.72434906E12, 640.0], [1.72435068E12, 637.8666666666667], [1.72434846E12, 642.1333333333333], [1.72434864E12, 654.9333333333333], [1.72434966E12, 642.1333333333333], [1.72435026E12, 644.2666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7243511E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 143.14617940199344, "minX": 1.7243481E12, "maxY": 540.925925925926, "series": [{"data": [[1.72434888E12, 151.58471760797343], [1.7243499E12, 159.39202657807311], [1.72434828E12, 157.69333333333333], [1.7243505E12, 174.32225913621264], [1.7243511E12, 540.925925925926], [1.72435008E12, 145.69666666666654], [1.72434948E12, 158.47315436241595], [1.7243481E12, 280.4452554744523], [1.72434972E12, 159.52491694352156], [1.72435032E12, 154.4733333333333], [1.7243493E12, 143.14617940199344], [1.72435092E12, 187.85382059800662], [1.7243487E12, 172.93666666666672], [1.72434954E12, 163.37541528239217], [1.72434894E12, 154.73666666666674], [1.72434912E12, 155.15666666666678], [1.72435014E12, 151.73578595317716], [1.72435074E12, 171.9966777408638], [1.72434852E12, 144.09], [1.72434936E12, 190.15000000000006], [1.72435038E12, 150.48837209302314], [1.72434876E12, 158.02657807308955], [1.72435098E12, 173.65100671140948], [1.72434834E12, 159.1760797342193], [1.72434996E12, 158.83277591973246], [1.72435056E12, 171.21], [1.72434858E12, 175.91126279863474], [1.7243502E12, 159.05704697986567], [1.7243508E12, 162.3233333333334], [1.72434816E12, 147.27062706270635], [1.72434918E12, 149.86333333333326], [1.72434978E12, 194.58053691275168], [1.7243484E12, 160.08000000000007], [1.72434942E12, 159.73578595317738], [1.72435002E12, 150.9633333333332], [1.7243496E12, 157.85666666666663], [1.72435062E12, 186.2099999999999], [1.724349E12, 161.04666666666662], [1.72435086E12, 156.13712374581942], [1.72434984E12, 164.4437086092714], [1.72434924E12, 149.61129568106318], [1.72434882E12, 165.16498316498317], [1.72435044E12, 151.78666666666672], [1.72435104E12, 376.0067114093961], [1.72434822E12, 149.25675675675686], [1.72434906E12, 150.0633333333334], [1.72435068E12, 168.33444816053515], [1.72434846E12, 149.87707641196013], [1.72434864E12, 214.89576547231266], [1.72434966E12, 168.36212624584724], [1.72435026E12, 149.8112582781458]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7243511E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 136.97666666666672, "minX": 1.7243481E12, "maxY": 505.074074074074, "series": [{"data": [[1.72434888E12, 145.69767441860475], [1.7243499E12, 152.76744186046506], [1.72434828E12, 149.93666666666672], [1.7243505E12, 167.96677740863782], [1.7243511E12, 505.074074074074], [1.72435008E12, 138.79000000000005], [1.72434948E12, 151.97315436241607], [1.7243481E12, 272.29562043795596], [1.72434972E12, 153.62126245847168], [1.72435032E12, 148.28000000000006], [1.7243493E12, 137.7541528239203], [1.72435092E12, 180.7574750830566], [1.7243487E12, 166.06666666666666], [1.72434954E12, 156.8637873754153], [1.72434894E12, 148.4933333333332], [1.72434912E12, 148.2366666666666], [1.72435014E12, 144.64882943143806], [1.72435074E12, 164.7641196013288], [1.72434852E12, 136.97666666666672], [1.72434936E12, 178.9766666666666], [1.72435038E12, 144.8637873754153], [1.72434876E12, 151.5282392026577], [1.72435098E12, 165.90604026845625], [1.72434834E12, 153.3222591362127], [1.72434996E12, 152.31438127090314], [1.72435056E12, 162.2299999999999], [1.72434858E12, 168.48464163822513], [1.7243502E12, 151.82885906040272], [1.7243508E12, 155.44333333333333], [1.72434816E12, 140.29042904290424], [1.72434918E12, 143.9266666666666], [1.72434978E12, 187.45637583892622], [1.7243484E12, 154.12333333333325], [1.72434942E12, 153.4882943143812], [1.72435002E12, 145.27333333333323], [1.7243496E12, 151.03333333333342], [1.72435062E12, 179.39000000000001], [1.724349E12, 154.61], [1.72435086E12, 149.401337792642], [1.72434984E12, 158.23841059602654], [1.72434924E12, 143.71096345514948], [1.72434882E12, 157.69023569023585], [1.72435044E12, 145.54000000000005], [1.72435104E12, 350.96644295301985], [1.72434822E12, 143.35472972972963], [1.72434906E12, 142.98666666666665], [1.72435068E12, 161.30100334448161], [1.72434846E12, 143.03654485049844], [1.72434864E12, 208.12052117263846], [1.72434966E12, 160.641196013289], [1.72435026E12, 142.1655629139072]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7243511E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 92.97666666666666, "minX": 1.7243481E12, "maxY": 428.4074074074073, "series": [{"data": [[1.72434888E12, 100.5448504983389], [1.7243499E12, 106.81727574750833], [1.72434828E12, 104.0533333333334], [1.7243505E12, 115.61794019933556], [1.7243511E12, 428.4074074074073], [1.72435008E12, 92.97666666666666], [1.72434948E12, 106.28187919463092], [1.7243481E12, 211.3284671532846], [1.72434972E12, 107.54152823920265], [1.72435032E12, 101.38333333333337], [1.7243493E12, 93.05315614617946], [1.72435092E12, 121.01661129568106], [1.7243487E12, 120.70666666666666], [1.72434954E12, 105.17940199335546], [1.72434894E12, 103.72666666666666], [1.72434912E12, 101.45999999999997], [1.72435014E12, 96.68896321070231], [1.72435074E12, 112.44850498338872], [1.72434852E12, 94.36333333333337], [1.72434936E12, 124.16666666666674], [1.72435038E12, 98.51827242524912], [1.72434876E12, 104.90697674418603], [1.72435098E12, 112.42953020134237], [1.72434834E12, 103.65780730897004], [1.72434996E12, 103.69899665551837], [1.72435056E12, 110.09999999999998], [1.72434858E12, 119.6416382252559], [1.7243502E12, 105.8691275167785], [1.7243508E12, 108.6], [1.72434816E12, 95.82838283828377], [1.72434918E12, 93.72000000000003], [1.72434978E12, 133.1845637583891], [1.7243484E12, 107.51666666666668], [1.72434942E12, 105.64548494983275], [1.72435002E12, 97.23666666666666], [1.7243496E12, 100.49999999999999], [1.72435062E12, 125.14666666666672], [1.724349E12, 104.2466666666667], [1.72435086E12, 101.97324414715719], [1.72434984E12, 110.3841059602649], [1.72434924E12, 95.69435215946845], [1.72434882E12, 107.61616161616163], [1.72435044E12, 99.82666666666665], [1.72435104E12, 291.44630872483236], [1.72434822E12, 97.5472972972973], [1.72434906E12, 99.76000000000005], [1.72435068E12, 110.66555183946491], [1.72434846E12, 96.48172757475088], [1.72434864E12, 157.0586319218242], [1.72434966E12, 107.24584717607974], [1.72435026E12, 98.91721854304632]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7243511E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 116.0, "minX": 1.7243481E12, "maxY": 3335.0, "series": [{"data": [[1.72434888E12, 1143.0], [1.7243499E12, 1155.0], [1.72434828E12, 1157.0], [1.7243505E12, 1211.0], [1.7243511E12, 1261.0], [1.72435008E12, 485.0], [1.72434948E12, 1240.0], [1.7243481E12, 3335.0], [1.72434972E12, 1181.0], [1.72435032E12, 1152.0], [1.7243493E12, 438.0], [1.72435092E12, 1369.0], [1.7243487E12, 1194.0], [1.72434954E12, 1151.0], [1.72434894E12, 1153.0], [1.72434912E12, 1146.0], [1.72435014E12, 566.0], [1.72435074E12, 1222.0], [1.72434852E12, 1137.0], [1.72434936E12, 1755.0], [1.72435038E12, 1134.0], [1.72434876E12, 1165.0], [1.72435098E12, 1233.0], [1.72434834E12, 1186.0], [1.72434996E12, 1171.0], [1.72435056E12, 1149.0], [1.72434858E12, 1144.0], [1.7243502E12, 1151.0], [1.7243508E12, 1153.0], [1.72434816E12, 442.0], [1.72434918E12, 636.0], [1.72434978E12, 3172.0], [1.7243484E12, 1169.0], [1.72434942E12, 1149.0], [1.72435002E12, 443.0], [1.7243496E12, 1146.0], [1.72435062E12, 1267.0], [1.724349E12, 1152.0], [1.72435086E12, 460.0], [1.72434984E12, 1190.0], [1.72434924E12, 710.0], [1.72434882E12, 1141.0], [1.72435044E12, 1147.0], [1.72435104E12, 1237.0], [1.72434822E12, 1141.0], [1.72434906E12, 1145.0], [1.72435068E12, 1146.0], [1.72434846E12, 437.0], [1.72434864E12, 1428.0], [1.72434966E12, 1246.0], [1.72435026E12, 1134.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.72434888E12, 157.8], [1.7243499E12, 154.60000000000002], [1.72434828E12, 163.80000000000007], [1.7243505E12, 220.0], [1.7243511E12, 1061.8], [1.72435008E12, 156.0], [1.72434948E12, 171.4000000000001], [1.7243481E12, 339.5], [1.72434972E12, 168.8], [1.72435032E12, 158.90000000000003], [1.7243493E12, 147.0], [1.72435092E12, 333.8], [1.7243487E12, 175.90000000000003], [1.72434954E12, 158.60000000000002], [1.72434894E12, 165.0], [1.72434912E12, 150.90000000000003], [1.72435014E12, 174.0], [1.72435074E12, 214.8], [1.72434852E12, 145.90000000000003], [1.72434936E12, 262.9000000000004], [1.72435038E12, 150.8], [1.72434876E12, 160.8], [1.72435098E12, 310.0], [1.72434834E12, 170.40000000000003], [1.72434996E12, 164.0], [1.72435056E12, 209.90000000000003], [1.72434858E12, 270.20000000000005], [1.7243502E12, 165.10000000000002], [1.7243508E12, 155.90000000000003], [1.72434816E12, 155.0], [1.72434918E12, 149.80000000000007], [1.72434978E12, 179.70000000000016], [1.7243484E12, 159.90000000000003], [1.72434942E12, 163.0], [1.72435002E12, 156.0], [1.7243496E12, 171.50000000000017], [1.72435062E12, 233.0], [1.724349E12, 159.60000000000014], [1.72435086E12, 168.0], [1.72434984E12, 168.2999999999999], [1.72434924E12, 157.40000000000003], [1.72434882E12, 171.2], [1.72435044E12, 170.60000000000014], [1.72435104E12, 671.6000000000001], [1.72434822E12, 155.3], [1.72434906E12, 150.0], [1.72435068E12, 195.0], [1.72434846E12, 166.0], [1.72434864E12, 316.0], [1.72434966E12, 196.00000000000006], [1.72435026E12, 153.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.72434888E12, 437.8600000000001], [1.7243499E12, 1140.8200000000002], [1.72434828E12, 463.99], [1.7243505E12, 1125.840000000011], [1.7243511E12, 1261.0], [1.72435008E12, 425.74000000000115], [1.72434948E12, 455.97999999999365], [1.7243481E12, 3288.25], [1.72434972E12, 1127.5200000000123], [1.72435032E12, 467.60000000000036], [1.7243493E12, 344.62000000000035], [1.72435092E12, 678.6800000000012], [1.7243487E12, 1143.97], [1.72434954E12, 1120.7600000000084], [1.72434894E12, 426.96000000000004], [1.72434912E12, 459.8600000000001], [1.72435014E12, 424.0], [1.72435074E12, 527.7600000000011], [1.72434852E12, 428.96000000000004], [1.72434936E12, 1282.5700000000013], [1.72435038E12, 448.82000000000016], [1.72434876E12, 1132.3400000000124], [1.72435098E12, 447.2499999999998], [1.72434834E12, 645.3600000000033], [1.72434996E12, 451.0], [1.72435056E12, 533.0800000000008], [1.72434858E12, 1134.42], [1.7243502E12, 823.239999999998], [1.7243508E12, 1138.390000000006], [1.72434816E12, 421.5999999999993], [1.72434918E12, 438.98], [1.72434978E12, 1192.9799999999818], [1.7243484E12, 1141.1700000000044], [1.72434942E12, 871.0], [1.72435002E12, 425.97], [1.7243496E12, 546.2900000000006], [1.72435062E12, 1202.3900000000006], [1.724349E12, 1139.9700000000037], [1.72435086E12, 440.0], [1.72434984E12, 1147.7899999999997], [1.72434924E12, 457.60000000000036], [1.72434882E12, 1096.06], [1.72435044E12, 328.95000000000005], [1.72435104E12, 1064.3799999999987], [1.72434822E12, 429.5699999999995], [1.72434906E12, 445.84000000000015], [1.72435068E12, 497.0], [1.72434846E12, 430.96000000000004], [1.72434864E12, 1162.52], [1.72434966E12, 898.6200000000049], [1.72435026E12, 425.5799999999996]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.72434888E12, 195.39999999999964], [1.7243499E12, 186.89999999999998], [1.72434828E12, 208.79999999999995], [1.7243505E12, 239.19999999999982], [1.7243511E12, 1195.3999999999996], [1.72435008E12, 178.0], [1.72434948E12, 248.35000000000008], [1.7243481E12, 1170.5], [1.72434972E12, 250.4999999999999], [1.72435032E12, 185.84999999999997], [1.7243493E12, 156.89999999999998], [1.72435092E12, 362.79999999999995], [1.7243487E12, 326.7499999999997], [1.72434954E12, 373.19999999999914], [1.72434894E12, 208.64999999999992], [1.72434912E12, 196.89999999999998], [1.72435014E12, 195.0], [1.72435074E12, 231.0], [1.72434852E12, 163.95], [1.72434936E12, 487.84999999999997], [1.72435038E12, 167.89999999999998], [1.72434876E12, 298.699999999999], [1.72435098E12, 338.25000000000006], [1.72434834E12, 303.1999999999989], [1.72434996E12, 195.0], [1.72435056E12, 232.89999999999998], [1.72434858E12, 414.0000000000001], [1.7243502E12, 237.65000000000015], [1.7243508E12, 250.2999999999994], [1.72434816E12, 173.60000000000002], [1.72434918E12, 187.74999999999994], [1.72434978E12, 449.7500000000027], [1.7243484E12, 302.0999999999991], [1.72434942E12, 203.0], [1.72435002E12, 195.0], [1.7243496E12, 236.84999999999997], [1.72435062E12, 251.95], [1.724349E12, 235.29999999999984], [1.72435086E12, 270.0], [1.72434984E12, 310.0499999999989], [1.72434924E12, 197.5999999999999], [1.72434882E12, 311.5999999999998], [1.72435044E12, 181.0], [1.72435104E12, 796.5500000000002], [1.72434822E12, 177.24999999999966], [1.72434906E12, 172.24999999999983], [1.72435068E12, 229.0], [1.72434846E12, 234.59999999999945], [1.72434864E12, 1138.0], [1.72434966E12, 385.2999999999996], [1.72435026E12, 174.84999999999997]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.72434888E12, 121.0], [1.7243499E12, 118.0], [1.72434828E12, 125.0], [1.7243505E12, 124.0], [1.7243511E12, 142.0], [1.72435008E12, 122.0], [1.72434948E12, 121.0], [1.7243481E12, 127.0], [1.72434972E12, 121.0], [1.72435032E12, 119.0], [1.7243493E12, 121.0], [1.72435092E12, 124.0], [1.7243487E12, 120.0], [1.72434954E12, 122.0], [1.72434894E12, 121.0], [1.72434912E12, 120.0], [1.72435014E12, 121.0], [1.72435074E12, 124.0], [1.72434852E12, 118.0], [1.72434936E12, 122.0], [1.72435038E12, 122.0], [1.72434876E12, 122.0], [1.72435098E12, 120.0], [1.72434834E12, 121.0], [1.72434996E12, 124.0], [1.72435056E12, 123.0], [1.72434858E12, 122.0], [1.7243502E12, 118.0], [1.7243508E12, 124.0], [1.72434816E12, 121.0], [1.72434918E12, 122.0], [1.72434978E12, 120.0], [1.7243484E12, 120.0], [1.72434942E12, 124.0], [1.72435002E12, 121.0], [1.7243496E12, 122.0], [1.72435062E12, 120.0], [1.724349E12, 123.0], [1.72435086E12, 121.0], [1.72434984E12, 122.0], [1.72434924E12, 121.0], [1.72434882E12, 120.0], [1.72435044E12, 121.0], [1.72435104E12, 121.0], [1.72434822E12, 122.0], [1.72434906E12, 123.0], [1.72435068E12, 123.0], [1.72434846E12, 116.0], [1.72434864E12, 121.0], [1.72434966E12, 120.0], [1.72435026E12, 119.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.72434888E12, 139.0], [1.7243499E12, 140.0], [1.72434828E12, 140.0], [1.7243505E12, 143.0], [1.7243511E12, 484.0], [1.72435008E12, 139.0], [1.72434948E12, 138.0], [1.7243481E12, 144.0], [1.72434972E12, 137.0], [1.72435032E12, 138.0], [1.7243493E12, 138.0], [1.72435092E12, 142.0], [1.7243487E12, 136.0], [1.72434954E12, 140.0], [1.72434894E12, 139.0], [1.72434912E12, 140.0], [1.72435014E12, 140.0], [1.72435074E12, 145.0], [1.72434852E12, 134.0], [1.72434936E12, 140.0], [1.72435038E12, 137.0], [1.72434876E12, 136.0], [1.72435098E12, 139.0], [1.72434834E12, 138.0], [1.72434996E12, 142.0], [1.72435056E12, 144.0], [1.72434858E12, 135.0], [1.7243502E12, 137.0], [1.7243508E12, 142.0], [1.72434816E12, 141.0], [1.72434918E12, 139.0], [1.72434978E12, 139.0], [1.7243484E12, 138.0], [1.72434942E12, 139.0], [1.72435002E12, 140.0], [1.7243496E12, 139.0], [1.72435062E12, 150.0], [1.724349E12, 139.0], [1.72435086E12, 142.0], [1.72434984E12, 139.0], [1.72434924E12, 137.0], [1.72434882E12, 140.0], [1.72435044E12, 142.0], [1.72435104E12, 337.5], [1.72434822E12, 138.0], [1.72434906E12, 140.0], [1.72435068E12, 152.0], [1.72434846E12, 136.0], [1.72434864E12, 136.0], [1.72434966E12, 138.0], [1.72435026E12, 139.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7243511E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 139.0, "minX": 1.0, "maxY": 1570.5, "series": [{"data": [[2.0, 447.0], [8.0, 152.0], [9.0, 282.0], [10.0, 378.0], [3.0, 141.0], [13.0, 168.0], [14.0, 215.0], [4.0, 140.0], [1.0, 631.0], [17.0, 278.0], [5.0, 139.0], [22.0, 1570.5], [6.0, 142.0], [7.0, 152.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 134.0, "minX": 1.0, "maxY": 1528.0, "series": [{"data": [[2.0, 366.5], [8.0, 148.5], [9.0, 256.0], [10.0, 358.5], [3.0, 135.0], [13.0, 161.0], [14.0, 207.5], [4.0, 135.0], [1.0, 631.0], [17.0, 262.0], [5.0, 134.0], [22.0, 1528.0], [6.0, 136.0], [7.0, 143.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.38333333333333336, "minX": 1.7243481E12, "maxY": 5.133333333333334, "series": [{"data": [[1.72434888E12, 5.0], [1.7243499E12, 5.0], [1.72434828E12, 5.0], [1.7243505E12, 5.016666666666667], [1.7243511E12, 0.38333333333333336], [1.72435008E12, 5.0], [1.72434948E12, 4.966666666666667], [1.7243481E12, 4.6], [1.72434972E12, 5.033333333333333], [1.72435032E12, 5.0], [1.7243493E12, 5.033333333333333], [1.72435092E12, 5.0], [1.7243487E12, 4.983333333333333], [1.72434954E12, 5.016666666666667], [1.72434894E12, 5.0], [1.72434912E12, 5.0], [1.72435014E12, 4.966666666666667], [1.72435074E12, 5.0], [1.72434852E12, 5.0], [1.72434936E12, 5.0], [1.72435038E12, 5.0], [1.72434876E12, 5.016666666666667], [1.72435098E12, 4.983333333333333], [1.72434834E12, 5.0], [1.72434996E12, 4.983333333333333], [1.72435056E12, 5.0], [1.72434858E12, 4.866666666666666], [1.7243502E12, 5.0], [1.7243508E12, 5.0], [1.72434816E12, 5.016666666666667], [1.72434918E12, 5.0], [1.72434978E12, 5.0], [1.7243484E12, 5.016666666666667], [1.72434942E12, 4.983333333333333], [1.72435002E12, 5.016666666666667], [1.7243496E12, 5.0], [1.72435062E12, 5.0], [1.724349E12, 5.0], [1.72435086E12, 5.0], [1.72434984E12, 5.0], [1.72434924E12, 5.0], [1.72434882E12, 4.966666666666667], [1.72435044E12, 5.0], [1.72435104E12, 5.016666666666667], [1.72434822E12, 4.95], [1.72434906E12, 5.016666666666667], [1.72435068E12, 5.0], [1.72434846E12, 5.016666666666667], [1.72434864E12, 5.133333333333334], [1.72434966E12, 5.0], [1.72435026E12, 5.016666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7243511E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.45, "minX": 1.7243481E12, "maxY": 5.116666666666666, "series": [{"data": [[1.72434888E12, 5.016666666666667], [1.7243499E12, 5.016666666666667], [1.72434828E12, 5.0], [1.7243505E12, 5.016666666666667], [1.7243511E12, 0.45], [1.72435008E12, 5.0], [1.72434948E12, 4.966666666666667], [1.7243481E12, 4.566666666666666], [1.72434972E12, 5.016666666666667], [1.72435032E12, 5.0], [1.7243493E12, 5.016666666666667], [1.72435092E12, 5.016666666666667], [1.7243487E12, 5.0], [1.72434954E12, 5.016666666666667], [1.72434894E12, 5.0], [1.72434912E12, 5.0], [1.72435014E12, 4.983333333333333], [1.72435074E12, 5.016666666666667], [1.72434852E12, 5.0], [1.72434936E12, 5.0], [1.72435038E12, 5.016666666666667], [1.72434876E12, 5.016666666666667], [1.72435098E12, 4.966666666666667], [1.72434834E12, 5.016666666666667], [1.72434996E12, 4.983333333333333], [1.72435056E12, 5.0], [1.72434858E12, 4.883333333333334], [1.7243502E12, 4.966666666666667], [1.7243508E12, 5.0], [1.72434816E12, 5.05], [1.72434918E12, 5.0], [1.72434978E12, 4.966666666666667], [1.7243484E12, 5.0], [1.72434942E12, 4.983333333333333], [1.72435002E12, 5.0], [1.7243496E12, 5.0], [1.72435062E12, 5.0], [1.724349E12, 5.0], [1.72435086E12, 4.983333333333333], [1.72434984E12, 5.033333333333333], [1.72434924E12, 5.016666666666667], [1.72434882E12, 4.95], [1.72435044E12, 5.0], [1.72435104E12, 4.966666666666667], [1.72434822E12, 4.933333333333334], [1.72434906E12, 5.0], [1.72435068E12, 4.983333333333333], [1.72434846E12, 5.016666666666667], [1.72434864E12, 5.116666666666666], [1.72434966E12, 5.016666666666667], [1.72435026E12, 5.033333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7243511E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.45, "minX": 1.7243481E12, "maxY": 5.116666666666666, "series": [{"data": [[1.72434888E12, 5.016666666666667], [1.7243499E12, 5.016666666666667], [1.72434828E12, 5.0], [1.7243505E12, 5.016666666666667], [1.7243511E12, 0.45], [1.72435008E12, 5.0], [1.72434948E12, 4.966666666666667], [1.7243481E12, 4.566666666666666], [1.72434972E12, 5.016666666666667], [1.72435032E12, 5.0], [1.7243493E12, 5.016666666666667], [1.72435092E12, 5.016666666666667], [1.7243487E12, 5.0], [1.72434954E12, 5.016666666666667], [1.72434894E12, 5.0], [1.72434912E12, 5.0], [1.72435014E12, 4.983333333333333], [1.72435074E12, 5.016666666666667], [1.72434852E12, 5.0], [1.72434936E12, 5.0], [1.72435038E12, 5.016666666666667], [1.72434876E12, 5.016666666666667], [1.72435098E12, 4.966666666666667], [1.72434834E12, 5.016666666666667], [1.72434996E12, 4.983333333333333], [1.72435056E12, 5.0], [1.72434858E12, 4.883333333333334], [1.7243502E12, 4.966666666666667], [1.7243508E12, 5.0], [1.72434816E12, 5.05], [1.72434918E12, 5.0], [1.72434978E12, 4.966666666666667], [1.7243484E12, 5.0], [1.72434942E12, 4.983333333333333], [1.72435002E12, 5.0], [1.7243496E12, 5.0], [1.72435062E12, 5.0], [1.724349E12, 5.0], [1.72435086E12, 4.983333333333333], [1.72434984E12, 5.033333333333333], [1.72434924E12, 5.016666666666667], [1.72434882E12, 4.95], [1.72435044E12, 5.0], [1.72435104E12, 4.966666666666667], [1.72434822E12, 4.933333333333334], [1.72434906E12, 5.0], [1.72435068E12, 4.983333333333333], [1.72434846E12, 5.016666666666667], [1.72434864E12, 5.116666666666666], [1.72434966E12, 5.016666666666667], [1.72435026E12, 5.033333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7243511E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.45, "minX": 1.7243481E12, "maxY": 5.116666666666666, "series": [{"data": [[1.72434888E12, 5.016666666666667], [1.7243499E12, 5.016666666666667], [1.72434828E12, 5.0], [1.7243505E12, 5.016666666666667], [1.7243511E12, 0.45], [1.72435008E12, 5.0], [1.72434948E12, 4.966666666666667], [1.7243481E12, 4.566666666666666], [1.72434972E12, 5.016666666666667], [1.72435032E12, 5.0], [1.7243493E12, 5.016666666666667], [1.72435092E12, 5.016666666666667], [1.7243487E12, 5.0], [1.72434954E12, 5.016666666666667], [1.72434894E12, 5.0], [1.72434912E12, 5.0], [1.72435014E12, 4.983333333333333], [1.72435074E12, 5.016666666666667], [1.72434852E12, 5.0], [1.72434936E12, 5.0], [1.72435038E12, 5.016666666666667], [1.72434876E12, 5.016666666666667], [1.72435098E12, 4.966666666666667], [1.72434834E12, 5.016666666666667], [1.72434996E12, 4.983333333333333], [1.72435056E12, 5.0], [1.72434858E12, 4.883333333333334], [1.7243502E12, 4.966666666666667], [1.7243508E12, 5.0], [1.72434816E12, 5.05], [1.72434918E12, 5.0], [1.72434978E12, 4.966666666666667], [1.7243484E12, 5.0], [1.72434942E12, 4.983333333333333], [1.72435002E12, 5.0], [1.7243496E12, 5.0], [1.72435062E12, 5.0], [1.724349E12, 5.0], [1.72435086E12, 4.983333333333333], [1.72434984E12, 5.033333333333333], [1.72434924E12, 5.016666666666667], [1.72434882E12, 4.95], [1.72435044E12, 5.0], [1.72435104E12, 4.966666666666667], [1.72434822E12, 4.933333333333334], [1.72434906E12, 5.0], [1.72435068E12, 4.983333333333333], [1.72434846E12, 5.016666666666667], [1.72434864E12, 5.116666666666666], [1.72434966E12, 5.016666666666667], [1.72435026E12, 5.033333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7243511E12, "title": "Total Transactions Per Second"}},
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

