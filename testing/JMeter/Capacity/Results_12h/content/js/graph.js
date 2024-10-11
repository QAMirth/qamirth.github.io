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
        data: {"result": {"minY": 153.0, "minX": 0.0, "maxY": 3287.0, "series": [{"data": [[0.0, 153.0], [0.1, 157.0], [0.2, 158.0], [0.3, 159.0], [0.4, 159.0], [0.5, 159.0], [0.6, 160.0], [0.7, 160.0], [0.8, 160.0], [0.9, 160.0], [1.0, 161.0], [1.1, 161.0], [1.2, 161.0], [1.3, 161.0], [1.4, 161.0], [1.5, 161.0], [1.6, 161.0], [1.7, 162.0], [1.8, 162.0], [1.9, 162.0], [2.0, 162.0], [2.1, 162.0], [2.2, 162.0], [2.3, 162.0], [2.4, 162.0], [2.5, 162.0], [2.6, 162.0], [2.7, 163.0], [2.8, 163.0], [2.9, 163.0], [3.0, 163.0], [3.1, 163.0], [3.2, 163.0], [3.3, 163.0], [3.4, 163.0], [3.5, 163.0], [3.6, 163.0], [3.7, 163.0], [3.8, 163.0], [3.9, 163.0], [4.0, 164.0], [4.1, 164.0], [4.2, 164.0], [4.3, 164.0], [4.4, 164.0], [4.5, 164.0], [4.6, 164.0], [4.7, 164.0], [4.8, 164.0], [4.9, 164.0], [5.0, 164.0], [5.1, 164.0], [5.2, 164.0], [5.3, 164.0], [5.4, 165.0], [5.5, 165.0], [5.6, 165.0], [5.7, 165.0], [5.8, 165.0], [5.9, 165.0], [6.0, 165.0], [6.1, 165.0], [6.2, 165.0], [6.3, 165.0], [6.4, 165.0], [6.5, 165.0], [6.6, 165.0], [6.7, 165.0], [6.8, 165.0], [6.9, 165.0], [7.0, 165.0], [7.1, 165.0], [7.2, 165.0], [7.3, 165.0], [7.4, 165.0], [7.5, 165.0], [7.6, 166.0], [7.7, 166.0], [7.8, 166.0], [7.9, 166.0], [8.0, 166.0], [8.1, 166.0], [8.2, 166.0], [8.3, 166.0], [8.4, 166.0], [8.5, 166.0], [8.6, 166.0], [8.7, 166.0], [8.8, 166.0], [8.9, 166.0], [9.0, 166.0], [9.1, 166.0], [9.2, 166.0], [9.3, 166.0], [9.4, 166.0], [9.5, 166.0], [9.6, 166.0], [9.7, 166.0], [9.8, 166.0], [9.9, 166.0], [10.0, 166.0], [10.1, 166.0], [10.2, 166.0], [10.3, 166.0], [10.4, 167.0], [10.5, 167.0], [10.6, 167.0], [10.7, 167.0], [10.8, 167.0], [10.9, 167.0], [11.0, 167.0], [11.1, 167.0], [11.2, 167.0], [11.3, 167.0], [11.4, 167.0], [11.5, 167.0], [11.6, 167.0], [11.7, 167.0], [11.8, 167.0], [11.9, 167.0], [12.0, 167.0], [12.1, 167.0], [12.2, 167.0], [12.3, 167.0], [12.4, 167.0], [12.5, 167.0], [12.6, 167.0], [12.7, 167.0], [12.8, 167.0], [12.9, 167.0], [13.0, 167.0], [13.1, 167.0], [13.2, 167.0], [13.3, 167.0], [13.4, 167.0], [13.5, 168.0], [13.6, 168.0], [13.7, 168.0], [13.8, 168.0], [13.9, 168.0], [14.0, 168.0], [14.1, 168.0], [14.2, 168.0], [14.3, 168.0], [14.4, 168.0], [14.5, 168.0], [14.6, 168.0], [14.7, 168.0], [14.8, 168.0], [14.9, 168.0], [15.0, 168.0], [15.1, 168.0], [15.2, 168.0], [15.3, 168.0], [15.4, 168.0], [15.5, 168.0], [15.6, 168.0], [15.7, 168.0], [15.8, 168.0], [15.9, 168.0], [16.0, 168.0], [16.1, 168.0], [16.2, 168.0], [16.3, 168.0], [16.4, 168.0], [16.5, 168.0], [16.6, 168.0], [16.7, 168.0], [16.8, 168.0], [16.9, 168.0], [17.0, 169.0], [17.1, 169.0], [17.2, 169.0], [17.3, 169.0], [17.4, 169.0], [17.5, 169.0], [17.6, 169.0], [17.7, 169.0], [17.8, 169.0], [17.9, 169.0], [18.0, 169.0], [18.1, 169.0], [18.2, 169.0], [18.3, 169.0], [18.4, 169.0], [18.5, 169.0], [18.6, 169.0], [18.7, 169.0], [18.8, 169.0], [18.9, 169.0], [19.0, 169.0], [19.1, 169.0], [19.2, 169.0], [19.3, 169.0], [19.4, 169.0], [19.5, 169.0], [19.6, 169.0], [19.7, 169.0], [19.8, 169.0], [19.9, 169.0], [20.0, 169.0], [20.1, 169.0], [20.2, 169.0], [20.3, 169.0], [20.4, 169.0], [20.5, 169.0], [20.6, 169.0], [20.7, 169.0], [20.8, 169.0], [20.9, 169.0], [21.0, 170.0], [21.1, 170.0], [21.2, 170.0], [21.3, 170.0], [21.4, 170.0], [21.5, 170.0], [21.6, 170.0], [21.7, 170.0], [21.8, 170.0], [21.9, 170.0], [22.0, 170.0], [22.1, 170.0], [22.2, 170.0], [22.3, 170.0], [22.4, 170.0], [22.5, 170.0], [22.6, 170.0], [22.7, 170.0], [22.8, 170.0], [22.9, 170.0], [23.0, 170.0], [23.1, 170.0], [23.2, 170.0], [23.3, 170.0], [23.4, 170.0], [23.5, 170.0], [23.6, 170.0], [23.7, 170.0], [23.8, 170.0], [23.9, 170.0], [24.0, 170.0], [24.1, 170.0], [24.2, 170.0], [24.3, 170.0], [24.4, 170.0], [24.5, 170.0], [24.6, 170.0], [24.7, 170.0], [24.8, 170.0], [24.9, 170.0], [25.0, 171.0], [25.1, 171.0], [25.2, 171.0], [25.3, 171.0], [25.4, 171.0], [25.5, 171.0], [25.6, 171.0], [25.7, 171.0], [25.8, 171.0], [25.9, 171.0], [26.0, 171.0], [26.1, 171.0], [26.2, 171.0], [26.3, 171.0], [26.4, 171.0], [26.5, 171.0], [26.6, 171.0], [26.7, 171.0], [26.8, 171.0], [26.9, 171.0], [27.0, 171.0], [27.1, 171.0], [27.2, 171.0], [27.3, 171.0], [27.4, 171.0], [27.5, 171.0], [27.6, 171.0], [27.7, 171.0], [27.8, 171.0], [27.9, 171.0], [28.0, 171.0], [28.1, 171.0], [28.2, 171.0], [28.3, 171.0], [28.4, 171.0], [28.5, 171.0], [28.6, 171.0], [28.7, 171.0], [28.8, 171.0], [28.9, 171.0], [29.0, 171.0], [29.1, 171.0], [29.2, 171.0], [29.3, 171.0], [29.4, 171.0], [29.5, 172.0], [29.6, 172.0], [29.7, 172.0], [29.8, 172.0], [29.9, 172.0], [30.0, 172.0], [30.1, 172.0], [30.2, 172.0], [30.3, 172.0], [30.4, 172.0], [30.5, 172.0], [30.6, 172.0], [30.7, 172.0], [30.8, 172.0], [30.9, 172.0], [31.0, 172.0], [31.1, 172.0], [31.2, 172.0], [31.3, 172.0], [31.4, 172.0], [31.5, 172.0], [31.6, 172.0], [31.7, 172.0], [31.8, 172.0], [31.9, 172.0], [32.0, 172.0], [32.1, 172.0], [32.2, 172.0], [32.3, 172.0], [32.4, 172.0], [32.5, 172.0], [32.6, 172.0], [32.7, 172.0], [32.8, 172.0], [32.9, 172.0], [33.0, 172.0], [33.1, 172.0], [33.2, 172.0], [33.3, 172.0], [33.4, 172.0], [33.5, 172.0], [33.6, 172.0], [33.7, 172.0], [33.8, 172.0], [33.9, 172.0], [34.0, 173.0], [34.1, 173.0], [34.2, 173.0], [34.3, 173.0], [34.4, 173.0], [34.5, 173.0], [34.6, 173.0], [34.7, 173.0], [34.8, 173.0], [34.9, 173.0], [35.0, 173.0], [35.1, 173.0], [35.2, 173.0], [35.3, 173.0], [35.4, 173.0], [35.5, 173.0], [35.6, 173.0], [35.7, 173.0], [35.8, 173.0], [35.9, 173.0], [36.0, 173.0], [36.1, 173.0], [36.2, 173.0], [36.3, 173.0], [36.4, 173.0], [36.5, 173.0], [36.6, 173.0], [36.7, 173.0], [36.8, 173.0], [36.9, 173.0], [37.0, 173.0], [37.1, 173.0], [37.2, 173.0], [37.3, 173.0], [37.4, 173.0], [37.5, 173.0], [37.6, 173.0], [37.7, 173.0], [37.8, 173.0], [37.9, 173.0], [38.0, 173.0], [38.1, 173.0], [38.2, 173.0], [38.3, 173.0], [38.4, 173.0], [38.5, 173.0], [38.6, 173.0], [38.7, 173.0], [38.8, 173.0], [38.9, 174.0], [39.0, 174.0], [39.1, 174.0], [39.2, 174.0], [39.3, 174.0], [39.4, 174.0], [39.5, 174.0], [39.6, 174.0], [39.7, 174.0], [39.8, 174.0], [39.9, 174.0], [40.0, 174.0], [40.1, 174.0], [40.2, 174.0], [40.3, 174.0], [40.4, 174.0], [40.5, 174.0], [40.6, 174.0], [40.7, 174.0], [40.8, 174.0], [40.9, 174.0], [41.0, 174.0], [41.1, 174.0], [41.2, 174.0], [41.3, 174.0], [41.4, 174.0], [41.5, 174.0], [41.6, 174.0], [41.7, 174.0], [41.8, 174.0], [41.9, 174.0], [42.0, 174.0], [42.1, 174.0], [42.2, 174.0], [42.3, 174.0], [42.4, 174.0], [42.5, 174.0], [42.6, 174.0], [42.7, 174.0], [42.8, 174.0], [42.9, 174.0], [43.0, 174.0], [43.1, 174.0], [43.2, 174.0], [43.3, 174.0], [43.4, 174.0], [43.5, 175.0], [43.6, 175.0], [43.7, 175.0], [43.8, 175.0], [43.9, 175.0], [44.0, 175.0], [44.1, 175.0], [44.2, 175.0], [44.3, 175.0], [44.4, 175.0], [44.5, 175.0], [44.6, 175.0], [44.7, 175.0], [44.8, 175.0], [44.9, 175.0], [45.0, 175.0], [45.1, 175.0], [45.2, 175.0], [45.3, 175.0], [45.4, 175.0], [45.5, 175.0], [45.6, 175.0], [45.7, 175.0], [45.8, 175.0], [45.9, 175.0], [46.0, 175.0], [46.1, 175.0], [46.2, 175.0], [46.3, 175.0], [46.4, 175.0], [46.5, 175.0], [46.6, 175.0], [46.7, 175.0], [46.8, 175.0], [46.9, 175.0], [47.0, 175.0], [47.1, 175.0], [47.2, 175.0], [47.3, 175.0], [47.4, 175.0], [47.5, 175.0], [47.6, 175.0], [47.7, 175.0], [47.8, 175.0], [47.9, 175.0], [48.0, 175.0], [48.1, 176.0], [48.2, 176.0], [48.3, 176.0], [48.4, 176.0], [48.5, 176.0], [48.6, 176.0], [48.7, 176.0], [48.8, 176.0], [48.9, 176.0], [49.0, 176.0], [49.1, 176.0], [49.2, 176.0], [49.3, 176.0], [49.4, 176.0], [49.5, 176.0], [49.6, 176.0], [49.7, 176.0], [49.8, 176.0], [49.9, 176.0], [50.0, 176.0], [50.1, 176.0], [50.2, 176.0], [50.3, 176.0], [50.4, 176.0], [50.5, 176.0], [50.6, 176.0], [50.7, 176.0], [50.8, 176.0], [50.9, 176.0], [51.0, 176.0], [51.1, 176.0], [51.2, 176.0], [51.3, 176.0], [51.4, 176.0], [51.5, 176.0], [51.6, 177.0], [51.7, 177.0], [51.8, 177.0], [51.9, 177.0], [52.0, 177.0], [52.1, 177.0], [52.2, 177.0], [52.3, 177.0], [52.4, 177.0], [52.5, 177.0], [52.6, 177.0], [52.7, 177.0], [52.8, 177.0], [52.9, 177.0], [53.0, 177.0], [53.1, 177.0], [53.2, 177.0], [53.3, 177.0], [53.4, 177.0], [53.5, 177.0], [53.6, 177.0], [53.7, 177.0], [53.8, 177.0], [53.9, 177.0], [54.0, 177.0], [54.1, 177.0], [54.2, 177.0], [54.3, 177.0], [54.4, 177.0], [54.5, 177.0], [54.6, 177.0], [54.7, 177.0], [54.8, 177.0], [54.9, 177.0], [55.0, 177.0], [55.1, 177.0], [55.2, 177.0], [55.3, 178.0], [55.4, 178.0], [55.5, 178.0], [55.6, 178.0], [55.7, 178.0], [55.8, 178.0], [55.9, 178.0], [56.0, 178.0], [56.1, 178.0], [56.2, 178.0], [56.3, 178.0], [56.4, 178.0], [56.5, 178.0], [56.6, 178.0], [56.7, 178.0], [56.8, 178.0], [56.9, 178.0], [57.0, 178.0], [57.1, 178.0], [57.2, 178.0], [57.3, 178.0], [57.4, 178.0], [57.5, 178.0], [57.6, 178.0], [57.7, 178.0], [57.8, 178.0], [57.9, 178.0], [58.0, 178.0], [58.1, 178.0], [58.2, 178.0], [58.3, 178.0], [58.4, 178.0], [58.5, 179.0], [58.6, 179.0], [58.7, 179.0], [58.8, 179.0], [58.9, 179.0], [59.0, 179.0], [59.1, 179.0], [59.2, 179.0], [59.3, 179.0], [59.4, 179.0], [59.5, 179.0], [59.6, 179.0], [59.7, 179.0], [59.8, 179.0], [59.9, 179.0], [60.0, 179.0], [60.1, 179.0], [60.2, 179.0], [60.3, 179.0], [60.4, 179.0], [60.5, 179.0], [60.6, 179.0], [60.7, 179.0], [60.8, 179.0], [60.9, 179.0], [61.0, 179.0], [61.1, 179.0], [61.2, 179.0], [61.3, 179.0], [61.4, 179.0], [61.5, 179.0], [61.6, 179.0], [61.7, 180.0], [61.8, 180.0], [61.9, 180.0], [62.0, 180.0], [62.1, 180.0], [62.2, 180.0], [62.3, 180.0], [62.4, 180.0], [62.5, 180.0], [62.6, 180.0], [62.7, 180.0], [62.8, 180.0], [62.9, 180.0], [63.0, 180.0], [63.1, 180.0], [63.2, 180.0], [63.3, 180.0], [63.4, 180.0], [63.5, 180.0], [63.6, 180.0], [63.7, 180.0], [63.8, 180.0], [63.9, 180.0], [64.0, 180.0], [64.1, 180.0], [64.2, 180.0], [64.3, 180.0], [64.4, 181.0], [64.5, 181.0], [64.6, 181.0], [64.7, 181.0], [64.8, 181.0], [64.9, 181.0], [65.0, 181.0], [65.1, 181.0], [65.2, 181.0], [65.3, 181.0], [65.4, 181.0], [65.5, 181.0], [65.6, 181.0], [65.7, 181.0], [65.8, 181.0], [65.9, 181.0], [66.0, 181.0], [66.1, 181.0], [66.2, 181.0], [66.3, 181.0], [66.4, 181.0], [66.5, 181.0], [66.6, 181.0], [66.7, 181.0], [66.8, 181.0], [66.9, 181.0], [67.0, 181.0], [67.1, 182.0], [67.2, 182.0], [67.3, 182.0], [67.4, 182.0], [67.5, 182.0], [67.6, 182.0], [67.7, 182.0], [67.8, 182.0], [67.9, 182.0], [68.0, 182.0], [68.1, 182.0], [68.2, 182.0], [68.3, 182.0], [68.4, 182.0], [68.5, 182.0], [68.6, 182.0], [68.7, 182.0], [68.8, 182.0], [68.9, 182.0], [69.0, 182.0], [69.1, 182.0], [69.2, 182.0], [69.3, 182.0], [69.4, 182.0], [69.5, 182.0], [69.6, 182.0], [69.7, 182.0], [69.8, 182.0], [69.9, 182.0], [70.0, 183.0], [70.1, 183.0], [70.2, 183.0], [70.3, 183.0], [70.4, 183.0], [70.5, 183.0], [70.6, 183.0], [70.7, 183.0], [70.8, 183.0], [70.9, 183.0], [71.0, 183.0], [71.1, 183.0], [71.2, 183.0], [71.3, 183.0], [71.4, 183.0], [71.5, 183.0], [71.6, 183.0], [71.7, 183.0], [71.8, 183.0], [71.9, 183.0], [72.0, 183.0], [72.1, 183.0], [72.2, 183.0], [72.3, 183.0], [72.4, 183.0], [72.5, 183.0], [72.6, 183.0], [72.7, 183.0], [72.8, 183.0], [72.9, 183.0], [73.0, 183.0], [73.1, 184.0], [73.2, 184.0], [73.3, 184.0], [73.4, 184.0], [73.5, 184.0], [73.6, 184.0], [73.7, 184.0], [73.8, 184.0], [73.9, 184.0], [74.0, 184.0], [74.1, 184.0], [74.2, 184.0], [74.3, 184.0], [74.4, 184.0], [74.5, 184.0], [74.6, 184.0], [74.7, 184.0], [74.8, 184.0], [74.9, 184.0], [75.0, 184.0], [75.1, 184.0], [75.2, 184.0], [75.3, 184.0], [75.4, 184.0], [75.5, 184.0], [75.6, 184.0], [75.7, 184.0], [75.8, 184.0], [75.9, 184.0], [76.0, 185.0], [76.1, 185.0], [76.2, 185.0], [76.3, 185.0], [76.4, 185.0], [76.5, 185.0], [76.6, 185.0], [76.7, 185.0], [76.8, 185.0], [76.9, 185.0], [77.0, 185.0], [77.1, 185.0], [77.2, 185.0], [77.3, 185.0], [77.4, 185.0], [77.5, 185.0], [77.6, 185.0], [77.7, 185.0], [77.8, 185.0], [77.9, 185.0], [78.0, 185.0], [78.1, 185.0], [78.2, 185.0], [78.3, 185.0], [78.4, 185.0], [78.5, 185.0], [78.6, 185.0], [78.7, 186.0], [78.8, 186.0], [78.9, 186.0], [79.0, 186.0], [79.1, 186.0], [79.2, 186.0], [79.3, 186.0], [79.4, 186.0], [79.5, 186.0], [79.6, 186.0], [79.7, 186.0], [79.8, 186.0], [79.9, 186.0], [80.0, 186.0], [80.1, 186.0], [80.2, 186.0], [80.3, 186.0], [80.4, 186.0], [80.5, 186.0], [80.6, 186.0], [80.7, 186.0], [80.8, 186.0], [80.9, 186.0], [81.0, 186.0], [81.1, 186.0], [81.2, 186.0], [81.3, 187.0], [81.4, 187.0], [81.5, 187.0], [81.6, 187.0], [81.7, 187.0], [81.8, 187.0], [81.9, 187.0], [82.0, 187.0], [82.1, 187.0], [82.2, 187.0], [82.3, 187.0], [82.4, 187.0], [82.5, 187.0], [82.6, 187.0], [82.7, 187.0], [82.8, 187.0], [82.9, 187.0], [83.0, 187.0], [83.1, 187.0], [83.2, 187.0], [83.3, 187.0], [83.4, 187.0], [83.5, 188.0], [83.6, 188.0], [83.7, 188.0], [83.8, 188.0], [83.9, 188.0], [84.0, 188.0], [84.1, 188.0], [84.2, 188.0], [84.3, 188.0], [84.4, 188.0], [84.5, 188.0], [84.6, 188.0], [84.7, 188.0], [84.8, 188.0], [84.9, 188.0], [85.0, 188.0], [85.1, 188.0], [85.2, 189.0], [85.3, 189.0], [85.4, 189.0], [85.5, 189.0], [85.6, 189.0], [85.7, 189.0], [85.8, 189.0], [85.9, 189.0], [86.0, 189.0], [86.1, 189.0], [86.2, 189.0], [86.3, 190.0], [86.4, 190.0], [86.5, 190.0], [86.6, 190.0], [86.7, 190.0], [86.8, 190.0], [86.9, 190.0], [87.0, 190.0], [87.1, 190.0], [87.2, 191.0], [87.3, 191.0], [87.4, 191.0], [87.5, 191.0], [87.6, 191.0], [87.7, 191.0], [87.8, 191.0], [87.9, 191.0], [88.0, 191.0], [88.1, 191.0], [88.2, 192.0], [88.3, 192.0], [88.4, 192.0], [88.5, 192.0], [88.6, 192.0], [88.7, 192.0], [88.8, 193.0], [88.9, 193.0], [89.0, 193.0], [89.1, 193.0], [89.2, 193.0], [89.3, 193.0], [89.4, 193.0], [89.5, 194.0], [89.6, 194.0], [89.7, 194.0], [89.8, 194.0], [89.9, 194.0], [90.0, 194.0], [90.1, 195.0], [90.2, 195.0], [90.3, 195.0], [90.4, 196.0], [90.5, 196.0], [90.6, 196.0], [90.7, 196.0], [90.8, 197.0], [90.9, 197.0], [91.0, 197.0], [91.1, 197.0], [91.2, 198.0], [91.3, 198.0], [91.4, 199.0], [91.5, 199.0], [91.6, 199.0], [91.7, 200.0], [91.8, 200.0], [91.9, 200.0], [92.0, 201.0], [92.1, 201.0], [92.2, 201.0], [92.3, 201.0], [92.4, 202.0], [92.5, 202.0], [92.6, 203.0], [92.7, 203.0], [92.8, 203.0], [92.9, 203.0], [93.0, 204.0], [93.1, 204.0], [93.2, 205.0], [93.3, 205.0], [93.4, 205.0], [93.5, 205.0], [93.6, 206.0], [93.7, 207.0], [93.8, 207.0], [93.9, 208.0], [94.0, 209.0], [94.1, 209.0], [94.2, 210.0], [94.3, 210.0], [94.4, 211.0], [94.5, 212.0], [94.6, 212.0], [94.7, 213.0], [94.8, 213.0], [94.9, 214.0], [95.0, 215.0], [95.1, 216.0], [95.2, 217.0], [95.3, 217.0], [95.4, 219.0], [95.5, 220.0], [95.6, 221.0], [95.7, 224.0], [95.8, 224.0], [95.9, 225.0], [96.0, 228.0], [96.1, 231.0], [96.2, 233.0], [96.3, 236.0], [96.4, 239.0], [96.5, 240.0], [96.6, 243.0], [96.7, 251.0], [96.8, 256.0], [96.9, 258.0], [97.0, 262.0], [97.1, 264.0], [97.2, 266.0], [97.3, 267.0], [97.4, 272.0], [97.5, 275.0], [97.6, 279.0], [97.7, 295.0], [97.8, 323.0], [97.9, 381.0], [98.0, 434.0], [98.1, 451.0], [98.2, 465.0], [98.3, 473.0], [98.4, 478.0], [98.5, 479.0], [98.6, 488.0], [98.7, 499.0], [98.8, 513.0], [98.9, 544.0], [99.0, 836.0], [99.1, 1173.0], [99.2, 1182.0], [99.3, 1185.0], [99.4, 1199.0], [99.5, 1219.0], [99.6, 1603.0], [99.7, 1964.0], [99.8, 2374.0], [99.9, 2685.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 4582.0, "series": [{"data": [[2100.0, 1.0], [2200.0, 2.0], [2300.0, 1.0], [2400.0, 2.0], [2500.0, 1.0], [2600.0, 3.0], [700.0, 2.0], [800.0, 1.0], [200.0, 303.0], [3200.0, 3.0], [900.0, 4.0], [1100.0, 16.0], [300.0, 10.0], [1200.0, 5.0], [1300.0, 1.0], [1400.0, 2.0], [1500.0, 1.0], [1600.0, 5.0], [100.0, 4582.0], [400.0, 41.0], [1900.0, 1.0], [2000.0, 1.0], [500.0, 12.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 21.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4936.0, "series": [{"data": [[0.0, 4936.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 43.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 21.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.1052631578947336, "minX": 1.72860198E12, "maxY": 4.2727272727272725, "series": [{"data": [[1.7286021E12, 2.2487961476725533], [1.7286024E12, 2.1052631578947336], [1.72860198E12, 4.2727272727272725], [1.72860246E12, 2.185410334346504], [1.72860228E12, 2.2576000000000005], [1.72860234E12, 2.2153110047846907], [1.72860216E12, 2.2099358974358942], [1.72860222E12, 2.2124600638977645], [1.72860204E12, 2.194533762057876]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72860246E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 175.2692307692308, "minX": 1.0, "maxY": 2691.5, "series": [{"data": [[32.0, 2509.0], [2.0, 176.81908650165852], [3.0, 231.38179669030745], [4.0, 272.58677685950414], [5.0, 282.5], [6.0, 255.91666666666666], [7.0, 1221.0], [8.0, 1465.0], [9.0, 320.0], [10.0, 1528.0], [11.0, 300.0], [12.0, 329.0], [13.0, 976.0], [14.0, 2691.5], [15.0, 1684.0], [16.0, 973.0], [1.0, 175.2692307692308], [18.0, 1811.5], [19.0, 2175.0], [20.0, 963.0], [21.0, 1964.0], [22.0, 836.0], [23.0, 2494.0], [25.0, 2274.0], [26.0, 2019.0], [27.0, 2374.0], [28.0, 1608.0], [30.0, 1157.5], [31.0, 2211.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[2.3275999999999994, 197.26719999999983]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 32.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 594.0, "minX": 1.72860198E12, "maxY": 705688.65, "series": [{"data": [[1.7286021E12, 701180.85], [1.7286024E12, 705688.65], [1.72860198E12, 334262.0833333333], [1.72860246E12, 370289.8], [1.72860228E12, 703436.9666666667], [1.72860234E12, 705688.2], [1.72860216E12, 702310.0833333334], [1.72860222E12, 704561.9833333333], [1.72860204E12, 700043.1]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7286021E12, 1246.0], [1.7286024E12, 1254.0], [1.72860198E12, 594.0], [1.72860246E12, 658.0], [1.72860228E12, 1250.0], [1.72860234E12, 1254.0], [1.72860216E12, 1248.0], [1.72860222E12, 1252.0], [1.72860204E12, 1244.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72860246E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 180.73843700159495, "minX": 1.72860198E12, "maxY": 358.61279461279463, "series": [{"data": [[1.7286021E12, 190.2407704654896], [1.7286024E12, 180.73843700159495], [1.72860198E12, 358.61279461279463], [1.72860246E12, 189.1884498480245], [1.72860228E12, 189.33600000000015], [1.72860234E12, 191.22807017543855], [1.72860216E12, 187.94391025641028], [1.72860222E12, 185.86741214057503], [1.72860204E12, 183.08199356913158]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72860246E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 138.48803827751183, "minX": 1.72860198E12, "maxY": 303.92592592592587, "series": [{"data": [[1.7286021E12, 147.33547351524857], [1.7286024E12, 138.48803827751183], [1.72860198E12, 303.92592592592587], [1.72860246E12, 146.05471124620067], [1.72860228E12, 145.72159999999985], [1.72860234E12, 148.48325358851656], [1.72860216E12, 145.31089743589763], [1.72860222E12, 143.0559105431311], [1.72860204E12, 140.63022508038586]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72860246E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 89.71451355661883, "minX": 1.72860198E12, "maxY": 237.2659932659931, "series": [{"data": [[1.7286021E12, 98.51043338683787], [1.7286024E12, 89.71451355661883], [1.72860198E12, 237.2659932659931], [1.72860246E12, 96.98176291793311], [1.72860228E12, 95.71359999999993], [1.72860234E12, 98.10047846889945], [1.72860216E12, 96.448717948718], [1.72860222E12, 93.6437699680512], [1.72860204E12, 92.37459807073951]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72860246E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 153.0, "minX": 1.72860198E12, "maxY": 3287.0, "series": [{"data": [[1.7286021E12, 1202.0], [1.7286024E12, 519.0], [1.72860198E12, 3287.0], [1.72860246E12, 1219.0], [1.72860228E12, 1185.0], [1.72860234E12, 1199.0], [1.72860216E12, 3252.0], [1.72860222E12, 1183.0], [1.72860204E12, 1199.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7286021E12, 194.0], [1.7286024E12, 188.0], [1.72860198E12, 736.7999999999986], [1.72860246E12, 192.0], [1.72860228E12, 194.0], [1.72860234E12, 191.0], [1.72860216E12, 189.5], [1.72860222E12, 193.30000000000007], [1.72860204E12, 196.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7286021E12, 1016.5199999999941], [1.7286024E12, 281.8800000000001], [1.72860198E12, 2709.5599999999895], [1.72860246E12, 492.8999999999997], [1.72860228E12, 507.8000000000002], [1.72860234E12, 533.3600000000017], [1.72860216E12, 458.0], [1.72860222E12, 476.0], [1.72860204E12, 277.77999999999975]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7286021E12, 211.79999999999995], [1.7286024E12, 197.0], [1.72860198E12, 1724.5999999999908], [1.72860246E12, 217.0], [1.72860228E12, 210.69999999999993], [1.72860234E12, 209.60000000000002], [1.72860216E12, 206.75], [1.72860222E12, 212.0], [1.72860204E12, 209.4000000000001]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.7286021E12, 155.0], [1.7286024E12, 153.0], [1.72860198E12, 159.0], [1.72860246E12, 160.0], [1.72860228E12, 160.0], [1.72860234E12, 157.0], [1.72860216E12, 156.0], [1.72860222E12, 157.0], [1.72860204E12, 157.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7286021E12, 172.0], [1.7286024E12, 176.0], [1.72860198E12, 183.0], [1.72860246E12, 177.0], [1.72860228E12, 177.0], [1.72860234E12, 177.0], [1.72860216E12, 176.0], [1.72860222E12, 177.0], [1.72860204E12, 174.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72860246E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 173.0, "minX": 1.0, "maxY": 1565.5, "series": [{"data": [[8.0, 178.5], [1.0, 182.0], [34.0, 1565.5], [9.0, 177.0], [10.0, 176.0], [11.0, 176.0], [12.0, 178.0], [6.0, 186.0], [13.0, 173.0], [7.0, 200.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 34.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 129.5, "minX": 1.0, "maxY": 1254.0, "series": [{"data": [[8.0, 136.0], [1.0, 142.0], [34.0, 1254.0], [9.0, 134.0], [10.0, 134.0], [11.0, 134.0], [12.0, 135.0], [6.0, 140.5], [13.0, 129.5], [7.0, 146.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 34.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.983333333333333, "minX": 1.72860198E12, "maxY": 10.45, "series": [{"data": [[1.7286021E12, 10.383333333333333], [1.7286024E12, 10.45], [1.72860198E12, 4.983333333333333], [1.72860246E12, 5.45], [1.72860228E12, 10.416666666666666], [1.72860234E12, 10.45], [1.72860216E12, 10.416666666666666], [1.72860222E12, 10.416666666666666], [1.72860204E12, 10.366666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72860246E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.95, "minX": 1.72860198E12, "maxY": 10.45, "series": [{"data": [[1.7286021E12, 10.383333333333333], [1.7286024E12, 10.45], [1.72860198E12, 4.95], [1.72860246E12, 5.483333333333333], [1.72860228E12, 10.416666666666666], [1.72860234E12, 10.45], [1.72860216E12, 10.4], [1.72860222E12, 10.433333333333334], [1.72860204E12, 10.366666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72860246E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.95, "minX": 1.72860198E12, "maxY": 10.45, "series": [{"data": [[1.7286021E12, 10.383333333333333], [1.7286024E12, 10.45], [1.72860198E12, 4.95], [1.72860246E12, 5.483333333333333], [1.72860228E12, 10.416666666666666], [1.72860234E12, 10.45], [1.72860216E12, 10.4], [1.72860222E12, 10.433333333333334], [1.72860204E12, 10.366666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72860246E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.95, "minX": 1.72860198E12, "maxY": 10.45, "series": [{"data": [[1.7286021E12, 10.383333333333333], [1.7286024E12, 10.45], [1.72860198E12, 4.95], [1.72860246E12, 5.483333333333333], [1.72860228E12, 10.416666666666666], [1.72860234E12, 10.45], [1.72860216E12, 10.4], [1.72860222E12, 10.433333333333334], [1.72860204E12, 10.366666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72860246E12, "title": "Total Transactions Per Second"}},
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
