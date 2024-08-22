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
        data: {"result": {"minY": 116.0, "minX": 0.0, "maxY": 3557.0, "series": [{"data": [[0.0, 116.0], [0.1, 117.0], [0.2, 117.0], [0.3, 118.0], [0.4, 118.0], [0.5, 119.0], [0.6, 119.0], [0.7, 119.0], [0.8, 119.0], [0.9, 119.0], [1.0, 120.0], [1.1, 120.0], [1.2, 120.0], [1.3, 120.0], [1.4, 120.0], [1.5, 120.0], [1.6, 120.0], [1.7, 121.0], [1.8, 121.0], [1.9, 121.0], [2.0, 121.0], [2.1, 121.0], [2.2, 121.0], [2.3, 121.0], [2.4, 121.0], [2.5, 121.0], [2.6, 121.0], [2.7, 121.0], [2.8, 122.0], [2.9, 122.0], [3.0, 122.0], [3.1, 122.0], [3.2, 122.0], [3.3, 122.0], [3.4, 122.0], [3.5, 122.0], [3.6, 122.0], [3.7, 122.0], [3.8, 122.0], [3.9, 122.0], [4.0, 122.0], [4.1, 122.0], [4.2, 122.0], [4.3, 122.0], [4.4, 123.0], [4.5, 123.0], [4.6, 123.0], [4.7, 123.0], [4.8, 123.0], [4.9, 123.0], [5.0, 123.0], [5.1, 123.0], [5.2, 123.0], [5.3, 123.0], [5.4, 123.0], [5.5, 123.0], [5.6, 123.0], [5.7, 123.0], [5.8, 123.0], [5.9, 123.0], [6.0, 123.0], [6.1, 123.0], [6.2, 123.0], [6.3, 124.0], [6.4, 124.0], [6.5, 124.0], [6.6, 124.0], [6.7, 124.0], [6.8, 124.0], [6.9, 124.0], [7.0, 124.0], [7.1, 124.0], [7.2, 124.0], [7.3, 124.0], [7.4, 124.0], [7.5, 124.0], [7.6, 124.0], [7.7, 124.0], [7.8, 124.0], [7.9, 124.0], [8.0, 124.0], [8.1, 124.0], [8.2, 124.0], [8.3, 124.0], [8.4, 124.0], [8.5, 125.0], [8.6, 125.0], [8.7, 125.0], [8.8, 125.0], [8.9, 125.0], [9.0, 125.0], [9.1, 125.0], [9.2, 125.0], [9.3, 125.0], [9.4, 125.0], [9.5, 125.0], [9.6, 125.0], [9.7, 125.0], [9.8, 125.0], [9.9, 125.0], [10.0, 125.0], [10.1, 125.0], [10.2, 125.0], [10.3, 125.0], [10.4, 125.0], [10.5, 125.0], [10.6, 126.0], [10.7, 126.0], [10.8, 126.0], [10.9, 126.0], [11.0, 126.0], [11.1, 126.0], [11.2, 126.0], [11.3, 126.0], [11.4, 126.0], [11.5, 126.0], [11.6, 126.0], [11.7, 126.0], [11.8, 126.0], [11.9, 126.0], [12.0, 126.0], [12.1, 126.0], [12.2, 126.0], [12.3, 126.0], [12.4, 126.0], [12.5, 126.0], [12.6, 126.0], [12.7, 126.0], [12.8, 126.0], [12.9, 126.0], [13.0, 127.0], [13.1, 127.0], [13.2, 127.0], [13.3, 127.0], [13.4, 127.0], [13.5, 127.0], [13.6, 127.0], [13.7, 127.0], [13.8, 127.0], [13.9, 127.0], [14.0, 127.0], [14.1, 127.0], [14.2, 127.0], [14.3, 127.0], [14.4, 127.0], [14.5, 127.0], [14.6, 127.0], [14.7, 127.0], [14.8, 127.0], [14.9, 127.0], [15.0, 127.0], [15.1, 127.0], [15.2, 127.0], [15.3, 127.0], [15.4, 128.0], [15.5, 128.0], [15.6, 128.0], [15.7, 128.0], [15.8, 128.0], [15.9, 128.0], [16.0, 128.0], [16.1, 128.0], [16.2, 128.0], [16.3, 128.0], [16.4, 128.0], [16.5, 128.0], [16.6, 128.0], [16.7, 128.0], [16.8, 128.0], [16.9, 128.0], [17.0, 128.0], [17.1, 128.0], [17.2, 128.0], [17.3, 128.0], [17.4, 128.0], [17.5, 128.0], [17.6, 128.0], [17.7, 128.0], [17.8, 128.0], [17.9, 129.0], [18.0, 129.0], [18.1, 129.0], [18.2, 129.0], [18.3, 129.0], [18.4, 129.0], [18.5, 129.0], [18.6, 129.0], [18.7, 129.0], [18.8, 129.0], [18.9, 129.0], [19.0, 129.0], [19.1, 129.0], [19.2, 129.0], [19.3, 129.0], [19.4, 129.0], [19.5, 129.0], [19.6, 129.0], [19.7, 129.0], [19.8, 129.0], [19.9, 129.0], [20.0, 129.0], [20.1, 129.0], [20.2, 129.0], [20.3, 129.0], [20.4, 129.0], [20.5, 129.0], [20.6, 129.0], [20.7, 130.0], [20.8, 130.0], [20.9, 130.0], [21.0, 130.0], [21.1, 130.0], [21.2, 130.0], [21.3, 130.0], [21.4, 130.0], [21.5, 130.0], [21.6, 130.0], [21.7, 130.0], [21.8, 130.0], [21.9, 130.0], [22.0, 130.0], [22.1, 130.0], [22.2, 130.0], [22.3, 130.0], [22.4, 130.0], [22.5, 130.0], [22.6, 130.0], [22.7, 130.0], [22.8, 130.0], [22.9, 130.0], [23.0, 130.0], [23.1, 130.0], [23.2, 130.0], [23.3, 130.0], [23.4, 130.0], [23.5, 130.0], [23.6, 130.0], [23.7, 130.0], [23.8, 131.0], [23.9, 131.0], [24.0, 131.0], [24.1, 131.0], [24.2, 131.0], [24.3, 131.0], [24.4, 131.0], [24.5, 131.0], [24.6, 131.0], [24.7, 131.0], [24.8, 131.0], [24.9, 131.0], [25.0, 131.0], [25.1, 131.0], [25.2, 131.0], [25.3, 131.0], [25.4, 131.0], [25.5, 131.0], [25.6, 131.0], [25.7, 131.0], [25.8, 131.0], [25.9, 131.0], [26.0, 131.0], [26.1, 131.0], [26.2, 131.0], [26.3, 131.0], [26.4, 131.0], [26.5, 131.0], [26.6, 131.0], [26.7, 131.0], [26.8, 131.0], [26.9, 131.0], [27.0, 131.0], [27.1, 132.0], [27.2, 132.0], [27.3, 132.0], [27.4, 132.0], [27.5, 132.0], [27.6, 132.0], [27.7, 132.0], [27.8, 132.0], [27.9, 132.0], [28.0, 132.0], [28.1, 132.0], [28.2, 132.0], [28.3, 132.0], [28.4, 132.0], [28.5, 132.0], [28.6, 132.0], [28.7, 132.0], [28.8, 132.0], [28.9, 132.0], [29.0, 132.0], [29.1, 132.0], [29.2, 132.0], [29.3, 132.0], [29.4, 132.0], [29.5, 132.0], [29.6, 132.0], [29.7, 132.0], [29.8, 132.0], [29.9, 132.0], [30.0, 132.0], [30.1, 132.0], [30.2, 132.0], [30.3, 132.0], [30.4, 132.0], [30.5, 132.0], [30.6, 132.0], [30.7, 132.0], [30.8, 132.0], [30.9, 132.0], [31.0, 132.0], [31.1, 133.0], [31.2, 133.0], [31.3, 133.0], [31.4, 133.0], [31.5, 133.0], [31.6, 133.0], [31.7, 133.0], [31.8, 133.0], [31.9, 133.0], [32.0, 133.0], [32.1, 133.0], [32.2, 133.0], [32.3, 133.0], [32.4, 133.0], [32.5, 133.0], [32.6, 133.0], [32.7, 133.0], [32.8, 133.0], [32.9, 133.0], [33.0, 133.0], [33.1, 133.0], [33.2, 133.0], [33.3, 133.0], [33.4, 133.0], [33.5, 133.0], [33.6, 133.0], [33.7, 133.0], [33.8, 133.0], [33.9, 133.0], [34.0, 133.0], [34.1, 133.0], [34.2, 133.0], [34.3, 133.0], [34.4, 133.0], [34.5, 133.0], [34.6, 133.0], [34.7, 133.0], [34.8, 133.0], [34.9, 133.0], [35.0, 133.0], [35.1, 133.0], [35.2, 134.0], [35.3, 134.0], [35.4, 134.0], [35.5, 134.0], [35.6, 134.0], [35.7, 134.0], [35.8, 134.0], [35.9, 134.0], [36.0, 134.0], [36.1, 134.0], [36.2, 134.0], [36.3, 134.0], [36.4, 134.0], [36.5, 134.0], [36.6, 134.0], [36.7, 134.0], [36.8, 134.0], [36.9, 134.0], [37.0, 134.0], [37.1, 134.0], [37.2, 134.0], [37.3, 134.0], [37.4, 134.0], [37.5, 134.0], [37.6, 134.0], [37.7, 134.0], [37.8, 134.0], [37.9, 134.0], [38.0, 134.0], [38.1, 134.0], [38.2, 134.0], [38.3, 134.0], [38.4, 134.0], [38.5, 134.0], [38.6, 134.0], [38.7, 134.0], [38.8, 134.0], [38.9, 134.0], [39.0, 134.0], [39.1, 134.0], [39.2, 134.0], [39.3, 135.0], [39.4, 135.0], [39.5, 135.0], [39.6, 135.0], [39.7, 135.0], [39.8, 135.0], [39.9, 135.0], [40.0, 135.0], [40.1, 135.0], [40.2, 135.0], [40.3, 135.0], [40.4, 135.0], [40.5, 135.0], [40.6, 135.0], [40.7, 135.0], [40.8, 135.0], [40.9, 135.0], [41.0, 135.0], [41.1, 135.0], [41.2, 135.0], [41.3, 135.0], [41.4, 135.0], [41.5, 135.0], [41.6, 135.0], [41.7, 135.0], [41.8, 135.0], [41.9, 135.0], [42.0, 135.0], [42.1, 135.0], [42.2, 135.0], [42.3, 135.0], [42.4, 135.0], [42.5, 135.0], [42.6, 135.0], [42.7, 135.0], [42.8, 135.0], [42.9, 135.0], [43.0, 135.0], [43.1, 135.0], [43.2, 135.0], [43.3, 135.0], [43.4, 135.0], [43.5, 136.0], [43.6, 136.0], [43.7, 136.0], [43.8, 136.0], [43.9, 136.0], [44.0, 136.0], [44.1, 136.0], [44.2, 136.0], [44.3, 136.0], [44.4, 136.0], [44.5, 136.0], [44.6, 136.0], [44.7, 136.0], [44.8, 136.0], [44.9, 136.0], [45.0, 136.0], [45.1, 136.0], [45.2, 136.0], [45.3, 136.0], [45.4, 136.0], [45.5, 136.0], [45.6, 136.0], [45.7, 136.0], [45.8, 136.0], [45.9, 136.0], [46.0, 136.0], [46.1, 136.0], [46.2, 136.0], [46.3, 136.0], [46.4, 136.0], [46.5, 136.0], [46.6, 136.0], [46.7, 136.0], [46.8, 136.0], [46.9, 136.0], [47.0, 136.0], [47.1, 136.0], [47.2, 136.0], [47.3, 136.0], [47.4, 136.0], [47.5, 136.0], [47.6, 136.0], [47.7, 136.0], [47.8, 136.0], [47.9, 136.0], [48.0, 136.0], [48.1, 137.0], [48.2, 137.0], [48.3, 137.0], [48.4, 137.0], [48.5, 137.0], [48.6, 137.0], [48.7, 137.0], [48.8, 137.0], [48.9, 137.0], [49.0, 137.0], [49.1, 137.0], [49.2, 137.0], [49.3, 137.0], [49.4, 137.0], [49.5, 137.0], [49.6, 137.0], [49.7, 137.0], [49.8, 137.0], [49.9, 137.0], [50.0, 137.0], [50.1, 137.0], [50.2, 137.0], [50.3, 137.0], [50.4, 137.0], [50.5, 137.0], [50.6, 137.0], [50.7, 137.0], [50.8, 137.0], [50.9, 137.0], [51.0, 137.0], [51.1, 137.0], [51.2, 137.0], [51.3, 137.0], [51.4, 137.0], [51.5, 137.0], [51.6, 137.0], [51.7, 137.0], [51.8, 137.0], [51.9, 137.0], [52.0, 137.0], [52.1, 137.0], [52.2, 137.0], [52.3, 137.0], [52.4, 138.0], [52.5, 138.0], [52.6, 138.0], [52.7, 138.0], [52.8, 138.0], [52.9, 138.0], [53.0, 138.0], [53.1, 138.0], [53.2, 138.0], [53.3, 138.0], [53.4, 138.0], [53.5, 138.0], [53.6, 138.0], [53.7, 138.0], [53.8, 138.0], [53.9, 138.0], [54.0, 138.0], [54.1, 138.0], [54.2, 138.0], [54.3, 138.0], [54.4, 138.0], [54.5, 138.0], [54.6, 138.0], [54.7, 138.0], [54.8, 138.0], [54.9, 138.0], [55.0, 138.0], [55.1, 138.0], [55.2, 138.0], [55.3, 138.0], [55.4, 138.0], [55.5, 138.0], [55.6, 138.0], [55.7, 138.0], [55.8, 138.0], [55.9, 138.0], [56.0, 138.0], [56.1, 138.0], [56.2, 138.0], [56.3, 138.0], [56.4, 139.0], [56.5, 139.0], [56.6, 139.0], [56.7, 139.0], [56.8, 139.0], [56.9, 139.0], [57.0, 139.0], [57.1, 139.0], [57.2, 139.0], [57.3, 139.0], [57.4, 139.0], [57.5, 139.0], [57.6, 139.0], [57.7, 139.0], [57.8, 139.0], [57.9, 139.0], [58.0, 139.0], [58.1, 139.0], [58.2, 139.0], [58.3, 139.0], [58.4, 139.0], [58.5, 139.0], [58.6, 139.0], [58.7, 139.0], [58.8, 139.0], [58.9, 139.0], [59.0, 139.0], [59.1, 139.0], [59.2, 139.0], [59.3, 139.0], [59.4, 139.0], [59.5, 139.0], [59.6, 139.0], [59.7, 139.0], [59.8, 139.0], [59.9, 139.0], [60.0, 139.0], [60.1, 140.0], [60.2, 140.0], [60.3, 140.0], [60.4, 140.0], [60.5, 140.0], [60.6, 140.0], [60.7, 140.0], [60.8, 140.0], [60.9, 140.0], [61.0, 140.0], [61.1, 140.0], [61.2, 140.0], [61.3, 140.0], [61.4, 140.0], [61.5, 140.0], [61.6, 140.0], [61.7, 140.0], [61.8, 140.0], [61.9, 140.0], [62.0, 140.0], [62.1, 140.0], [62.2, 140.0], [62.3, 140.0], [62.4, 140.0], [62.5, 140.0], [62.6, 140.0], [62.7, 140.0], [62.8, 140.0], [62.9, 140.0], [63.0, 140.0], [63.1, 141.0], [63.2, 141.0], [63.3, 141.0], [63.4, 141.0], [63.5, 141.0], [63.6, 141.0], [63.7, 141.0], [63.8, 141.0], [63.9, 141.0], [64.0, 141.0], [64.1, 141.0], [64.2, 141.0], [64.3, 141.0], [64.4, 141.0], [64.5, 141.0], [64.6, 141.0], [64.7, 141.0], [64.8, 141.0], [64.9, 141.0], [65.0, 141.0], [65.1, 141.0], [65.2, 141.0], [65.3, 141.0], [65.4, 142.0], [65.5, 142.0], [65.6, 142.0], [65.7, 142.0], [65.8, 142.0], [65.9, 142.0], [66.0, 142.0], [66.1, 142.0], [66.2, 142.0], [66.3, 142.0], [66.4, 142.0], [66.5, 142.0], [66.6, 142.0], [66.7, 142.0], [66.8, 142.0], [66.9, 142.0], [67.0, 142.0], [67.1, 142.0], [67.2, 143.0], [67.3, 143.0], [67.4, 143.0], [67.5, 143.0], [67.6, 143.0], [67.7, 143.0], [67.8, 143.0], [67.9, 143.0], [68.0, 143.0], [68.1, 143.0], [68.2, 143.0], [68.3, 143.0], [68.4, 143.0], [68.5, 143.0], [68.6, 143.0], [68.7, 144.0], [68.8, 144.0], [68.9, 144.0], [69.0, 144.0], [69.1, 144.0], [69.2, 144.0], [69.3, 144.0], [69.4, 144.0], [69.5, 144.0], [69.6, 144.0], [69.7, 144.0], [69.8, 145.0], [69.9, 145.0], [70.0, 145.0], [70.1, 145.0], [70.2, 145.0], [70.3, 145.0], [70.4, 145.0], [70.5, 145.0], [70.6, 145.0], [70.7, 146.0], [70.8, 146.0], [70.9, 146.0], [71.0, 146.0], [71.1, 146.0], [71.2, 147.0], [71.3, 147.0], [71.4, 147.0], [71.5, 147.0], [71.6, 148.0], [71.7, 148.0], [71.8, 148.0], [71.9, 148.0], [72.0, 148.0], [72.1, 149.0], [72.2, 149.0], [72.3, 149.0], [72.4, 149.0], [72.5, 150.0], [72.6, 150.0], [72.7, 151.0], [72.8, 151.0], [72.9, 152.0], [73.0, 152.0], [73.1, 152.0], [73.2, 153.0], [73.3, 154.0], [73.4, 154.0], [73.5, 155.0], [73.6, 155.0], [73.7, 156.0], [73.8, 156.0], [73.9, 157.0], [74.0, 158.0], [74.1, 159.0], [74.2, 160.0], [74.3, 161.0], [74.4, 162.0], [74.5, 163.0], [74.6, 164.0], [74.7, 165.0], [74.8, 167.0], [74.9, 169.0], [75.0, 169.0], [75.1, 171.0], [75.2, 172.0], [75.3, 174.0], [75.4, 175.0], [75.5, 177.0], [75.6, 178.0], [75.7, 178.0], [75.8, 180.0], [75.9, 181.0], [76.0, 182.0], [76.1, 185.0], [76.2, 186.0], [76.3, 187.0], [76.4, 189.0], [76.5, 191.0], [76.6, 192.0], [76.7, 194.0], [76.8, 195.0], [76.9, 196.0], [77.0, 198.0], [77.1, 200.0], [77.2, 201.0], [77.3, 203.0], [77.4, 204.0], [77.5, 205.0], [77.6, 206.0], [77.7, 208.0], [77.8, 209.0], [77.9, 210.0], [78.0, 211.0], [78.1, 213.0], [78.2, 214.0], [78.3, 216.0], [78.4, 216.0], [78.5, 218.0], [78.6, 220.0], [78.7, 223.0], [78.8, 225.0], [78.9, 228.0], [79.0, 229.0], [79.1, 231.0], [79.2, 234.0], [79.3, 236.0], [79.4, 239.0], [79.5, 241.0], [79.6, 243.0], [79.7, 245.0], [79.8, 247.0], [79.9, 250.0], [80.0, 252.0], [80.1, 254.0], [80.2, 258.0], [80.3, 262.0], [80.4, 268.0], [80.5, 271.0], [80.6, 273.0], [80.7, 276.0], [80.8, 281.0], [80.9, 284.0], [81.0, 289.0], [81.1, 293.0], [81.2, 297.0], [81.3, 302.0], [81.4, 307.0], [81.5, 310.0], [81.6, 313.0], [81.7, 316.0], [81.8, 319.0], [81.9, 323.0], [82.0, 325.0], [82.1, 327.0], [82.2, 329.0], [82.3, 330.0], [82.4, 332.0], [82.5, 334.0], [82.6, 336.0], [82.7, 338.0], [82.8, 339.0], [82.9, 341.0], [83.0, 342.0], [83.1, 344.0], [83.2, 345.0], [83.3, 346.0], [83.4, 349.0], [83.5, 352.0], [83.6, 355.0], [83.7, 357.0], [83.8, 361.0], [83.9, 363.0], [84.0, 365.0], [84.1, 368.0], [84.2, 370.0], [84.3, 372.0], [84.4, 374.0], [84.5, 376.0], [84.6, 377.0], [84.7, 378.0], [84.8, 380.0], [84.9, 381.0], [85.0, 384.0], [85.1, 385.0], [85.2, 386.0], [85.3, 387.0], [85.4, 388.0], [85.5, 389.0], [85.6, 390.0], [85.7, 392.0], [85.8, 393.0], [85.9, 394.0], [86.0, 395.0], [86.1, 396.0], [86.2, 396.0], [86.3, 398.0], [86.4, 398.0], [86.5, 399.0], [86.6, 400.0], [86.7, 401.0], [86.8, 402.0], [86.9, 402.0], [87.0, 403.0], [87.1, 405.0], [87.2, 406.0], [87.3, 407.0], [87.4, 408.0], [87.5, 409.0], [87.6, 411.0], [87.7, 412.0], [87.8, 414.0], [87.9, 415.0], [88.0, 417.0], [88.1, 419.0], [88.2, 420.0], [88.3, 422.0], [88.4, 424.0], [88.5, 425.0], [88.6, 426.0], [88.7, 428.0], [88.8, 429.0], [88.9, 431.0], [89.0, 433.0], [89.1, 435.0], [89.2, 438.0], [89.3, 440.0], [89.4, 443.0], [89.5, 445.0], [89.6, 447.0], [89.7, 449.0], [89.8, 451.0], [89.9, 453.0], [90.0, 455.0], [90.1, 457.0], [90.2, 460.0], [90.3, 463.0], [90.4, 467.0], [90.5, 471.0], [90.6, 473.0], [90.7, 475.0], [90.8, 478.0], [90.9, 481.0], [91.0, 485.0], [91.1, 488.0], [91.2, 491.0], [91.3, 494.0], [91.4, 496.0], [91.5, 497.0], [91.6, 501.0], [91.7, 505.0], [91.8, 512.0], [91.9, 514.0], [92.0, 516.0], [92.1, 518.0], [92.2, 522.0], [92.3, 528.0], [92.4, 531.0], [92.5, 533.0], [92.6, 536.0], [92.7, 538.0], [92.8, 542.0], [92.9, 545.0], [93.0, 550.0], [93.1, 555.0], [93.2, 557.0], [93.3, 560.0], [93.4, 563.0], [93.5, 566.0], [93.6, 572.0], [93.7, 574.0], [93.8, 575.0], [93.9, 578.0], [94.0, 581.0], [94.1, 584.0], [94.2, 589.0], [94.3, 592.0], [94.4, 595.0], [94.5, 602.0], [94.6, 605.0], [94.7, 608.0], [94.8, 613.0], [94.9, 620.0], [95.0, 622.0], [95.1, 625.0], [95.2, 634.0], [95.3, 641.0], [95.4, 646.0], [95.5, 652.0], [95.6, 658.0], [95.7, 664.0], [95.8, 668.0], [95.9, 673.0], [96.0, 681.0], [96.1, 687.0], [96.2, 691.0], [96.3, 697.0], [96.4, 708.0], [96.5, 716.0], [96.6, 727.0], [96.7, 733.0], [96.8, 741.0], [96.9, 748.0], [97.0, 752.0], [97.1, 762.0], [97.2, 771.0], [97.3, 780.0], [97.4, 790.0], [97.5, 802.0], [97.6, 809.0], [97.7, 816.0], [97.8, 830.0], [97.9, 843.0], [98.0, 860.0], [98.1, 876.0], [98.2, 893.0], [98.3, 921.0], [98.4, 957.0], [98.5, 983.0], [98.6, 1066.0], [98.7, 1124.0], [98.8, 1135.0], [98.9, 1140.0], [99.0, 1143.0], [99.1, 1149.0], [99.2, 1158.0], [99.3, 1210.0], [99.4, 1286.0], [99.5, 1379.0], [99.6, 1506.0], [99.7, 1671.0], [99.8, 1939.0], [99.9, 2347.0], [100.0, 3557.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 7708.0, "series": [{"data": [[600.0, 184.0], [700.0, 118.0], [800.0, 72.0], [900.0, 30.0], [1000.0, 15.0], [1100.0, 61.0], [1200.0, 16.0], [1300.0, 10.0], [1400.0, 6.0], [1500.0, 8.0], [100.0, 7708.0], [1600.0, 4.0], [1700.0, 6.0], [1800.0, 2.0], [1900.0, 3.0], [2000.0, 2.0], [2100.0, 3.0], [2300.0, 3.0], [2200.0, 2.0], [2400.0, 1.0], [2500.0, 1.0], [2600.0, 4.0], [200.0, 417.0], [3300.0, 1.0], [3200.0, 1.0], [3500.0, 1.0], [300.0, 529.0], [400.0, 501.0], [500.0, 291.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 41.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 9159.0, "series": [{"data": [[0.0, 9159.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 800.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 41.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.72434132E12, "maxY": 2.8993288590604025, "series": [{"data": [[1.72434324E12, 1.1433333333333338], [1.72434132E12, 2.825000000000002], [1.72434294E12, 1.3433333333333344], [1.72434192E12, 2.5567010309278357], [1.72434162E12, 1.056666666666666], [1.72434204E12, 1.0836120401337797], [1.72434174E12, 2.250000000000002], [1.72434264E12, 1.1036789297658867], [1.72434234E12, 2.240802675585283], [1.7243418E12, 1.5083612040133785], [1.7243415E12, 1.0702341137123739], [1.7243424E12, 2.8993288590604025], [1.7243421E12, 1.1066666666666678], [1.72434252E12, 1.1096345514950166], [1.72434222E12, 1.2909698996655528], [1.72434312E12, 1.0993377483443705], [1.72434282E12, 1.1799999999999997], [1.72434228E12, 2.4801324503311255], [1.72434198E12, 2.1363636363636376], [1.72434288E12, 1.3076923076923084], [1.72434258E12, 1.102310231023102], [1.724343E12, 1.5484949832775918], [1.7243427E12, 1.1262458471760803], [1.72434168E12, 1.9200000000000004], [1.7243433E12, 1.13], [1.72434138E12, 1.0838926174496648], [1.72434276E12, 1.0402684563758386], [1.72434246E12, 2.159468438538207], [1.72434336E12, 1.0], [1.72434144E12, 1.1390728476821192], [1.72434306E12, 1.1029900332225908], [1.72434156E12, 1.1233333333333333], [1.72434318E12, 1.0930232558139548], [1.72434216E12, 1.11], [1.72434186E12, 2.355481727574754]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72434336E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 147.54593541202613, "minX": 1.0, "maxY": 2642.0, "series": [{"data": [[8.0, 1400.4], [2.0, 308.36002691790054], [9.0, 1555.8], [10.0, 1071.0], [11.0, 2178.0], [12.0, 2005.3333333333335], [3.0, 446.44469525959386], [13.0, 1611.0], [14.0, 1748.0], [15.0, 2642.0], [4.0, 568.805642633229], [1.0, 147.54593541202613], [5.0, 652.8305084745764], [6.0, 1007.8500000000001], [7.0, 1233.6363636363637]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.4940999999999987, 222.36589999999967]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 15.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 40.0, "minX": 1.72434132E12, "maxY": 40578.833333333336, "series": [{"data": [[1.72434324E12, 39514.78333333333], [1.72434132E12, 10538.666666666666], [1.72434294E12, 39523.88333333333], [1.72434192E12, 38338.833333333336], [1.72434162E12, 39522.3], [1.72434204E12, 39382.88333333333], [1.72434174E12, 39524.03333333333], [1.72434264E12, 39382.916666666664], [1.72434234E12, 39392.13333333333], [1.7243418E12, 39392.63333333333], [1.7243415E12, 39385.5], [1.7243424E12, 39260.73333333333], [1.7243421E12, 39517.03333333333], [1.72434252E12, 39656.5], [1.72434222E12, 39391.2], [1.72434312E12, 39788.21666666667], [1.72434282E12, 39522.55], [1.72434228E12, 39787.05], [1.72434198E12, 40578.833333333336], [1.72434288E12, 39391.55], [1.72434258E12, 39919.98333333333], [1.724343E12, 39392.35], [1.7243427E12, 39648.51666666667], [1.72434168E12, 39523.38333333333], [1.7243433E12, 39517.1], [1.72434138E12, 39256.666666666664], [1.72434276E12, 39258.28333333333], [1.72434246E12, 39656.166666666664], [1.72434336E12, 2634.8333333333335], [1.72434144E12, 39778.03333333333], [1.72434306E12, 39656.35], [1.72434156E12, 39521.88333333333], [1.72434318E12, 39656.61666666667], [1.72434216E12, 39521.23333333333], [1.72434186E12, 39656.28333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.72434324E12, 600.0], [1.72434132E12, 160.0], [1.72434294E12, 600.0], [1.72434192E12, 582.0], [1.72434162E12, 600.0], [1.72434204E12, 598.0], [1.72434174E12, 600.0], [1.72434264E12, 598.0], [1.72434234E12, 598.0], [1.7243418E12, 598.0], [1.7243415E12, 598.0], [1.7243424E12, 596.0], [1.7243421E12, 600.0], [1.72434252E12, 602.0], [1.72434222E12, 598.0], [1.72434312E12, 604.0], [1.72434282E12, 600.0], [1.72434228E12, 604.0], [1.72434198E12, 616.0], [1.72434288E12, 598.0], [1.72434258E12, 606.0], [1.724343E12, 598.0], [1.7243427E12, 602.0], [1.72434168E12, 600.0], [1.7243433E12, 600.0], [1.72434138E12, 596.0], [1.72434276E12, 596.0], [1.72434246E12, 602.0], [1.72434336E12, 40.0], [1.72434144E12, 604.0], [1.72434306E12, 602.0], [1.72434156E12, 600.0], [1.72434318E12, 602.0], [1.72434216E12, 600.0], [1.72434186E12, 602.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72434336E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 125.55, "minX": 1.72434132E12, "maxY": 479.0250000000001, "series": [{"data": [[1.72434324E12, 145.2233333333333], [1.72434132E12, 479.0250000000001], [1.72434294E12, 201.05333333333343], [1.72434192E12, 420.14089347079033], [1.72434162E12, 144.76333333333343], [1.72434204E12, 142.05685618729092], [1.72434174E12, 356.6833333333333], [1.72434264E12, 154.10033444816062], [1.72434234E12, 353.3210702341137], [1.7243418E12, 223.3979933110369], [1.7243415E12, 145.99331103678938], [1.7243424E12, 475.1140939597318], [1.7243421E12, 149.85333333333338], [1.72434252E12, 155.20598006644522], [1.72434222E12, 184.6020066889633], [1.72434312E12, 145.89403973509943], [1.72434282E12, 166.05333333333328], [1.72434228E12, 403.60927152317856], [1.72434198E12, 352.6428571428571], [1.72434288E12, 193.7357859531772], [1.72434258E12, 152.47194719471943], [1.724343E12, 229.438127090301], [1.7243427E12, 156.54485049833877], [1.72434168E12, 302.03000000000003], [1.7243433E12, 150.5466666666667], [1.72434138E12, 147.56040268456374], [1.72434276E12, 140.9295302013425], [1.72434246E12, 344.41196013289033], [1.72434336E12, 125.55], [1.72434144E12, 158.7152317880795], [1.72434306E12, 149.37873754152818], [1.72434156E12, 157.63666666666657], [1.72434318E12, 144.52823920265783], [1.72434216E12, 155.12666666666672], [1.72434186E12, 376.3687707641199]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72434336E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 124.84999999999998, "minX": 1.72434132E12, "maxY": 475.07499999999993, "series": [{"data": [[1.72434324E12, 143.43000000000004], [1.72434132E12, 475.07499999999993], [1.72434294E12, 199.42333333333335], [1.72434192E12, 419.19931271477674], [1.72434162E12, 143.92000000000016], [1.72434204E12, 141.37458193979938], [1.72434174E12, 355.6799999999998], [1.72434264E12, 153.43143812709033], [1.72434234E12, 349.57525083612023], [1.7243418E12, 221.40133779264218], [1.7243415E12, 144.25752508361217], [1.7243424E12, 474.255033557047], [1.7243421E12, 148.76666666666668], [1.72434252E12, 154.4983388704318], [1.72434222E12, 182.6421404682274], [1.72434312E12, 143.68874172185426], [1.72434282E12, 165.20666666666665], [1.72434228E12, 400.970198675497], [1.72434198E12, 350.79220779220765], [1.72434288E12, 192.89966555183946], [1.72434258E12, 151.7293729372938], [1.724343E12, 226.5518394648828], [1.7243427E12, 155.48504983388693], [1.72434168E12, 301.41333333333324], [1.7243433E12, 148.8666666666667], [1.72434138E12, 146.47651006711413], [1.72434276E12, 140.0738255033558], [1.72434246E12, 342.4684385382056], [1.72434336E12, 124.84999999999998], [1.72434144E12, 156.92052980132448], [1.72434306E12, 148.5182724252491], [1.72434156E12, 156.70000000000005], [1.72434318E12, 143.73421926910297], [1.72434216E12, 154.0266666666667], [1.72434186E12, 375.60797342192706]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72434336E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 84.2, "minX": 1.72434132E12, "maxY": 415.9194630872483, "series": [{"data": [[1.72434324E12, 95.1933333333334], [1.72434132E12, 407.4749999999999], [1.72434294E12, 140.61000000000013], [1.72434192E12, 371.77663230240523], [1.72434162E12, 97.18333333333335], [1.72434204E12, 96.37792642140471], [1.72434174E12, 309.003333333333], [1.72434264E12, 105.79933110367885], [1.72434234E12, 304.9431438127089], [1.7243418E12, 177.53846153846152], [1.7243415E12, 98.2240802675585], [1.7243424E12, 415.9194630872483], [1.7243421E12, 100.91999999999994], [1.72434252E12, 109.25913621262461], [1.72434222E12, 137.4481605351172], [1.72434312E12, 99.63576158940403], [1.72434282E12, 116.21], [1.72434228E12, 354.14900662251625], [1.72434198E12, 303.3409090909091], [1.72434288E12, 130.16387959866208], [1.72434258E12, 103.20792079207921], [1.724343E12, 149.24749163879596], [1.7243427E12, 108.86710963455153], [1.72434168E12, 254.82000000000005], [1.7243433E12, 105.3166666666667], [1.72434138E12, 101.17449664429532], [1.72434276E12, 95.7885906040268], [1.72434246E12, 285.2491694352156], [1.72434336E12, 84.2], [1.72434144E12, 105.15894039735102], [1.72434306E12, 105.8704318936877], [1.72434156E12, 106.93333333333332], [1.72434318E12, 101.44518272425248], [1.72434216E12, 107.05666666666662], [1.72434186E12, 328.39202657807294]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72434336E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 116.0, "minX": 1.72434132E12, "maxY": 3557.0, "series": [{"data": [[1.72434324E12, 1143.0], [1.72434132E12, 2687.0], [1.72434294E12, 1379.0], [1.72434192E12, 2680.0], [1.72434162E12, 1146.0], [1.72434204E12, 453.0], [1.72434174E12, 1441.0], [1.72434264E12, 1158.0], [1.72434234E12, 1939.0], [1.7243418E12, 1635.0], [1.7243415E12, 440.0], [1.7243424E12, 1790.0], [1.7243421E12, 1149.0], [1.72434252E12, 1292.0], [1.72434222E12, 1138.0], [1.72434312E12, 1141.0], [1.72434282E12, 1149.0], [1.72434228E12, 1581.0], [1.72434198E12, 3557.0], [1.72434288E12, 1246.0], [1.72434258E12, 1145.0], [1.724343E12, 1349.0], [1.7243427E12, 1150.0], [1.72434168E12, 1671.0], [1.7243433E12, 1140.0], [1.72434138E12, 1144.0], [1.72434276E12, 1137.0], [1.72434246E12, 1706.0], [1.72434336E12, 134.0], [1.72434144E12, 1148.0], [1.72434306E12, 1142.0], [1.72434156E12, 1247.0], [1.72434318E12, 1195.0], [1.72434216E12, 1149.0], [1.72434186E12, 1168.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.72434324E12, 139.90000000000003], [1.72434132E12, 1788.8000000000022], [1.72434294E12, 390.90000000000003], [1.72434192E12, 751.8], [1.72434162E12, 144.0], [1.72434204E12, 144.0], [1.72434174E12, 668.0], [1.72434264E12, 147.0], [1.72434234E12, 609.0], [1.7243418E12, 516.0], [1.7243415E12, 145.0], [1.7243424E12, 835.0], [1.7243421E12, 143.0], [1.72434252E12, 146.0], [1.72434222E12, 390.0], [1.72434312E12, 141.39999999999998], [1.72434282E12, 227.4000000000002], [1.72434228E12, 678.1999999999999], [1.72434198E12, 990.6000000000024], [1.72434288E12, 388.0], [1.72434258E12, 145.60000000000002], [1.724343E12, 406.0], [1.7243427E12, 147.8], [1.72434168E12, 674.6000000000005], [1.7243433E12, 138.0], [1.72434138E12, 147.10000000000002], [1.72434276E12, 144.0], [1.72434246E12, 726.0000000000002], [1.72434336E12, 132.9], [1.72434144E12, 153.39999999999998], [1.72434306E12, 139.8], [1.72434156E12, 150.0], [1.72434318E12, 139.0], [1.72434216E12, 145.0], [1.72434186E12, 724.0000000000002]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.72434324E12, 611.1800000000017], [1.72434132E12, 2687.0], [1.72434294E12, 1137.96], [1.72434192E12, 1824.7999999999888], [1.72434162E12, 424.7600000000002], [1.72434204E12, 396.0], [1.72434174E12, 982.8500000000001], [1.72434264E12, 1123.0], [1.72434234E12, 1210.0], [1.7243418E12, 1420.0], [1.7243415E12, 415.0], [1.7243424E12, 1389.329999999997], [1.7243421E12, 444.95000000000005], [1.72434252E12, 510.64000000000124], [1.72434222E12, 719.0], [1.72434312E12, 451.7899999999998], [1.72434282E12, 1126.6400000000021], [1.72434228E12, 1092.7999999999959], [1.72434198E12, 3190.5700000000234], [1.72434288E12, 522.0], [1.72434258E12, 634.3199999999961], [1.724343E12, 1149.0], [1.7243427E12, 1118.2800000000125], [1.72434168E12, 1547.4500000000005], [1.7243433E12, 1137.8600000000001], [1.72434138E12, 434.0799999999999], [1.72434276E12, 411.16999999999985], [1.72434246E12, 1229.3400000000015], [1.72434336E12, 134.0], [1.72434144E12, 847.3399999999964], [1.72434306E12, 1127.9], [1.72434156E12, 451.97], [1.72434318E12, 1113.1200000000126], [1.72434216E12, 669.740000000002], [1.72434186E12, 1058.6200000000022]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.72434324E12, 173.79999999999995], [1.72434132E12, 2566.7000000000007], [1.72434294E12, 406.0], [1.72434192E12, 993.9999999999991], [1.72434162E12, 149.95], [1.72434204E12, 151.0], [1.72434174E12, 757.95], [1.72434264E12, 211.0], [1.72434234E12, 748.0], [1.7243418E12, 624.0], [1.7243415E12, 181.0], [1.7243424E12, 962.45], [1.7243421E12, 180.64999999999992], [1.72434252E12, 234.59999999999968], [1.72434222E12, 521.0], [1.72434312E12, 253.44999999999942], [1.72434282E12, 342.5499999999999], [1.72434228E12, 751.55], [1.72434198E12, 1673.7500000000016], [1.72434288E12, 406.0], [1.72434258E12, 222.20000000000078], [1.724343E12, 417.0], [1.7243427E12, 340.4999999999999], [1.72434168E12, 829.8499999999999], [1.7243433E12, 212.89999999999998], [1.72434138E12, 172.0], [1.72434276E12, 152.05], [1.72434246E12, 839.9999999999998], [1.72434336E12, 133.95], [1.72434144E12, 283.8499999999986], [1.72434306E12, 194.7999999999995], [1.72434156E12, 345.74999999999994], [1.72434318E12, 151.0], [1.72434216E12, 275.39999999999986], [1.72434186E12, 827.4999999999997]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.72434324E12, 117.0], [1.72434132E12, 129.0], [1.72434294E12, 116.0], [1.72434192E12, 124.0], [1.72434162E12, 120.0], [1.72434204E12, 117.0], [1.72434174E12, 118.0], [1.72434264E12, 117.0], [1.72434234E12, 117.0], [1.7243418E12, 120.0], [1.7243415E12, 121.0], [1.7243424E12, 121.0], [1.7243421E12, 118.0], [1.72434252E12, 120.0], [1.72434222E12, 117.0], [1.72434312E12, 117.0], [1.72434282E12, 119.0], [1.72434228E12, 130.0], [1.72434198E12, 118.0], [1.72434288E12, 120.0], [1.72434258E12, 117.0], [1.724343E12, 117.0], [1.7243427E12, 117.0], [1.72434168E12, 117.0], [1.7243433E12, 116.0], [1.72434138E12, 122.0], [1.72434276E12, 118.0], [1.72434246E12, 120.0], [1.72434336E12, 117.0], [1.72434144E12, 118.0], [1.72434306E12, 117.0], [1.72434156E12, 118.0], [1.72434318E12, 117.0], [1.72434216E12, 121.0], [1.72434186E12, 123.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.72434324E12, 128.0], [1.72434132E12, 148.0], [1.72434294E12, 135.0], [1.72434192E12, 379.0], [1.72434162E12, 136.0], [1.72434204E12, 136.0], [1.72434174E12, 282.5], [1.72434264E12, 135.0], [1.72434234E12, 285.0], [1.7243418E12, 139.0], [1.7243415E12, 137.0], [1.7243424E12, 461.0], [1.7243421E12, 136.0], [1.72434252E12, 137.0], [1.72434222E12, 134.0], [1.72434312E12, 127.0], [1.72434282E12, 137.0], [1.72434228E12, 386.0], [1.72434198E12, 137.0], [1.72434288E12, 136.0], [1.72434258E12, 135.0], [1.724343E12, 137.0], [1.7243427E12, 135.0], [1.72434168E12, 144.0], [1.7243433E12, 128.0], [1.72434138E12, 138.5], [1.72434276E12, 134.0], [1.72434246E12, 205.0], [1.72434336E12, 124.5], [1.72434144E12, 137.0], [1.72434306E12, 127.0], [1.72434156E12, 136.0], [1.72434318E12, 127.0], [1.72434216E12, 136.0], [1.72434186E12, 340.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72434336E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 135.0, "minX": 1.0, "maxY": 1462.5, "series": [{"data": [[4.0, 147.0], [2.0, 532.0], [8.0, 485.5], [1.0, 737.0], [9.0, 704.0], [20.0, 1308.5], [5.0, 135.0], [10.0, 601.0], [6.0, 185.0], [3.0, 329.0], [12.0, 1462.5], [7.0, 320.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 134.0, "minX": 1.0, "maxY": 1462.0, "series": [{"data": [[4.0, 144.5], [2.0, 532.0], [8.0, 484.5], [1.0, 736.5], [9.0, 704.0], [20.0, 1303.5], [5.0, 134.0], [10.0, 598.5], [6.0, 184.0], [3.0, 309.5], [12.0, 1462.0], [7.0, 315.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.31666666666666665, "minX": 1.72434132E12, "maxY": 5.05, "series": [{"data": [[1.72434324E12, 5.0], [1.72434132E12, 1.35], [1.72434294E12, 5.0], [1.72434192E12, 5.016666666666667], [1.72434162E12, 5.0], [1.72434204E12, 4.966666666666667], [1.72434174E12, 5.016666666666667], [1.72434264E12, 4.983333333333333], [1.72434234E12, 5.0], [1.7243418E12, 5.0], [1.7243415E12, 5.0], [1.7243424E12, 5.0], [1.7243421E12, 5.016666666666667], [1.72434252E12, 5.016666666666667], [1.72434222E12, 5.0], [1.72434312E12, 5.016666666666667], [1.72434282E12, 5.0], [1.72434228E12, 5.016666666666667], [1.72434198E12, 4.983333333333333], [1.72434288E12, 4.983333333333333], [1.72434258E12, 5.05], [1.724343E12, 5.0], [1.7243427E12, 5.016666666666667], [1.72434168E12, 4.983333333333333], [1.7243433E12, 5.0], [1.72434138E12, 4.983333333333333], [1.72434276E12, 4.966666666666667], [1.72434246E12, 4.966666666666667], [1.72434336E12, 0.31666666666666665], [1.72434144E12, 5.0], [1.72434306E12, 5.016666666666667], [1.72434156E12, 5.0], [1.72434318E12, 5.016666666666667], [1.72434216E12, 5.0], [1.72434186E12, 4.983333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72434336E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.72434132E12, "maxY": 5.133333333333334, "series": [{"data": [[1.72434324E12, 5.0], [1.72434132E12, 1.3333333333333333], [1.72434294E12, 5.0], [1.72434192E12, 4.85], [1.72434162E12, 5.0], [1.72434204E12, 4.983333333333333], [1.72434174E12, 5.0], [1.72434264E12, 4.983333333333333], [1.72434234E12, 4.983333333333333], [1.7243418E12, 4.983333333333333], [1.7243415E12, 4.983333333333333], [1.7243424E12, 4.966666666666667], [1.7243421E12, 5.0], [1.72434252E12, 5.016666666666667], [1.72434222E12, 4.983333333333333], [1.72434312E12, 5.033333333333333], [1.72434282E12, 5.0], [1.72434228E12, 5.033333333333333], [1.72434198E12, 5.133333333333334], [1.72434288E12, 4.983333333333333], [1.72434258E12, 5.05], [1.724343E12, 4.983333333333333], [1.7243427E12, 5.016666666666667], [1.72434168E12, 5.0], [1.7243433E12, 5.0], [1.72434138E12, 4.966666666666667], [1.72434276E12, 4.966666666666667], [1.72434246E12, 5.016666666666667], [1.72434336E12, 0.3333333333333333], [1.72434144E12, 5.033333333333333], [1.72434306E12, 5.016666666666667], [1.72434156E12, 5.0], [1.72434318E12, 5.016666666666667], [1.72434216E12, 5.0], [1.72434186E12, 5.016666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72434336E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.72434132E12, "maxY": 5.133333333333334, "series": [{"data": [[1.72434324E12, 5.0], [1.72434132E12, 1.3333333333333333], [1.72434294E12, 5.0], [1.72434192E12, 4.85], [1.72434162E12, 5.0], [1.72434204E12, 4.983333333333333], [1.72434174E12, 5.0], [1.72434264E12, 4.983333333333333], [1.72434234E12, 4.983333333333333], [1.7243418E12, 4.983333333333333], [1.7243415E12, 4.983333333333333], [1.7243424E12, 4.966666666666667], [1.7243421E12, 5.0], [1.72434252E12, 5.016666666666667], [1.72434222E12, 4.983333333333333], [1.72434312E12, 5.033333333333333], [1.72434282E12, 5.0], [1.72434228E12, 5.033333333333333], [1.72434198E12, 5.133333333333334], [1.72434288E12, 4.983333333333333], [1.72434258E12, 5.05], [1.724343E12, 4.983333333333333], [1.7243427E12, 5.016666666666667], [1.72434168E12, 5.0], [1.7243433E12, 5.0], [1.72434138E12, 4.966666666666667], [1.72434276E12, 4.966666666666667], [1.72434246E12, 5.016666666666667], [1.72434336E12, 0.3333333333333333], [1.72434144E12, 5.033333333333333], [1.72434306E12, 5.016666666666667], [1.72434156E12, 5.0], [1.72434318E12, 5.016666666666667], [1.72434216E12, 5.0], [1.72434186E12, 5.016666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72434336E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.72434132E12, "maxY": 5.133333333333334, "series": [{"data": [[1.72434324E12, 5.0], [1.72434132E12, 1.3333333333333333], [1.72434294E12, 5.0], [1.72434192E12, 4.85], [1.72434162E12, 5.0], [1.72434204E12, 4.983333333333333], [1.72434174E12, 5.0], [1.72434264E12, 4.983333333333333], [1.72434234E12, 4.983333333333333], [1.7243418E12, 4.983333333333333], [1.7243415E12, 4.983333333333333], [1.7243424E12, 4.966666666666667], [1.7243421E12, 5.0], [1.72434252E12, 5.016666666666667], [1.72434222E12, 4.983333333333333], [1.72434312E12, 5.033333333333333], [1.72434282E12, 5.0], [1.72434228E12, 5.033333333333333], [1.72434198E12, 5.133333333333334], [1.72434288E12, 4.983333333333333], [1.72434258E12, 5.05], [1.724343E12, 4.983333333333333], [1.7243427E12, 5.016666666666667], [1.72434168E12, 5.0], [1.7243433E12, 5.0], [1.72434138E12, 4.966666666666667], [1.72434276E12, 4.966666666666667], [1.72434246E12, 5.016666666666667], [1.72434336E12, 0.3333333333333333], [1.72434144E12, 5.033333333333333], [1.72434306E12, 5.016666666666667], [1.72434156E12, 5.0], [1.72434318E12, 5.016666666666667], [1.72434216E12, 5.0], [1.72434186E12, 5.016666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72434336E12, "title": "Total Transactions Per Second"}},
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

