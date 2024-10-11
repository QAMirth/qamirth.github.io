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
        data: {"result": {"minY": 149.0, "minX": 0.0, "maxY": 14796.0, "series": [{"data": [[0.0, 149.0], [0.1, 153.0], [0.2, 155.0], [0.3, 155.0], [0.4, 155.0], [0.5, 156.0], [0.6, 156.0], [0.7, 156.0], [0.8, 157.0], [0.9, 157.0], [1.0, 157.0], [1.1, 157.0], [1.2, 158.0], [1.3, 158.0], [1.4, 158.0], [1.5, 158.0], [1.6, 158.0], [1.7, 158.0], [1.8, 158.0], [1.9, 159.0], [2.0, 159.0], [2.1, 159.0], [2.2, 159.0], [2.3, 159.0], [2.4, 159.0], [2.5, 159.0], [2.6, 159.0], [2.7, 159.0], [2.8, 159.0], [2.9, 159.0], [3.0, 159.0], [3.1, 159.0], [3.2, 159.0], [3.3, 160.0], [3.4, 160.0], [3.5, 160.0], [3.6, 160.0], [3.7, 160.0], [3.8, 160.0], [3.9, 160.0], [4.0, 160.0], [4.1, 160.0], [4.2, 160.0], [4.3, 160.0], [4.4, 160.0], [4.5, 160.0], [4.6, 160.0], [4.7, 160.0], [4.8, 160.0], [4.9, 160.0], [5.0, 160.0], [5.1, 160.0], [5.2, 161.0], [5.3, 161.0], [5.4, 161.0], [5.5, 161.0], [5.6, 161.0], [5.7, 161.0], [5.8, 161.0], [5.9, 161.0], [6.0, 161.0], [6.1, 161.0], [6.2, 161.0], [6.3, 161.0], [6.4, 161.0], [6.5, 161.0], [6.6, 161.0], [6.7, 161.0], [6.8, 161.0], [6.9, 161.0], [7.0, 161.0], [7.1, 161.0], [7.2, 162.0], [7.3, 162.0], [7.4, 162.0], [7.5, 162.0], [7.6, 162.0], [7.7, 162.0], [7.8, 162.0], [7.9, 162.0], [8.0, 162.0], [8.1, 162.0], [8.2, 162.0], [8.3, 162.0], [8.4, 162.0], [8.5, 162.0], [8.6, 162.0], [8.7, 162.0], [8.8, 162.0], [8.9, 162.0], [9.0, 162.0], [9.1, 162.0], [9.2, 162.0], [9.3, 162.0], [9.4, 162.0], [9.5, 162.0], [9.6, 162.0], [9.7, 162.0], [9.8, 162.0], [9.9, 162.0], [10.0, 163.0], [10.1, 163.0], [10.2, 163.0], [10.3, 163.0], [10.4, 163.0], [10.5, 163.0], [10.6, 163.0], [10.7, 163.0], [10.8, 163.0], [10.9, 163.0], [11.0, 163.0], [11.1, 163.0], [11.2, 163.0], [11.3, 163.0], [11.4, 163.0], [11.5, 163.0], [11.6, 163.0], [11.7, 163.0], [11.8, 163.0], [11.9, 163.0], [12.0, 163.0], [12.1, 163.0], [12.2, 163.0], [12.3, 163.0], [12.4, 163.0], [12.5, 163.0], [12.6, 163.0], [12.7, 163.0], [12.8, 163.0], [12.9, 163.0], [13.0, 163.0], [13.1, 163.0], [13.2, 163.0], [13.3, 164.0], [13.4, 164.0], [13.5, 164.0], [13.6, 164.0], [13.7, 164.0], [13.8, 164.0], [13.9, 164.0], [14.0, 164.0], [14.1, 164.0], [14.2, 164.0], [14.3, 164.0], [14.4, 164.0], [14.5, 164.0], [14.6, 164.0], [14.7, 164.0], [14.8, 164.0], [14.9, 164.0], [15.0, 164.0], [15.1, 164.0], [15.2, 164.0], [15.3, 164.0], [15.4, 164.0], [15.5, 164.0], [15.6, 164.0], [15.7, 164.0], [15.8, 164.0], [15.9, 164.0], [16.0, 164.0], [16.1, 164.0], [16.2, 164.0], [16.3, 164.0], [16.4, 164.0], [16.5, 164.0], [16.6, 164.0], [16.7, 164.0], [16.8, 164.0], [16.9, 164.0], [17.0, 164.0], [17.1, 164.0], [17.2, 165.0], [17.3, 165.0], [17.4, 165.0], [17.5, 165.0], [17.6, 165.0], [17.7, 165.0], [17.8, 165.0], [17.9, 165.0], [18.0, 165.0], [18.1, 165.0], [18.2, 165.0], [18.3, 165.0], [18.4, 165.0], [18.5, 165.0], [18.6, 165.0], [18.7, 165.0], [18.8, 165.0], [18.9, 165.0], [19.0, 165.0], [19.1, 165.0], [19.2, 165.0], [19.3, 165.0], [19.4, 165.0], [19.5, 165.0], [19.6, 165.0], [19.7, 165.0], [19.8, 165.0], [19.9, 165.0], [20.0, 165.0], [20.1, 165.0], [20.2, 165.0], [20.3, 165.0], [20.4, 165.0], [20.5, 165.0], [20.6, 165.0], [20.7, 165.0], [20.8, 165.0], [20.9, 165.0], [21.0, 165.0], [21.1, 165.0], [21.2, 165.0], [21.3, 165.0], [21.4, 165.0], [21.5, 165.0], [21.6, 165.0], [21.7, 165.0], [21.8, 165.0], [21.9, 166.0], [22.0, 166.0], [22.1, 166.0], [22.2, 166.0], [22.3, 166.0], [22.4, 166.0], [22.5, 166.0], [22.6, 166.0], [22.7, 166.0], [22.8, 166.0], [22.9, 166.0], [23.0, 166.0], [23.1, 166.0], [23.2, 166.0], [23.3, 166.0], [23.4, 166.0], [23.5, 166.0], [23.6, 166.0], [23.7, 166.0], [23.8, 166.0], [23.9, 166.0], [24.0, 166.0], [24.1, 166.0], [24.2, 166.0], [24.3, 166.0], [24.4, 166.0], [24.5, 166.0], [24.6, 166.0], [24.7, 166.0], [24.8, 166.0], [24.9, 166.0], [25.0, 166.0], [25.1, 166.0], [25.2, 166.0], [25.3, 166.0], [25.4, 166.0], [25.5, 166.0], [25.6, 166.0], [25.7, 166.0], [25.8, 166.0], [25.9, 166.0], [26.0, 166.0], [26.1, 166.0], [26.2, 166.0], [26.3, 166.0], [26.4, 166.0], [26.5, 167.0], [26.6, 167.0], [26.7, 167.0], [26.8, 167.0], [26.9, 167.0], [27.0, 167.0], [27.1, 167.0], [27.2, 167.0], [27.3, 167.0], [27.4, 167.0], [27.5, 167.0], [27.6, 167.0], [27.7, 167.0], [27.8, 167.0], [27.9, 167.0], [28.0, 167.0], [28.1, 167.0], [28.2, 167.0], [28.3, 167.0], [28.4, 167.0], [28.5, 167.0], [28.6, 167.0], [28.7, 167.0], [28.8, 167.0], [28.9, 167.0], [29.0, 167.0], [29.1, 167.0], [29.2, 167.0], [29.3, 167.0], [29.4, 167.0], [29.5, 167.0], [29.6, 167.0], [29.7, 167.0], [29.8, 167.0], [29.9, 167.0], [30.0, 167.0], [30.1, 167.0], [30.2, 167.0], [30.3, 167.0], [30.4, 167.0], [30.5, 167.0], [30.6, 167.0], [30.7, 167.0], [30.8, 167.0], [30.9, 167.0], [31.0, 167.0], [31.1, 168.0], [31.2, 168.0], [31.3, 168.0], [31.4, 168.0], [31.5, 168.0], [31.6, 168.0], [31.7, 168.0], [31.8, 168.0], [31.9, 168.0], [32.0, 168.0], [32.1, 168.0], [32.2, 168.0], [32.3, 168.0], [32.4, 168.0], [32.5, 168.0], [32.6, 168.0], [32.7, 168.0], [32.8, 168.0], [32.9, 168.0], [33.0, 168.0], [33.1, 168.0], [33.2, 168.0], [33.3, 168.0], [33.4, 168.0], [33.5, 168.0], [33.6, 168.0], [33.7, 168.0], [33.8, 168.0], [33.9, 168.0], [34.0, 168.0], [34.1, 168.0], [34.2, 168.0], [34.3, 168.0], [34.4, 168.0], [34.5, 168.0], [34.6, 168.0], [34.7, 168.0], [34.8, 168.0], [34.9, 168.0], [35.0, 168.0], [35.1, 168.0], [35.2, 168.0], [35.3, 168.0], [35.4, 169.0], [35.5, 169.0], [35.6, 169.0], [35.7, 169.0], [35.8, 169.0], [35.9, 169.0], [36.0, 169.0], [36.1, 169.0], [36.2, 169.0], [36.3, 169.0], [36.4, 169.0], [36.5, 169.0], [36.6, 169.0], [36.7, 169.0], [36.8, 169.0], [36.9, 169.0], [37.0, 169.0], [37.1, 169.0], [37.2, 169.0], [37.3, 169.0], [37.4, 169.0], [37.5, 169.0], [37.6, 169.0], [37.7, 169.0], [37.8, 169.0], [37.9, 169.0], [38.0, 169.0], [38.1, 169.0], [38.2, 169.0], [38.3, 169.0], [38.4, 169.0], [38.5, 169.0], [38.6, 169.0], [38.7, 169.0], [38.8, 169.0], [38.9, 169.0], [39.0, 169.0], [39.1, 169.0], [39.2, 169.0], [39.3, 169.0], [39.4, 169.0], [39.5, 169.0], [39.6, 169.0], [39.7, 169.0], [39.8, 169.0], [39.9, 170.0], [40.0, 170.0], [40.1, 170.0], [40.2, 170.0], [40.3, 170.0], [40.4, 170.0], [40.5, 170.0], [40.6, 170.0], [40.7, 170.0], [40.8, 170.0], [40.9, 170.0], [41.0, 170.0], [41.1, 170.0], [41.2, 170.0], [41.3, 170.0], [41.4, 170.0], [41.5, 170.0], [41.6, 170.0], [41.7, 170.0], [41.8, 170.0], [41.9, 170.0], [42.0, 170.0], [42.1, 170.0], [42.2, 170.0], [42.3, 170.0], [42.4, 170.0], [42.5, 170.0], [42.6, 170.0], [42.7, 170.0], [42.8, 170.0], [42.9, 170.0], [43.0, 170.0], [43.1, 170.0], [43.2, 170.0], [43.3, 170.0], [43.4, 170.0], [43.5, 170.0], [43.6, 170.0], [43.7, 170.0], [43.8, 170.0], [43.9, 170.0], [44.0, 171.0], [44.1, 171.0], [44.2, 171.0], [44.3, 171.0], [44.4, 171.0], [44.5, 171.0], [44.6, 171.0], [44.7, 171.0], [44.8, 171.0], [44.9, 171.0], [45.0, 171.0], [45.1, 171.0], [45.2, 171.0], [45.3, 171.0], [45.4, 171.0], [45.5, 171.0], [45.6, 171.0], [45.7, 171.0], [45.8, 171.0], [45.9, 171.0], [46.0, 171.0], [46.1, 171.0], [46.2, 171.0], [46.3, 171.0], [46.4, 171.0], [46.5, 171.0], [46.6, 171.0], [46.7, 171.0], [46.8, 171.0], [46.9, 171.0], [47.0, 171.0], [47.1, 171.0], [47.2, 171.0], [47.3, 171.0], [47.4, 171.0], [47.5, 171.0], [47.6, 171.0], [47.7, 171.0], [47.8, 172.0], [47.9, 172.0], [48.0, 172.0], [48.1, 172.0], [48.2, 172.0], [48.3, 172.0], [48.4, 172.0], [48.5, 172.0], [48.6, 172.0], [48.7, 172.0], [48.8, 172.0], [48.9, 172.0], [49.0, 172.0], [49.1, 172.0], [49.2, 172.0], [49.3, 172.0], [49.4, 172.0], [49.5, 172.0], [49.6, 172.0], [49.7, 172.0], [49.8, 172.0], [49.9, 172.0], [50.0, 172.0], [50.1, 172.0], [50.2, 172.0], [50.3, 172.0], [50.4, 172.0], [50.5, 172.0], [50.6, 172.0], [50.7, 172.0], [50.8, 172.0], [50.9, 172.0], [51.0, 172.0], [51.1, 172.0], [51.2, 172.0], [51.3, 172.0], [51.4, 172.0], [51.5, 172.0], [51.6, 173.0], [51.7, 173.0], [51.8, 173.0], [51.9, 173.0], [52.0, 173.0], [52.1, 173.0], [52.2, 173.0], [52.3, 173.0], [52.4, 173.0], [52.5, 173.0], [52.6, 173.0], [52.7, 173.0], [52.8, 173.0], [52.9, 173.0], [53.0, 173.0], [53.1, 173.0], [53.2, 173.0], [53.3, 173.0], [53.4, 173.0], [53.5, 173.0], [53.6, 173.0], [53.7, 173.0], [53.8, 173.0], [53.9, 173.0], [54.0, 173.0], [54.1, 173.0], [54.2, 173.0], [54.3, 173.0], [54.4, 173.0], [54.5, 173.0], [54.6, 173.0], [54.7, 173.0], [54.8, 173.0], [54.9, 173.0], [55.0, 173.0], [55.1, 174.0], [55.2, 174.0], [55.3, 174.0], [55.4, 174.0], [55.5, 174.0], [55.6, 174.0], [55.7, 174.0], [55.8, 174.0], [55.9, 174.0], [56.0, 174.0], [56.1, 174.0], [56.2, 174.0], [56.3, 174.0], [56.4, 174.0], [56.5, 174.0], [56.6, 174.0], [56.7, 174.0], [56.8, 174.0], [56.9, 174.0], [57.0, 174.0], [57.1, 174.0], [57.2, 174.0], [57.3, 174.0], [57.4, 174.0], [57.5, 174.0], [57.6, 174.0], [57.7, 174.0], [57.8, 174.0], [57.9, 174.0], [58.0, 174.0], [58.1, 174.0], [58.2, 174.0], [58.3, 175.0], [58.4, 175.0], [58.5, 175.0], [58.6, 175.0], [58.7, 175.0], [58.8, 175.0], [58.9, 175.0], [59.0, 175.0], [59.1, 175.0], [59.2, 175.0], [59.3, 175.0], [59.4, 175.0], [59.5, 175.0], [59.6, 175.0], [59.7, 175.0], [59.8, 175.0], [59.9, 175.0], [60.0, 175.0], [60.1, 175.0], [60.2, 175.0], [60.3, 175.0], [60.4, 175.0], [60.5, 175.0], [60.6, 175.0], [60.7, 175.0], [60.8, 175.0], [60.9, 175.0], [61.0, 175.0], [61.1, 175.0], [61.2, 175.0], [61.3, 175.0], [61.4, 175.0], [61.5, 175.0], [61.6, 175.0], [61.7, 175.0], [61.8, 176.0], [61.9, 176.0], [62.0, 176.0], [62.1, 176.0], [62.2, 176.0], [62.3, 176.0], [62.4, 176.0], [62.5, 176.0], [62.6, 176.0], [62.7, 176.0], [62.8, 176.0], [62.9, 176.0], [63.0, 176.0], [63.1, 176.0], [63.2, 176.0], [63.3, 176.0], [63.4, 176.0], [63.5, 176.0], [63.6, 176.0], [63.7, 176.0], [63.8, 176.0], [63.9, 176.0], [64.0, 176.0], [64.1, 176.0], [64.2, 176.0], [64.3, 176.0], [64.4, 176.0], [64.5, 176.0], [64.6, 176.0], [64.7, 176.0], [64.8, 176.0], [64.9, 176.0], [65.0, 176.0], [65.1, 177.0], [65.2, 177.0], [65.3, 177.0], [65.4, 177.0], [65.5, 177.0], [65.6, 177.0], [65.7, 177.0], [65.8, 177.0], [65.9, 177.0], [66.0, 177.0], [66.1, 177.0], [66.2, 177.0], [66.3, 177.0], [66.4, 177.0], [66.5, 177.0], [66.6, 177.0], [66.7, 177.0], [66.8, 177.0], [66.9, 177.0], [67.0, 177.0], [67.1, 177.0], [67.2, 177.0], [67.3, 177.0], [67.4, 177.0], [67.5, 177.0], [67.6, 177.0], [67.7, 177.0], [67.8, 177.0], [67.9, 177.0], [68.0, 178.0], [68.1, 178.0], [68.2, 178.0], [68.3, 178.0], [68.4, 178.0], [68.5, 178.0], [68.6, 178.0], [68.7, 178.0], [68.8, 178.0], [68.9, 178.0], [69.0, 178.0], [69.1, 178.0], [69.2, 178.0], [69.3, 178.0], [69.4, 178.0], [69.5, 178.0], [69.6, 178.0], [69.7, 178.0], [69.8, 178.0], [69.9, 178.0], [70.0, 178.0], [70.1, 178.0], [70.2, 178.0], [70.3, 178.0], [70.4, 178.0], [70.5, 178.0], [70.6, 178.0], [70.7, 179.0], [70.8, 179.0], [70.9, 179.0], [71.0, 179.0], [71.1, 179.0], [71.2, 179.0], [71.3, 179.0], [71.4, 179.0], [71.5, 179.0], [71.6, 179.0], [71.7, 179.0], [71.8, 179.0], [71.9, 179.0], [72.0, 179.0], [72.1, 179.0], [72.2, 179.0], [72.3, 179.0], [72.4, 179.0], [72.5, 179.0], [72.6, 179.0], [72.7, 179.0], [72.8, 179.0], [72.9, 179.0], [73.0, 180.0], [73.1, 180.0], [73.2, 180.0], [73.3, 180.0], [73.4, 180.0], [73.5, 180.0], [73.6, 180.0], [73.7, 180.0], [73.8, 180.0], [73.9, 180.0], [74.0, 180.0], [74.1, 180.0], [74.2, 180.0], [74.3, 180.0], [74.4, 180.0], [74.5, 180.0], [74.6, 180.0], [74.7, 180.0], [74.8, 180.0], [74.9, 180.0], [75.0, 181.0], [75.1, 181.0], [75.2, 181.0], [75.3, 181.0], [75.4, 181.0], [75.5, 181.0], [75.6, 181.0], [75.7, 181.0], [75.8, 181.0], [75.9, 181.0], [76.0, 181.0], [76.1, 181.0], [76.2, 181.0], [76.3, 181.0], [76.4, 181.0], [76.5, 181.0], [76.6, 181.0], [76.7, 181.0], [76.8, 182.0], [76.9, 182.0], [77.0, 182.0], [77.1, 182.0], [77.2, 182.0], [77.3, 182.0], [77.4, 182.0], [77.5, 182.0], [77.6, 182.0], [77.7, 182.0], [77.8, 182.0], [77.9, 182.0], [78.0, 182.0], [78.1, 182.0], [78.2, 182.0], [78.3, 183.0], [78.4, 183.0], [78.5, 183.0], [78.6, 183.0], [78.7, 183.0], [78.8, 183.0], [78.9, 183.0], [79.0, 183.0], [79.1, 183.0], [79.2, 183.0], [79.3, 183.0], [79.4, 183.0], [79.5, 183.0], [79.6, 183.0], [79.7, 184.0], [79.8, 184.0], [79.9, 184.0], [80.0, 184.0], [80.1, 184.0], [80.2, 184.0], [80.3, 184.0], [80.4, 184.0], [80.5, 184.0], [80.6, 184.0], [80.7, 184.0], [80.8, 185.0], [80.9, 185.0], [81.0, 185.0], [81.1, 185.0], [81.2, 185.0], [81.3, 185.0], [81.4, 185.0], [81.5, 185.0], [81.6, 185.0], [81.7, 186.0], [81.8, 186.0], [81.9, 186.0], [82.0, 186.0], [82.1, 186.0], [82.2, 186.0], [82.3, 186.0], [82.4, 186.0], [82.5, 186.0], [82.6, 187.0], [82.7, 187.0], [82.8, 187.0], [82.9, 187.0], [83.0, 187.0], [83.1, 187.0], [83.2, 187.0], [83.3, 188.0], [83.4, 188.0], [83.5, 188.0], [83.6, 188.0], [83.7, 188.0], [83.8, 188.0], [83.9, 188.0], [84.0, 188.0], [84.1, 189.0], [84.2, 189.0], [84.3, 189.0], [84.4, 189.0], [84.5, 189.0], [84.6, 190.0], [84.7, 190.0], [84.8, 190.0], [84.9, 190.0], [85.0, 190.0], [85.1, 191.0], [85.2, 191.0], [85.3, 191.0], [85.4, 191.0], [85.5, 192.0], [85.6, 192.0], [85.7, 192.0], [85.8, 192.0], [85.9, 192.0], [86.0, 193.0], [86.1, 193.0], [86.2, 193.0], [86.3, 193.0], [86.4, 194.0], [86.5, 194.0], [86.6, 194.0], [86.7, 195.0], [86.8, 195.0], [86.9, 195.0], [87.0, 195.0], [87.1, 196.0], [87.2, 196.0], [87.3, 196.0], [87.4, 196.0], [87.5, 197.0], [87.6, 197.0], [87.7, 197.0], [87.8, 197.0], [87.9, 198.0], [88.0, 198.0], [88.1, 198.0], [88.2, 199.0], [88.3, 199.0], [88.4, 199.0], [88.5, 199.0], [88.6, 200.0], [88.7, 200.0], [88.8, 200.0], [88.9, 201.0], [89.0, 201.0], [89.1, 201.0], [89.2, 202.0], [89.3, 202.0], [89.4, 202.0], [89.5, 203.0], [89.6, 203.0], [89.7, 204.0], [89.8, 204.0], [89.9, 204.0], [90.0, 205.0], [90.1, 205.0], [90.2, 205.0], [90.3, 206.0], [90.4, 206.0], [90.5, 206.0], [90.6, 207.0], [90.7, 207.0], [90.8, 208.0], [90.9, 208.0], [91.0, 208.0], [91.1, 209.0], [91.2, 209.0], [91.3, 210.0], [91.4, 211.0], [91.5, 212.0], [91.6, 212.0], [91.7, 213.0], [91.8, 213.0], [91.9, 214.0], [92.0, 214.0], [92.1, 215.0], [92.2, 215.0], [92.3, 216.0], [92.4, 217.0], [92.5, 218.0], [92.6, 218.0], [92.7, 219.0], [92.8, 220.0], [92.9, 221.0], [93.0, 222.0], [93.1, 223.0], [93.2, 224.0], [93.3, 225.0], [93.4, 227.0], [93.5, 228.0], [93.6, 230.0], [93.7, 231.0], [93.8, 233.0], [93.9, 233.0], [94.0, 234.0], [94.1, 236.0], [94.2, 239.0], [94.3, 240.0], [94.4, 242.0], [94.5, 243.0], [94.6, 246.0], [94.7, 249.0], [94.8, 250.0], [94.9, 252.0], [95.0, 255.0], [95.1, 259.0], [95.2, 263.0], [95.3, 265.0], [95.4, 269.0], [95.5, 271.0], [95.6, 276.0], [95.7, 280.0], [95.8, 285.0], [95.9, 291.0], [96.0, 296.0], [96.1, 304.0], [96.2, 309.0], [96.3, 323.0], [96.4, 335.0], [96.5, 350.0], [96.6, 371.0], [96.7, 391.0], [96.8, 416.0], [96.9, 440.0], [97.0, 455.0], [97.1, 468.0], [97.2, 487.0], [97.3, 500.0], [97.4, 508.0], [97.5, 517.0], [97.6, 570.0], [97.7, 606.0], [97.8, 651.0], [97.9, 723.0], [98.0, 834.0], [98.1, 1018.0], [98.2, 1173.0], [98.3, 1182.0], [98.4, 1191.0], [98.5, 1238.0], [98.6, 1655.0], [98.7, 1808.0], [98.8, 1915.0], [98.9, 2516.0], [99.0, 3061.0], [99.1, 3706.0], [99.2, 4042.0], [99.3, 4360.0], [99.4, 4877.0], [99.5, 5142.0], [99.6, 5733.0], [99.7, 6317.0], [99.8, 6921.0], [99.9, 8320.0], [100.0, 14796.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 8855.0, "series": [{"data": [[600.0, 24.0], [700.0, 9.0], [800.0, 8.0], [900.0, 1.0], [1000.0, 5.0], [1100.0, 32.0], [1200.0, 9.0], [1300.0, 4.0], [1500.0, 1.0], [1600.0, 6.0], [1700.0, 3.0], [1800.0, 13.0], [1900.0, 2.0], [2000.0, 2.0], [2200.0, 2.0], [2300.0, 1.0], [2400.0, 2.0], [2500.0, 3.0], [2600.0, 2.0], [2800.0, 2.0], [2700.0, 1.0], [2900.0, 1.0], [3000.0, 3.0], [3100.0, 2.0], [3200.0, 1.0], [3400.0, 2.0], [3500.0, 2.0], [3700.0, 3.0], [3600.0, 2.0], [3800.0, 1.0], [3900.0, 4.0], [4000.0, 9.0], [4300.0, 2.0], [4100.0, 2.0], [4200.0, 1.0], [4500.0, 2.0], [4600.0, 1.0], [4800.0, 7.0], [4700.0, 2.0], [5100.0, 7.0], [4900.0, 2.0], [5000.0, 1.0], [5200.0, 1.0], [5300.0, 1.0], [5400.0, 2.0], [5500.0, 1.0], [5700.0, 5.0], [6100.0, 2.0], [5900.0, 2.0], [6000.0, 1.0], [6300.0, 5.0], [6200.0, 1.0], [6400.0, 2.0], [6700.0, 3.0], [6900.0, 1.0], [7000.0, 3.0], [7400.0, 1.0], [7300.0, 1.0], [7500.0, 1.0], [7600.0, 1.0], [7900.0, 1.0], [8600.0, 1.0], [8500.0, 1.0], [8700.0, 2.0], [8300.0, 2.0], [9000.0, 1.0], [9400.0, 1.0], [10000.0, 1.0], [10400.0, 1.0], [14100.0, 1.0], [14700.0, 1.0], [100.0, 8855.0], [200.0, 751.0], [300.0, 67.0], [400.0, 55.0], [500.0, 36.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 14700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 125.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 9731.0, "series": [{"data": [[0.0, 9731.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 125.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 144.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 3.9670932358318116, "minX": 1.72860426E12, "maxY": 21.14686248331107, "series": [{"data": [[1.72860468E12, 4.129432624113474], [1.72860438E12, 4.093441150044926], [1.72860432E12, 4.34391534391534], [1.7286045E12, 4.1370967741935445], [1.7286048E12, 4.147928994082842], [1.72860444E12, 4.195121951219516], [1.72860462E12, 3.9670932358318116], [1.72860456E12, 4.089189189189193], [1.72860426E12, 21.14686248331107], [1.72860474E12, 4.0594059405940595]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7286048E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 169.41970443349746, "minX": 1.0, "maxY": 7524.0, "series": [{"data": [[2.0, 188.71739130434784], [3.0, 169.41970443349746], [4.0, 180.55439537180808], [5.0, 222.1337760910815], [6.0, 225.50986842105257], [7.0, 213.63414634146335], [8.0, 296.8947368421053], [9.0, 274.0], [10.0, 1782.0], [11.0, 309.12499999999994], [12.0, 341.25], [13.0, 1910.6666666666667], [14.0, 521.8571428571428], [15.0, 445.0], [16.0, 381.0], [17.0, 751.0], [18.0, 740.0], [19.0, 694.0], [20.0, 4641.0], [21.0, 4483.5], [22.0, 4664.0], [23.0, 6459.5], [24.0, 4486.0], [25.0, 3118.25], [26.0, 2824.0], [27.0, 557.6666666666666], [28.0, 1771.4], [29.0, 346.0], [30.0, 1490.5], [31.0, 385.0], [33.0, 671.3333333333334], [35.0, 3293.0], [34.0, 480.0], [37.0, 5051.5], [36.0, 531.0], [39.0, 2257.0], [41.0, 599.5], [42.0, 611.0], [45.0, 624.0], [44.0, 617.3333333333334], [46.0, 1139.0], [49.0, 6921.0], [48.0, 1138.0], [51.0, 2954.6666666666665], [50.0, 4187.5], [53.0, 2581.5], [52.0, 4431.6], [55.0, 1382.75], [54.0, 5189.75], [57.0, 2629.0], [56.0, 4852.5], [59.0, 2309.0], [58.0, 3024.0], [61.0, 500.0], [60.0, 1655.0], [63.0, 484.0], [62.0, 1586.0], [67.0, 1351.0], [66.0, 1366.0], [65.0, 2746.0], [64.0, 502.0], [71.0, 850.0], [70.0, 851.0], [69.0, 2043.0], [68.0, 1360.0], [75.0, 1456.6666666666665], [74.0, 2688.0], [73.0, 1934.0], [72.0, 836.0], [79.0, 4701.666666666667], [78.0, 3108.5], [77.0, 2212.75], [76.0, 2897.3333333333335], [83.0, 4096.0], [82.0, 3465.6666666666665], [81.0, 3593.0], [80.0, 3643.0], [87.0, 5420.0], [86.0, 7524.0], [85.0, 4064.5], [91.0, 5724.75], [89.0, 6612.5], [90.0, 3740.166666666667], [88.0, 3631.3333333333335], [95.0, 4045.3333333333335], [94.0, 4618.0], [93.0, 4958.0], [92.0, 6779.0], [96.0, 4331.25], [99.0, 5237.0], [97.0, 4984.0], [103.0, 5751.0], [102.0, 5066.5], [100.0, 5962.0], [106.0, 3549.0], [105.0, 7069.0], [104.0, 7057.0], [111.0, 3590.0], [110.0, 5239.0], [108.0, 5730.5], [113.0, 3490.1176470588234], [1.0, 174.47619047619048]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[5.403099999999989, 251.22049999999822]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 113.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 676.0, "minX": 1.72860426E12, "maxY": 1276292.2333333334, "series": [{"data": [[1.72860468E12, 1269568.0833333333], [1.72860438E12, 1252678.9833333334], [1.72860432E12, 1276292.2333333334], [1.7286045E12, 1256059.0833333333], [1.7286048E12, 380421.23333333334], [1.72860444E12, 1245929.0666666667], [1.72860462E12, 1231301.0333333334], [1.72860456E12, 1249308.4], [1.72860426E12, 842971.1], [1.72860474E12, 1250437.25]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.72860468E12, 2256.0], [1.72860438E12, 2226.0], [1.72860432E12, 2268.0], [1.7286045E12, 2232.0], [1.7286048E12, 676.0], [1.72860444E12, 2214.0], [1.72860462E12, 2188.0], [1.72860456E12, 2220.0], [1.72860426E12, 1498.0], [1.72860474E12, 2222.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7286048E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 176.36993699369947, "minX": 1.72860426E12, "maxY": 1085.612817089453, "series": [{"data": [[1.72860468E12, 181.69326241134763], [1.72860438E12, 183.4600179694519], [1.72860432E12, 190.90564373897712], [1.7286045E12, 185.74103942652323], [1.7286048E12, 184.5177514792899], [1.72860444E12, 189.43270099367675], [1.72860462E12, 178.4497257769652], [1.72860456E12, 182.81621621621628], [1.72860426E12, 1085.612817089453], [1.72860474E12, 176.36993699369947]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7286048E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 134.1188118811884, "minX": 1.72860426E12, "maxY": 947.7837116154874, "series": [{"data": [[1.72860468E12, 139.03368794326255], [1.72860438E12, 139.71428571428595], [1.72860432E12, 146.97619047619068], [1.7286045E12, 142.84050179211468], [1.7286048E12, 142.11242603550298], [1.72860444E12, 144.64227642276396], [1.72860462E12, 135.86654478976246], [1.72860456E12, 139.5207207207208], [1.72860426E12, 947.7837116154874], [1.72860474E12, 134.1188118811884]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7286048E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 87.41764176417615, "minX": 1.72860426E12, "maxY": 721.7316421895862, "series": [{"data": [[1.72860468E12, 91.86081560283684], [1.72860438E12, 90.16621743036846], [1.72860432E12, 97.28218694885366], [1.7286045E12, 92.93548387096769], [1.7286048E12, 92.37573964497044], [1.72860444E12, 95.16892502258355], [1.72860462E12, 88.28427787934183], [1.72860456E12, 91.47387387387391], [1.72860426E12, 721.7316421895862], [1.72860474E12, 87.41764176417615]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7286048E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 149.0, "minX": 1.72860426E12, "maxY": 14796.0, "series": [{"data": [[1.72860468E12, 1182.0], [1.72860438E12, 1177.0], [1.72860432E12, 3191.0], [1.7286045E12, 1218.0], [1.7286048E12, 1183.0], [1.72860444E12, 1191.0], [1.72860462E12, 1194.0], [1.72860456E12, 1206.0], [1.72860426E12, 14796.0], [1.72860474E12, 1186.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.72860468E12, 190.0], [1.72860438E12, 204.0], [1.72860432E12, 208.0], [1.7286045E12, 204.30000000000007], [1.7286048E12, 191.10000000000002], [1.72860444E12, 220.0], [1.72860462E12, 191.0], [1.72860456E12, 195.89999999999998], [1.72860426E12, 4096.0], [1.72860474E12, 184.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.72860468E12, 485.6900000000014], [1.72860438E12, 401.7599999999984], [1.72860432E12, 509.60000000000036], [1.7286045E12, 503.9599999999991], [1.7286048E12, 516.5400000000002], [1.72860444E12, 450.9200000000001], [1.72860462E12, 438.1999999999989], [1.72860456E12, 463.0100000000009], [1.72860426E12, 8715.0], [1.72860474E12, 271.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.72860468E12, 201.0], [1.72860438E12, 234.0], [1.72860432E12, 244.25], [1.7286045E12, 237.0], [1.7286048E12, 225.05], [1.72860444E12, 261.19999999999936], [1.72860462E12, 204.25], [1.72860456E12, 214.0], [1.72860426E12, 5838.0], [1.72860474E12, 200.39999999999986]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.72860468E12, 150.0], [1.72860438E12, 155.0], [1.72860432E12, 154.0], [1.7286045E12, 153.0], [1.7286048E12, 153.0], [1.72860444E12, 152.0], [1.72860462E12, 149.0], [1.72860456E12, 154.0], [1.72860426E12, 159.0], [1.72860474E12, 149.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.72860468E12, 171.0], [1.72860438E12, 174.0], [1.72860432E12, 173.0], [1.7286045E12, 172.0], [1.7286048E12, 173.0], [1.72860444E12, 173.0], [1.72860462E12, 170.5], [1.72860456E12, 171.0], [1.72860426E12, 180.0], [1.72860474E12, 170.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7286048E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 170.0, "minX": 2.0, "maxY": 4882.0, "series": [{"data": [[2.0, 171.0], [35.0, 1915.0], [36.0, 741.0], [40.0, 608.0], [51.0, 2516.0], [4.0, 181.0], [5.0, 174.0], [8.0, 183.0], [11.0, 171.0], [12.0, 181.0], [14.0, 174.0], [15.0, 174.0], [16.0, 177.0], [17.0, 174.0], [18.0, 171.0], [19.0, 171.0], [20.0, 172.0], [21.0, 179.0], [22.0, 201.0], [23.0, 179.5], [24.0, 183.5], [25.0, 206.0], [28.0, 170.0], [29.0, 4882.0], [30.0, 170.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 51.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 129.0, "minX": 2.0, "maxY": 4881.0, "series": [{"data": [[2.0, 130.0], [35.0, 1911.0], [36.0, 582.5], [40.0, 476.0], [51.0, 2394.0], [4.0, 139.0], [5.0, 134.0], [8.0, 145.0], [11.0, 131.0], [12.0, 135.5], [14.0, 129.5], [15.0, 133.0], [16.0, 132.0], [17.0, 131.0], [18.0, 130.0], [19.0, 130.0], [20.0, 130.0], [21.0, 135.5], [22.0, 158.5], [23.0, 136.0], [24.0, 137.5], [25.0, 153.0], [28.0, 129.5], [29.0, 4881.0], [30.0, 129.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 51.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.583333333333333, "minX": 1.72860426E12, "maxY": 18.966666666666665, "series": [{"data": [[1.72860468E12, 18.75], [1.72860438E12, 18.483333333333334], [1.72860432E12, 18.966666666666665], [1.7286045E12, 18.633333333333333], [1.7286048E12, 5.583333333333333], [1.72860444E12, 18.433333333333334], [1.72860462E12, 18.25], [1.72860456E12, 18.466666666666665], [1.72860426E12, 12.55], [1.72860474E12, 18.55]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7286048E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.633333333333334, "minX": 1.72860426E12, "maxY": 18.9, "series": [{"data": [[1.72860468E12, 18.8], [1.72860438E12, 18.55], [1.72860432E12, 18.9], [1.7286045E12, 18.6], [1.7286048E12, 5.633333333333334], [1.72860444E12, 18.45], [1.72860462E12, 18.233333333333334], [1.72860456E12, 18.5], [1.72860426E12, 12.483333333333333], [1.72860474E12, 18.516666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7286048E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.633333333333334, "minX": 1.72860426E12, "maxY": 18.9, "series": [{"data": [[1.72860468E12, 18.8], [1.72860438E12, 18.55], [1.72860432E12, 18.9], [1.7286045E12, 18.6], [1.7286048E12, 5.633333333333334], [1.72860444E12, 18.45], [1.72860462E12, 18.233333333333334], [1.72860456E12, 18.5], [1.72860426E12, 12.483333333333333], [1.72860474E12, 18.516666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7286048E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.633333333333334, "minX": 1.72860426E12, "maxY": 18.9, "series": [{"data": [[1.72860468E12, 18.8], [1.72860438E12, 18.55], [1.72860432E12, 18.9], [1.7286045E12, 18.6], [1.7286048E12, 5.633333333333334], [1.72860444E12, 18.45], [1.72860462E12, 18.233333333333334], [1.72860456E12, 18.5], [1.72860426E12, 12.483333333333333], [1.72860474E12, 18.516666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7286048E12, "title": "Total Transactions Per Second"}},
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

