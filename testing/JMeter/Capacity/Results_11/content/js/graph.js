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
        data: {"result": {"minY": 152.0, "minX": 0.0, "maxY": 11354.0, "series": [{"data": [[0.0, 152.0], [0.1, 157.0], [0.2, 158.0], [0.3, 159.0], [0.4, 160.0], [0.5, 160.0], [0.6, 160.0], [0.7, 161.0], [0.8, 161.0], [0.9, 161.0], [1.0, 161.0], [1.1, 162.0], [1.2, 162.0], [1.3, 162.0], [1.4, 162.0], [1.5, 162.0], [1.6, 162.0], [1.7, 162.0], [1.8, 163.0], [1.9, 163.0], [2.0, 163.0], [2.1, 163.0], [2.2, 163.0], [2.3, 163.0], [2.4, 163.0], [2.5, 163.0], [2.6, 163.0], [2.7, 163.0], [2.8, 164.0], [2.9, 164.0], [3.0, 164.0], [3.1, 164.0], [3.2, 164.0], [3.3, 164.0], [3.4, 164.0], [3.5, 164.0], [3.6, 164.0], [3.7, 164.0], [3.8, 164.0], [3.9, 164.0], [4.0, 164.0], [4.1, 165.0], [4.2, 165.0], [4.3, 165.0], [4.4, 165.0], [4.5, 165.0], [4.6, 165.0], [4.7, 165.0], [4.8, 165.0], [4.9, 165.0], [5.0, 165.0], [5.1, 165.0], [5.2, 165.0], [5.3, 165.0], [5.4, 165.0], [5.5, 165.0], [5.6, 165.0], [5.7, 165.0], [5.8, 165.0], [5.9, 165.0], [6.0, 166.0], [6.1, 166.0], [6.2, 166.0], [6.3, 166.0], [6.4, 166.0], [6.5, 166.0], [6.6, 166.0], [6.7, 166.0], [6.8, 166.0], [6.9, 166.0], [7.0, 166.0], [7.1, 166.0], [7.2, 166.0], [7.3, 166.0], [7.4, 166.0], [7.5, 166.0], [7.6, 166.0], [7.7, 166.0], [7.8, 166.0], [7.9, 166.0], [8.0, 166.0], [8.1, 166.0], [8.2, 166.0], [8.3, 166.0], [8.4, 167.0], [8.5, 167.0], [8.6, 167.0], [8.7, 167.0], [8.8, 167.0], [8.9, 167.0], [9.0, 167.0], [9.1, 167.0], [9.2, 167.0], [9.3, 167.0], [9.4, 167.0], [9.5, 167.0], [9.6, 167.0], [9.7, 167.0], [9.8, 167.0], [9.9, 167.0], [10.0, 167.0], [10.1, 167.0], [10.2, 167.0], [10.3, 167.0], [10.4, 167.0], [10.5, 167.0], [10.6, 167.0], [10.7, 167.0], [10.8, 167.0], [10.9, 167.0], [11.0, 167.0], [11.1, 167.0], [11.2, 168.0], [11.3, 168.0], [11.4, 168.0], [11.5, 168.0], [11.6, 168.0], [11.7, 168.0], [11.8, 168.0], [11.9, 168.0], [12.0, 168.0], [12.1, 168.0], [12.2, 168.0], [12.3, 168.0], [12.4, 168.0], [12.5, 168.0], [12.6, 168.0], [12.7, 168.0], [12.8, 168.0], [12.9, 168.0], [13.0, 168.0], [13.1, 168.0], [13.2, 168.0], [13.3, 168.0], [13.4, 168.0], [13.5, 168.0], [13.6, 168.0], [13.7, 168.0], [13.8, 168.0], [13.9, 168.0], [14.0, 168.0], [14.1, 168.0], [14.2, 168.0], [14.3, 168.0], [14.4, 168.0], [14.5, 168.0], [14.6, 168.0], [14.7, 169.0], [14.8, 169.0], [14.9, 169.0], [15.0, 169.0], [15.1, 169.0], [15.2, 169.0], [15.3, 169.0], [15.4, 169.0], [15.5, 169.0], [15.6, 169.0], [15.7, 169.0], [15.8, 169.0], [15.9, 169.0], [16.0, 169.0], [16.1, 169.0], [16.2, 169.0], [16.3, 169.0], [16.4, 169.0], [16.5, 169.0], [16.6, 169.0], [16.7, 169.0], [16.8, 169.0], [16.9, 169.0], [17.0, 169.0], [17.1, 169.0], [17.2, 169.0], [17.3, 169.0], [17.4, 169.0], [17.5, 169.0], [17.6, 169.0], [17.7, 169.0], [17.8, 169.0], [17.9, 169.0], [18.0, 169.0], [18.1, 169.0], [18.2, 169.0], [18.3, 169.0], [18.4, 169.0], [18.5, 170.0], [18.6, 170.0], [18.7, 170.0], [18.8, 170.0], [18.9, 170.0], [19.0, 170.0], [19.1, 170.0], [19.2, 170.0], [19.3, 170.0], [19.4, 170.0], [19.5, 170.0], [19.6, 170.0], [19.7, 170.0], [19.8, 170.0], [19.9, 170.0], [20.0, 170.0], [20.1, 170.0], [20.2, 170.0], [20.3, 170.0], [20.4, 170.0], [20.5, 170.0], [20.6, 170.0], [20.7, 170.0], [20.8, 170.0], [20.9, 170.0], [21.0, 170.0], [21.1, 170.0], [21.2, 170.0], [21.3, 170.0], [21.4, 170.0], [21.5, 170.0], [21.6, 170.0], [21.7, 170.0], [21.8, 170.0], [21.9, 170.0], [22.0, 170.0], [22.1, 170.0], [22.2, 170.0], [22.3, 170.0], [22.4, 170.0], [22.5, 170.0], [22.6, 170.0], [22.7, 170.0], [22.8, 170.0], [22.9, 171.0], [23.0, 171.0], [23.1, 171.0], [23.2, 171.0], [23.3, 171.0], [23.4, 171.0], [23.5, 171.0], [23.6, 171.0], [23.7, 171.0], [23.8, 171.0], [23.9, 171.0], [24.0, 171.0], [24.1, 171.0], [24.2, 171.0], [24.3, 171.0], [24.4, 171.0], [24.5, 171.0], [24.6, 171.0], [24.7, 171.0], [24.8, 171.0], [24.9, 171.0], [25.0, 171.0], [25.1, 171.0], [25.2, 171.0], [25.3, 171.0], [25.4, 171.0], [25.5, 171.0], [25.6, 171.0], [25.7, 171.0], [25.8, 171.0], [25.9, 171.0], [26.0, 171.0], [26.1, 171.0], [26.2, 171.0], [26.3, 171.0], [26.4, 171.0], [26.5, 171.0], [26.6, 171.0], [26.7, 171.0], [26.8, 171.0], [26.9, 171.0], [27.0, 171.0], [27.1, 171.0], [27.2, 171.0], [27.3, 171.0], [27.4, 172.0], [27.5, 172.0], [27.6, 172.0], [27.7, 172.0], [27.8, 172.0], [27.9, 172.0], [28.0, 172.0], [28.1, 172.0], [28.2, 172.0], [28.3, 172.0], [28.4, 172.0], [28.5, 172.0], [28.6, 172.0], [28.7, 172.0], [28.8, 172.0], [28.9, 172.0], [29.0, 172.0], [29.1, 172.0], [29.2, 172.0], [29.3, 172.0], [29.4, 172.0], [29.5, 172.0], [29.6, 172.0], [29.7, 172.0], [29.8, 172.0], [29.9, 172.0], [30.0, 172.0], [30.1, 172.0], [30.2, 172.0], [30.3, 172.0], [30.4, 172.0], [30.5, 172.0], [30.6, 172.0], [30.7, 172.0], [30.8, 172.0], [30.9, 172.0], [31.0, 172.0], [31.1, 172.0], [31.2, 172.0], [31.3, 172.0], [31.4, 172.0], [31.5, 172.0], [31.6, 172.0], [31.7, 172.0], [31.8, 172.0], [31.9, 172.0], [32.0, 172.0], [32.1, 172.0], [32.2, 172.0], [32.3, 172.0], [32.4, 173.0], [32.5, 173.0], [32.6, 173.0], [32.7, 173.0], [32.8, 173.0], [32.9, 173.0], [33.0, 173.0], [33.1, 173.0], [33.2, 173.0], [33.3, 173.0], [33.4, 173.0], [33.5, 173.0], [33.6, 173.0], [33.7, 173.0], [33.8, 173.0], [33.9, 173.0], [34.0, 173.0], [34.1, 173.0], [34.2, 173.0], [34.3, 173.0], [34.4, 173.0], [34.5, 173.0], [34.6, 173.0], [34.7, 173.0], [34.8, 173.0], [34.9, 173.0], [35.0, 173.0], [35.1, 173.0], [35.2, 173.0], [35.3, 173.0], [35.4, 173.0], [35.5, 173.0], [35.6, 173.0], [35.7, 173.0], [35.8, 173.0], [35.9, 173.0], [36.0, 173.0], [36.1, 173.0], [36.2, 173.0], [36.3, 173.0], [36.4, 173.0], [36.5, 173.0], [36.6, 173.0], [36.7, 173.0], [36.8, 173.0], [36.9, 173.0], [37.0, 173.0], [37.1, 173.0], [37.2, 173.0], [37.3, 173.0], [37.4, 174.0], [37.5, 174.0], [37.6, 174.0], [37.7, 174.0], [37.8, 174.0], [37.9, 174.0], [38.0, 174.0], [38.1, 174.0], [38.2, 174.0], [38.3, 174.0], [38.4, 174.0], [38.5, 174.0], [38.6, 174.0], [38.7, 174.0], [38.8, 174.0], [38.9, 174.0], [39.0, 174.0], [39.1, 174.0], [39.2, 174.0], [39.3, 174.0], [39.4, 174.0], [39.5, 174.0], [39.6, 174.0], [39.7, 174.0], [39.8, 174.0], [39.9, 174.0], [40.0, 174.0], [40.1, 174.0], [40.2, 174.0], [40.3, 174.0], [40.4, 174.0], [40.5, 174.0], [40.6, 174.0], [40.7, 174.0], [40.8, 174.0], [40.9, 174.0], [41.0, 174.0], [41.1, 174.0], [41.2, 174.0], [41.3, 174.0], [41.4, 174.0], [41.5, 174.0], [41.6, 174.0], [41.7, 174.0], [41.8, 174.0], [41.9, 174.0], [42.0, 174.0], [42.1, 174.0], [42.2, 174.0], [42.3, 174.0], [42.4, 174.0], [42.5, 174.0], [42.6, 175.0], [42.7, 175.0], [42.8, 175.0], [42.9, 175.0], [43.0, 175.0], [43.1, 175.0], [43.2, 175.0], [43.3, 175.0], [43.4, 175.0], [43.5, 175.0], [43.6, 175.0], [43.7, 175.0], [43.8, 175.0], [43.9, 175.0], [44.0, 175.0], [44.1, 175.0], [44.2, 175.0], [44.3, 175.0], [44.4, 175.0], [44.5, 175.0], [44.6, 175.0], [44.7, 175.0], [44.8, 175.0], [44.9, 175.0], [45.0, 175.0], [45.1, 175.0], [45.2, 175.0], [45.3, 175.0], [45.4, 175.0], [45.5, 175.0], [45.6, 175.0], [45.7, 175.0], [45.8, 175.0], [45.9, 175.0], [46.0, 175.0], [46.1, 175.0], [46.2, 175.0], [46.3, 175.0], [46.4, 175.0], [46.5, 175.0], [46.6, 175.0], [46.7, 175.0], [46.8, 175.0], [46.9, 175.0], [47.0, 175.0], [47.1, 176.0], [47.2, 176.0], [47.3, 176.0], [47.4, 176.0], [47.5, 176.0], [47.6, 176.0], [47.7, 176.0], [47.8, 176.0], [47.9, 176.0], [48.0, 176.0], [48.1, 176.0], [48.2, 176.0], [48.3, 176.0], [48.4, 176.0], [48.5, 176.0], [48.6, 176.0], [48.7, 176.0], [48.8, 176.0], [48.9, 176.0], [49.0, 176.0], [49.1, 176.0], [49.2, 176.0], [49.3, 176.0], [49.4, 176.0], [49.5, 176.0], [49.6, 176.0], [49.7, 176.0], [49.8, 176.0], [49.9, 176.0], [50.0, 176.0], [50.1, 176.0], [50.2, 176.0], [50.3, 176.0], [50.4, 176.0], [50.5, 176.0], [50.6, 176.0], [50.7, 176.0], [50.8, 176.0], [50.9, 176.0], [51.0, 176.0], [51.1, 176.0], [51.2, 176.0], [51.3, 177.0], [51.4, 177.0], [51.5, 177.0], [51.6, 177.0], [51.7, 177.0], [51.8, 177.0], [51.9, 177.0], [52.0, 177.0], [52.1, 177.0], [52.2, 177.0], [52.3, 177.0], [52.4, 177.0], [52.5, 177.0], [52.6, 177.0], [52.7, 177.0], [52.8, 177.0], [52.9, 177.0], [53.0, 177.0], [53.1, 177.0], [53.2, 177.0], [53.3, 177.0], [53.4, 177.0], [53.5, 177.0], [53.6, 177.0], [53.7, 177.0], [53.8, 177.0], [53.9, 177.0], [54.0, 177.0], [54.1, 177.0], [54.2, 177.0], [54.3, 177.0], [54.4, 177.0], [54.5, 177.0], [54.6, 177.0], [54.7, 177.0], [54.8, 177.0], [54.9, 177.0], [55.0, 177.0], [55.1, 177.0], [55.2, 177.0], [55.3, 177.0], [55.4, 178.0], [55.5, 178.0], [55.6, 178.0], [55.7, 178.0], [55.8, 178.0], [55.9, 178.0], [56.0, 178.0], [56.1, 178.0], [56.2, 178.0], [56.3, 178.0], [56.4, 178.0], [56.5, 178.0], [56.6, 178.0], [56.7, 178.0], [56.8, 178.0], [56.9, 178.0], [57.0, 178.0], [57.1, 178.0], [57.2, 178.0], [57.3, 178.0], [57.4, 178.0], [57.5, 178.0], [57.6, 178.0], [57.7, 178.0], [57.8, 178.0], [57.9, 178.0], [58.0, 178.0], [58.1, 178.0], [58.2, 178.0], [58.3, 178.0], [58.4, 178.0], [58.5, 178.0], [58.6, 178.0], [58.7, 178.0], [58.8, 178.0], [58.9, 179.0], [59.0, 179.0], [59.1, 179.0], [59.2, 179.0], [59.3, 179.0], [59.4, 179.0], [59.5, 179.0], [59.6, 179.0], [59.7, 179.0], [59.8, 179.0], [59.9, 179.0], [60.0, 179.0], [60.1, 179.0], [60.2, 179.0], [60.3, 179.0], [60.4, 179.0], [60.5, 179.0], [60.6, 179.0], [60.7, 179.0], [60.8, 179.0], [60.9, 179.0], [61.0, 179.0], [61.1, 179.0], [61.2, 179.0], [61.3, 179.0], [61.4, 179.0], [61.5, 179.0], [61.6, 179.0], [61.7, 179.0], [61.8, 179.0], [61.9, 179.0], [62.0, 180.0], [62.1, 180.0], [62.2, 180.0], [62.3, 180.0], [62.4, 180.0], [62.5, 180.0], [62.6, 180.0], [62.7, 180.0], [62.8, 180.0], [62.9, 180.0], [63.0, 180.0], [63.1, 180.0], [63.2, 180.0], [63.3, 180.0], [63.4, 180.0], [63.5, 180.0], [63.6, 180.0], [63.7, 180.0], [63.8, 180.0], [63.9, 180.0], [64.0, 180.0], [64.1, 180.0], [64.2, 180.0], [64.3, 180.0], [64.4, 180.0], [64.5, 180.0], [64.6, 180.0], [64.7, 180.0], [64.8, 180.0], [64.9, 180.0], [65.0, 180.0], [65.1, 180.0], [65.2, 181.0], [65.3, 181.0], [65.4, 181.0], [65.5, 181.0], [65.6, 181.0], [65.7, 181.0], [65.8, 181.0], [65.9, 181.0], [66.0, 181.0], [66.1, 181.0], [66.2, 181.0], [66.3, 181.0], [66.4, 181.0], [66.5, 181.0], [66.6, 181.0], [66.7, 181.0], [66.8, 181.0], [66.9, 181.0], [67.0, 181.0], [67.1, 181.0], [67.2, 181.0], [67.3, 181.0], [67.4, 181.0], [67.5, 181.0], [67.6, 181.0], [67.7, 182.0], [67.8, 182.0], [67.9, 182.0], [68.0, 182.0], [68.1, 182.0], [68.2, 182.0], [68.3, 182.0], [68.4, 182.0], [68.5, 182.0], [68.6, 182.0], [68.7, 182.0], [68.8, 182.0], [68.9, 182.0], [69.0, 182.0], [69.1, 182.0], [69.2, 182.0], [69.3, 182.0], [69.4, 182.0], [69.5, 182.0], [69.6, 182.0], [69.7, 182.0], [69.8, 182.0], [69.9, 183.0], [70.0, 183.0], [70.1, 183.0], [70.2, 183.0], [70.3, 183.0], [70.4, 183.0], [70.5, 183.0], [70.6, 183.0], [70.7, 183.0], [70.8, 183.0], [70.9, 183.0], [71.0, 183.0], [71.1, 183.0], [71.2, 183.0], [71.3, 183.0], [71.4, 183.0], [71.5, 183.0], [71.6, 183.0], [71.7, 183.0], [71.8, 183.0], [71.9, 184.0], [72.0, 184.0], [72.1, 184.0], [72.2, 184.0], [72.3, 184.0], [72.4, 184.0], [72.5, 184.0], [72.6, 184.0], [72.7, 184.0], [72.8, 184.0], [72.9, 184.0], [73.0, 184.0], [73.1, 184.0], [73.2, 184.0], [73.3, 184.0], [73.4, 184.0], [73.5, 184.0], [73.6, 184.0], [73.7, 184.0], [73.8, 185.0], [73.9, 185.0], [74.0, 185.0], [74.1, 185.0], [74.2, 185.0], [74.3, 185.0], [74.4, 185.0], [74.5, 185.0], [74.6, 185.0], [74.7, 185.0], [74.8, 185.0], [74.9, 185.0], [75.0, 185.0], [75.1, 185.0], [75.2, 186.0], [75.3, 186.0], [75.4, 186.0], [75.5, 186.0], [75.6, 186.0], [75.7, 186.0], [75.8, 186.0], [75.9, 186.0], [76.0, 186.0], [76.1, 186.0], [76.2, 186.0], [76.3, 186.0], [76.4, 186.0], [76.5, 187.0], [76.6, 187.0], [76.7, 187.0], [76.8, 187.0], [76.9, 187.0], [77.0, 187.0], [77.1, 187.0], [77.2, 187.0], [77.3, 187.0], [77.4, 187.0], [77.5, 187.0], [77.6, 187.0], [77.7, 188.0], [77.8, 188.0], [77.9, 188.0], [78.0, 188.0], [78.1, 188.0], [78.2, 188.0], [78.3, 188.0], [78.4, 188.0], [78.5, 188.0], [78.6, 188.0], [78.7, 188.0], [78.8, 189.0], [78.9, 189.0], [79.0, 189.0], [79.1, 189.0], [79.2, 189.0], [79.3, 189.0], [79.4, 189.0], [79.5, 189.0], [79.6, 189.0], [79.7, 190.0], [79.8, 190.0], [79.9, 190.0], [80.0, 190.0], [80.1, 190.0], [80.2, 190.0], [80.3, 190.0], [80.4, 191.0], [80.5, 191.0], [80.6, 191.0], [80.7, 191.0], [80.8, 191.0], [80.9, 191.0], [81.0, 191.0], [81.1, 191.0], [81.2, 192.0], [81.3, 192.0], [81.4, 192.0], [81.5, 192.0], [81.6, 192.0], [81.7, 192.0], [81.8, 192.0], [81.9, 192.0], [82.0, 193.0], [82.1, 193.0], [82.2, 193.0], [82.3, 193.0], [82.4, 193.0], [82.5, 194.0], [82.6, 194.0], [82.7, 194.0], [82.8, 194.0], [82.9, 194.0], [83.0, 194.0], [83.1, 195.0], [83.2, 195.0], [83.3, 195.0], [83.4, 195.0], [83.5, 195.0], [83.6, 196.0], [83.7, 196.0], [83.8, 196.0], [83.9, 196.0], [84.0, 196.0], [84.1, 197.0], [84.2, 197.0], [84.3, 197.0], [84.4, 197.0], [84.5, 197.0], [84.6, 198.0], [84.7, 198.0], [84.8, 198.0], [84.9, 198.0], [85.0, 199.0], [85.1, 199.0], [85.2, 199.0], [85.3, 199.0], [85.4, 199.0], [85.5, 200.0], [85.6, 200.0], [85.7, 200.0], [85.8, 200.0], [85.9, 201.0], [86.0, 201.0], [86.1, 201.0], [86.2, 201.0], [86.3, 202.0], [86.4, 202.0], [86.5, 202.0], [86.6, 202.0], [86.7, 202.0], [86.8, 203.0], [86.9, 203.0], [87.0, 203.0], [87.1, 203.0], [87.2, 203.0], [87.3, 204.0], [87.4, 204.0], [87.5, 204.0], [87.6, 204.0], [87.7, 204.0], [87.8, 205.0], [87.9, 205.0], [88.0, 205.0], [88.1, 205.0], [88.2, 205.0], [88.3, 206.0], [88.4, 206.0], [88.5, 206.0], [88.6, 206.0], [88.7, 207.0], [88.8, 207.0], [88.9, 207.0], [89.0, 207.0], [89.1, 207.0], [89.2, 208.0], [89.3, 208.0], [89.4, 208.0], [89.5, 209.0], [89.6, 209.0], [89.7, 209.0], [89.8, 209.0], [89.9, 209.0], [90.0, 210.0], [90.1, 210.0], [90.2, 210.0], [90.3, 211.0], [90.4, 211.0], [90.5, 211.0], [90.6, 211.0], [90.7, 212.0], [90.8, 212.0], [90.9, 212.0], [91.0, 212.0], [91.1, 213.0], [91.2, 213.0], [91.3, 213.0], [91.4, 214.0], [91.5, 214.0], [91.6, 214.0], [91.7, 215.0], [91.8, 215.0], [91.9, 216.0], [92.0, 216.0], [92.1, 216.0], [92.2, 217.0], [92.3, 217.0], [92.4, 218.0], [92.5, 218.0], [92.6, 219.0], [92.7, 219.0], [92.8, 220.0], [92.9, 220.0], [93.0, 221.0], [93.1, 222.0], [93.2, 223.0], [93.3, 224.0], [93.4, 224.0], [93.5, 225.0], [93.6, 225.0], [93.7, 226.0], [93.8, 227.0], [93.9, 228.0], [94.0, 229.0], [94.1, 230.0], [94.2, 232.0], [94.3, 233.0], [94.4, 235.0], [94.5, 236.0], [94.6, 239.0], [94.7, 241.0], [94.8, 243.0], [94.9, 245.0], [95.0, 248.0], [95.1, 250.0], [95.2, 253.0], [95.3, 255.0], [95.4, 258.0], [95.5, 261.0], [95.6, 264.0], [95.7, 268.0], [95.8, 272.0], [95.9, 278.0], [96.0, 287.0], [96.1, 294.0], [96.2, 304.0], [96.3, 317.0], [96.4, 332.0], [96.5, 347.0], [96.6, 360.0], [96.7, 374.0], [96.8, 389.0], [96.9, 406.0], [97.0, 424.0], [97.1, 435.0], [97.2, 442.0], [97.3, 449.0], [97.4, 455.0], [97.5, 460.0], [97.6, 464.0], [97.7, 471.0], [97.8, 478.0], [97.9, 488.0], [98.0, 498.0], [98.1, 510.0], [98.2, 528.0], [98.3, 562.0], [98.4, 616.0], [98.5, 680.0], [98.6, 729.0], [98.7, 824.0], [98.8, 982.0], [98.9, 1163.0], [99.0, 1176.0], [99.1, 1182.0], [99.2, 1198.0], [99.3, 1493.0], [99.4, 2630.0], [99.5, 3564.0], [99.6, 4666.0], [99.7, 5930.0], [99.8, 7906.0], [99.9, 9134.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 17083.0, "series": [{"data": [[600.0, 35.0], [700.0, 24.0], [800.0, 14.0], [900.0, 18.0], [1000.0, 12.0], [1100.0, 66.0], [1200.0, 9.0], [1300.0, 4.0], [1400.0, 6.0], [1600.0, 2.0], [1700.0, 1.0], [1800.0, 2.0], [1900.0, 7.0], [2000.0, 2.0], [2100.0, 2.0], [2300.0, 1.0], [2500.0, 2.0], [2600.0, 2.0], [2700.0, 1.0], [2800.0, 3.0], [2900.0, 1.0], [3000.0, 3.0], [3100.0, 1.0], [3200.0, 3.0], [3300.0, 2.0], [3400.0, 2.0], [3500.0, 3.0], [3600.0, 1.0], [3700.0, 1.0], [3800.0, 1.0], [3900.0, 3.0], [4000.0, 2.0], [4300.0, 3.0], [4200.0, 1.0], [4500.0, 3.0], [4600.0, 5.0], [4400.0, 1.0], [4700.0, 7.0], [4800.0, 1.0], [4900.0, 2.0], [5000.0, 1.0], [5100.0, 2.0], [5300.0, 1.0], [5600.0, 1.0], [5700.0, 1.0], [5800.0, 2.0], [6000.0, 1.0], [5900.0, 1.0], [6300.0, 1.0], [6400.0, 2.0], [6500.0, 1.0], [6900.0, 2.0], [7000.0, 1.0], [7100.0, 4.0], [7200.0, 1.0], [7400.0, 1.0], [7300.0, 2.0], [7600.0, 2.0], [7900.0, 5.0], [7700.0, 1.0], [8400.0, 2.0], [8700.0, 2.0], [8300.0, 2.0], [8500.0, 2.0], [8600.0, 3.0], [8800.0, 1.0], [9000.0, 1.0], [9100.0, 3.0], [9200.0, 1.0], [8900.0, 1.0], [9300.0, 3.0], [9400.0, 1.0], [9700.0, 1.0], [9600.0, 1.0], [9500.0, 1.0], [9900.0, 2.0], [9800.0, 1.0], [10100.0, 2.0], [10000.0, 1.0], [10300.0, 1.0], [10400.0, 1.0], [10500.0, 1.0], [11300.0, 1.0], [100.0, 17083.0], [200.0, 2149.0], [300.0, 140.0], [400.0, 230.0], [500.0, 71.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 11300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 139.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 19604.0, "series": [{"data": [[0.0, 19604.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 257.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 139.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 5.173884077281815, "minX": 1.7286591E12, "maxY": 19.752436647173504, "series": [{"data": [[1.72865946E12, 5.464760638297872], [1.72865976E12, 5.339786381842453], [1.72865916E12, 5.2785904255319185], [1.72865982E12, 5.412550066755685], [1.7286597E12, 5.306666666666665], [1.7286591E12, 19.752436647173504], [1.7286594E12, 5.35970744680851], [1.72865928E12, 5.407407407407414], [1.72865934E12, 5.317089452603459], [1.72865964E12, 5.72448979591836], [1.72865922E12, 5.30396772024209], [1.72865952E12, 5.173884077281815], [1.72865958E12, 5.304044630404463], [1.72865988E12, 5.37527593818984]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72865988E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 182.45511372194605, "minX": 1.0, "maxY": 9306.0, "series": [{"data": [[2.0, 192.09999999999997], [3.0, 185.27358490566033], [4.0, 184.29567307692292], [5.0, 182.45511372194605], [6.0, 201.33795769843084], [7.0, 212.89815817984797], [8.0, 223.02843601895736], [9.0, 230.909090909091], [10.0, 530.2602739726026], [11.0, 257.0], [12.0, 731.4000000000001], [13.0, 276.46153846153845], [14.0, 299.45454545454544], [15.0, 313.3846153846154], [16.0, 1493.4999999999998], [17.0, 286.59999999999997], [18.0, 2073.5], [19.0, 1387.1], [20.0, 362.75], [21.0, 3032.9999999999995], [22.0, 3254.142857142857], [23.0, 3049.4000000000005], [24.0, 523.2272727272727], [25.0, 4215.2], [26.0, 562.6666666666666], [27.0, 4968.666666666666], [28.0, 2617.0], [29.0, 4661.5], [30.0, 446.0], [31.0, 1645.0], [33.0, 6111.333333333333], [32.0, 432.0], [35.0, 367.6666666666667], [34.0, 5608.25], [37.0, 382.5], [36.0, 381.5], [39.0, 395.0], [38.0, 383.0], [41.0, 440.6666666666667], [40.0, 405.5], [43.0, 8518.333333333334], [42.0, 4167.714285714286], [45.0, 415.4], [44.0, 4976.5], [47.0, 3357.6666666666665], [46.0, 1153.5], [49.0, 437.5], [48.0, 9306.0], [51.0, 6672.0], [52.0, 5087.5], [53.0, 3225.0], [55.0, 5026.5], [54.0, 483.5], [57.0, 3461.5], [56.0, 430.0], [59.0, 438.5], [58.0, 1355.6666666666667], [61.0, 453.5], [60.0, 1417.0], [63.0, 4755.5], [62.0, 487.5], [66.0, 710.5], [64.0, 1954.0], [67.0, 583.0], [65.0, 620.6666666666666], [71.0, 938.0], [70.0, 8475.0], [68.0, 5669.0], [75.0, 1440.5], [73.0, 1592.0], [79.0, 927.0], [78.0, 7642.0], [77.0, 630.0], [76.0, 680.0], [83.0, 1120.6666666666667], [82.0, 1744.0], [80.0, 912.0], [86.0, 4561.166666666666], [85.0, 2903.8], [84.0, 789.0], [91.0, 941.0], [90.0, 7379.0], [89.0, 7171.0], [88.0, 7545.5], [95.0, 3155.333333333333], [94.0, 4251.0], [93.0, 7917.0], [92.0, 7371.0], [99.0, 3385.2], [98.0, 3269.75], [97.0, 3770.0], [96.0, 2953.75], [102.0, 7072.0], [101.0, 752.0], [100.0, 1206.0], [107.0, 4417.0], [106.0, 4720.0], [105.0, 4632.0], [104.0, 4781.0], [111.0, 4000.5], [110.0, 4465.5], [109.0, 4728.0], [108.0, 4062.0], [115.0, 5713.333333333333], [114.0, 3430.0], [113.0, 3093.0], [112.0, 4182.666666666667], [119.0, 4746.5], [118.0, 1965.5], [117.0, 2794.0], [116.0, 2866.4], [123.0, 1825.5], [122.0, 2895.0], [121.0, 3341.5], [120.0, 3975.0], [127.0, 2984.666666666667], [126.0, 2689.3333333333335], [125.0, 1858.5], [124.0, 2367.5], [134.0, 1558.5], [133.0, 2255.5], [132.0, 2133.25], [131.0, 1524.6], [130.0, 4219.0], [129.0, 3349.0], [128.0, 2302.0], [135.0, 1006.0], [143.0, 561.0], [141.0, 1092.0], [140.0, 1173.0], [139.0, 2078.0], [138.0, 1118.5], [137.0, 1882.0], [136.0, 768.5], [146.0, 2720.0], [147.0, 2739.0], [145.0, 523.5], [1.0, 208.73684210526312]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[6.474799999999982, 232.00600000000017]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 147.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 906.0, "minX": 1.7286591E12, "maxY": 1764879.9, "series": [{"data": [[1.72865946E12, 1692831.7666666666], [1.72865976E12, 1686053.65], [1.72865916E12, 1692807.0333333334], [1.72865982E12, 1686074.1166666667], [1.7286597E12, 1688281.5], [1.7286591E12, 1732171.9833333334], [1.7286594E12, 1692829.5166666666], [1.72865928E12, 1701832.0], [1.72865934E12, 1686074.4], [1.72865964E12, 1764879.9], [1.72865922E12, 1673693.0333333334], [1.72865952E12, 1689458.6166666667], [1.72865958E12, 1614050.55], [1.72865988E12, 509874.11666666664]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.72865946E12, 3008.0], [1.72865976E12, 2996.0], [1.72865916E12, 3008.0], [1.72865982E12, 2996.0], [1.7286597E12, 3000.0], [1.7286591E12, 3078.0], [1.7286594E12, 3008.0], [1.72865928E12, 3024.0], [1.72865934E12, 2996.0], [1.72865964E12, 3136.0], [1.72865922E12, 2974.0], [1.72865952E12, 3002.0], [1.72865958E12, 2868.0], [1.72865988E12, 906.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72865988E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 182.25849433710846, "minX": 1.7286591E12, "maxY": 755.7855750487336, "series": [{"data": [[1.72865946E12, 188.33643617021298], [1.72865976E12, 189.40520694259035], [1.72865916E12, 186.52260638297864], [1.72865982E12, 192.72696929238933], [1.7286597E12, 187.68399999999983], [1.7286591E12, 755.7855750487336], [1.7286594E12, 189.90691489361734], [1.72865928E12, 191.2857142857143], [1.72865934E12, 188.254339118825], [1.72865964E12, 187.07015306122443], [1.72865922E12, 187.56018829858763], [1.72865952E12, 182.25849433710846], [1.72865958E12, 186.54253835425405], [1.72865988E12, 196.62030905077265]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72865988E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 136.12391738840805, "minX": 1.7286591E12, "maxY": 668.1293047433401, "series": [{"data": [[1.72865946E12, 140.95345744680847], [1.72865976E12, 143.4018691588785], [1.72865916E12, 142.6961436170214], [1.72865982E12, 145.83644859813086], [1.7286597E12, 141.13799999999983], [1.7286591E12, 668.1293047433401], [1.7286594E12, 141.98603723404236], [1.72865928E12, 143.2255291005289], [1.72865934E12, 142.17022696929251], [1.72865964E12, 140.4426020408164], [1.72865922E12, 142.23470073974428], [1.72865952E12, 136.12391738840805], [1.72865958E12, 140.46443514644338], [1.72865988E12, 145.77041942604865]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72865988E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 87.76215856095929, "minX": 1.7286591E12, "maxY": 576.3567251461993, "series": [{"data": [[1.72865946E12, 91.6402925531915], [1.72865976E12, 94.44793057409896], [1.72865916E12, 93.97074468085133], [1.72865982E12, 95.95594125500665], [1.7286597E12, 92.4453333333334], [1.7286591E12, 576.3567251461993], [1.7286594E12, 92.11835106382982], [1.72865928E12, 93.00066137566155], [1.72865934E12, 91.89853137516675], [1.72865964E12, 91.10969387755107], [1.72865922E12, 92.95561533288492], [1.72865952E12, 87.76215856095929], [1.72865958E12, 91.59832635983271], [1.72865988E12, 95.06181015452539]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72865988E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 152.0, "minX": 1.7286591E12, "maxY": 11354.0, "series": [{"data": [[1.72865946E12, 1189.0], [1.72865976E12, 1195.0], [1.72865916E12, 1198.0], [1.72865982E12, 1288.0], [1.7286597E12, 1236.0], [1.7286591E12, 11354.0], [1.7286594E12, 1212.0], [1.72865928E12, 1208.0], [1.72865934E12, 1183.0], [1.72865964E12, 1471.0], [1.72865922E12, 1185.0], [1.72865952E12, 710.0], [1.72865958E12, 1192.0], [1.72865988E12, 764.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.72865946E12, 206.0], [1.72865976E12, 202.0], [1.72865916E12, 200.0], [1.72865982E12, 209.0], [1.7286597E12, 204.0], [1.7286591E12, 1178.0], [1.7286594E12, 209.0], [1.72865928E12, 212.0], [1.72865934E12, 205.0], [1.72865964E12, 206.0], [1.72865922E12, 204.0], [1.72865952E12, 201.0], [1.72865958E12, 201.5], [1.72865988E12, 214.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.72865946E12, 476.0], [1.72865976E12, 522.05], [1.72865916E12, 461.9500000000073], [1.72865982E12, 528.01], [1.7286597E12, 490.96000000000004], [1.7286591E12, 9366.999999999998], [1.7286594E12, 483.60000000000036], [1.72865928E12, 464.829999999999], [1.72865934E12, 473.04999999999995], [1.72865964E12, 468.6199999999999], [1.72865922E12, 485.2399999999998], [1.72865952E12, 422.64000000000124], [1.72865958E12, 475.8000000000011], [1.72865988E12, 507.2999999999989]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.72865946E12, 220.0], [1.72865976E12, 221.04999999999995], [1.72865916E12, 214.0], [1.72865982E12, 223.04999999999995], [1.7286597E12, 218.95000000000005], [1.7286591E12, 4720.0], [1.7286594E12, 239.0], [1.72865928E12, 234.69999999999982], [1.72865934E12, 217.0], [1.72865964E12, 220.0], [1.72865922E12, 217.5999999999999], [1.72865952E12, 214.0], [1.72865958E12, 222.25], [1.72865988E12, 231.5999999999999]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.72865946E12, 152.0], [1.72865976E12, 156.0], [1.72865916E12, 156.0], [1.72865982E12, 155.0], [1.7286597E12, 156.0], [1.7286591E12, 157.0], [1.7286594E12, 153.0], [1.72865928E12, 156.0], [1.72865934E12, 157.0], [1.72865964E12, 156.0], [1.72865922E12, 152.0], [1.72865952E12, 154.0], [1.72865958E12, 154.0], [1.72865988E12, 163.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.72865946E12, 175.0], [1.72865976E12, 174.0], [1.72865916E12, 176.0], [1.72865982E12, 177.0], [1.7286597E12, 174.0], [1.7286591E12, 183.0], [1.7286594E12, 176.0], [1.72865928E12, 179.0], [1.72865934E12, 176.0], [1.72865964E12, 175.5], [1.72865922E12, 176.0], [1.72865952E12, 175.0], [1.72865958E12, 174.0], [1.72865988E12, 188.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72865988E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 171.0, "minX": 2.0, "maxY": 3973.5, "series": [{"data": [[32.0, 174.0], [33.0, 179.0], [2.0, 183.5], [34.0, 402.0], [35.0, 395.5], [37.0, 179.0], [36.0, 181.5], [38.0, 183.0], [43.0, 175.0], [45.0, 1968.0], [46.0, 531.0], [56.0, 3973.5], [58.0, 813.5], [7.0, 528.0], [9.0, 171.0], [12.0, 252.5], [15.0, 180.0], [16.0, 174.5], [17.0, 181.0], [19.0, 178.0], [20.0, 175.0], [21.0, 174.0], [22.0, 177.0], [23.0, 176.0], [24.0, 177.0], [25.0, 175.0], [26.0, 176.0], [27.0, 176.0], [28.0, 176.0], [29.0, 180.0], [30.0, 182.0], [31.0, 183.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 58.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 130.0, "minX": 2.0, "maxY": 3721.5, "series": [{"data": [[32.0, 133.0], [33.0, 135.0], [2.0, 140.5], [34.0, 297.0], [35.0, 298.0], [37.0, 136.0], [36.0, 132.0], [38.0, 136.0], [43.0, 132.0], [45.0, 1611.0], [46.0, 441.5], [56.0, 3721.5], [58.0, 659.5], [7.0, 364.0], [9.0, 130.0], [12.0, 172.5], [15.0, 136.0], [16.0, 131.5], [17.0, 136.0], [19.0, 135.0], [20.0, 134.0], [21.0, 132.0], [22.0, 133.0], [23.0, 133.0], [24.0, 134.0], [25.0, 133.0], [26.0, 133.0], [27.0, 133.0], [28.0, 133.0], [29.0, 136.0], [30.0, 136.0], [31.0, 137.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 58.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.85, "minX": 1.72865904E12, "maxY": 26.066666666666666, "series": [{"data": [[1.72865946E12, 25.083333333333332], [1.72865976E12, 24.966666666666665], [1.72865916E12, 25.066666666666666], [1.72865982E12, 25.016666666666666], [1.72865904E12, 0.85], [1.7286597E12, 25.0], [1.7286591E12, 24.866666666666667], [1.7286594E12, 25.066666666666666], [1.72865928E12, 25.2], [1.72865934E12, 24.95], [1.72865964E12, 26.066666666666666], [1.72865922E12, 24.8], [1.72865952E12, 25.0], [1.72865958E12, 23.966666666666665], [1.72865988E12, 7.433333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72865988E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 7.55, "minX": 1.7286591E12, "maxY": 26.133333333333333, "series": [{"data": [[1.72865946E12, 25.066666666666666], [1.72865976E12, 24.966666666666665], [1.72865916E12, 25.066666666666666], [1.72865982E12, 24.966666666666665], [1.7286597E12, 25.0], [1.7286591E12, 25.65], [1.7286594E12, 25.066666666666666], [1.72865928E12, 25.2], [1.72865934E12, 24.966666666666665], [1.72865964E12, 26.133333333333333], [1.72865922E12, 24.783333333333335], [1.72865952E12, 25.016666666666666], [1.72865958E12, 23.9], [1.72865988E12, 7.55]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72865988E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 7.55, "minX": 1.7286591E12, "maxY": 26.133333333333333, "series": [{"data": [[1.72865946E12, 25.066666666666666], [1.72865976E12, 24.966666666666665], [1.72865916E12, 25.066666666666666], [1.72865982E12, 24.966666666666665], [1.7286597E12, 25.0], [1.7286591E12, 25.65], [1.7286594E12, 25.066666666666666], [1.72865928E12, 25.2], [1.72865934E12, 24.966666666666665], [1.72865964E12, 26.133333333333333], [1.72865922E12, 24.783333333333335], [1.72865952E12, 25.016666666666666], [1.72865958E12, 23.9], [1.72865988E12, 7.55]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72865988E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 7.55, "minX": 1.7286591E12, "maxY": 26.133333333333333, "series": [{"data": [[1.72865946E12, 25.066666666666666], [1.72865976E12, 24.966666666666665], [1.72865916E12, 25.066666666666666], [1.72865982E12, 24.966666666666665], [1.7286597E12, 25.0], [1.7286591E12, 25.65], [1.7286594E12, 25.066666666666666], [1.72865928E12, 25.2], [1.72865934E12, 24.966666666666665], [1.72865964E12, 26.133333333333333], [1.72865922E12, 24.783333333333335], [1.72865952E12, 25.016666666666666], [1.72865958E12, 23.9], [1.72865988E12, 7.55]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72865988E12, "title": "Total Transactions Per Second"}},
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

