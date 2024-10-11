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
        data: {"result": {"minY": 149.0, "minX": 0.0, "maxY": 5707.0, "series": [{"data": [[0.0, 149.0], [0.1, 154.0], [0.2, 155.0], [0.3, 156.0], [0.4, 157.0], [0.5, 157.0], [0.6, 157.0], [0.7, 158.0], [0.8, 158.0], [0.9, 158.0], [1.0, 159.0], [1.1, 159.0], [1.2, 159.0], [1.3, 159.0], [1.4, 159.0], [1.5, 160.0], [1.6, 160.0], [1.7, 160.0], [1.8, 160.0], [1.9, 160.0], [2.0, 160.0], [2.1, 160.0], [2.2, 160.0], [2.3, 160.0], [2.4, 161.0], [2.5, 161.0], [2.6, 161.0], [2.7, 161.0], [2.8, 161.0], [2.9, 161.0], [3.0, 161.0], [3.1, 161.0], [3.2, 161.0], [3.3, 161.0], [3.4, 162.0], [3.5, 162.0], [3.6, 162.0], [3.7, 162.0], [3.8, 162.0], [3.9, 162.0], [4.0, 162.0], [4.1, 162.0], [4.2, 162.0], [4.3, 162.0], [4.4, 162.0], [4.5, 163.0], [4.6, 163.0], [4.7, 163.0], [4.8, 163.0], [4.9, 163.0], [5.0, 163.0], [5.1, 163.0], [5.2, 163.0], [5.3, 163.0], [5.4, 163.0], [5.5, 163.0], [5.6, 163.0], [5.7, 163.0], [5.8, 163.0], [5.9, 163.0], [6.0, 163.0], [6.1, 163.0], [6.2, 163.0], [6.3, 164.0], [6.4, 164.0], [6.5, 164.0], [6.6, 164.0], [6.7, 164.0], [6.8, 164.0], [6.9, 164.0], [7.0, 164.0], [7.1, 164.0], [7.2, 164.0], [7.3, 164.0], [7.4, 164.0], [7.5, 164.0], [7.6, 164.0], [7.7, 164.0], [7.8, 164.0], [7.9, 164.0], [8.0, 164.0], [8.1, 164.0], [8.2, 165.0], [8.3, 165.0], [8.4, 165.0], [8.5, 165.0], [8.6, 165.0], [8.7, 165.0], [8.8, 165.0], [8.9, 165.0], [9.0, 165.0], [9.1, 165.0], [9.2, 165.0], [9.3, 165.0], [9.4, 165.0], [9.5, 165.0], [9.6, 165.0], [9.7, 165.0], [9.8, 165.0], [9.9, 165.0], [10.0, 165.0], [10.1, 165.0], [10.2, 165.0], [10.3, 165.0], [10.4, 165.0], [10.5, 165.0], [10.6, 165.0], [10.7, 165.0], [10.8, 165.0], [10.9, 166.0], [11.0, 166.0], [11.1, 166.0], [11.2, 166.0], [11.3, 166.0], [11.4, 166.0], [11.5, 166.0], [11.6, 166.0], [11.7, 166.0], [11.8, 166.0], [11.9, 166.0], [12.0, 166.0], [12.1, 166.0], [12.2, 166.0], [12.3, 166.0], [12.4, 166.0], [12.5, 166.0], [12.6, 166.0], [12.7, 166.0], [12.8, 166.0], [12.9, 166.0], [13.0, 166.0], [13.1, 166.0], [13.2, 166.0], [13.3, 166.0], [13.4, 166.0], [13.5, 166.0], [13.6, 166.0], [13.7, 166.0], [13.8, 166.0], [13.9, 166.0], [14.0, 166.0], [14.1, 166.0], [14.2, 167.0], [14.3, 167.0], [14.4, 167.0], [14.5, 167.0], [14.6, 167.0], [14.7, 167.0], [14.8, 167.0], [14.9, 167.0], [15.0, 167.0], [15.1, 167.0], [15.2, 167.0], [15.3, 167.0], [15.4, 167.0], [15.5, 167.0], [15.6, 167.0], [15.7, 167.0], [15.8, 167.0], [15.9, 167.0], [16.0, 167.0], [16.1, 167.0], [16.2, 167.0], [16.3, 167.0], [16.4, 167.0], [16.5, 167.0], [16.6, 167.0], [16.7, 167.0], [16.8, 167.0], [16.9, 167.0], [17.0, 167.0], [17.1, 167.0], [17.2, 167.0], [17.3, 167.0], [17.4, 167.0], [17.5, 167.0], [17.6, 168.0], [17.7, 168.0], [17.8, 168.0], [17.9, 168.0], [18.0, 168.0], [18.1, 168.0], [18.2, 168.0], [18.3, 168.0], [18.4, 168.0], [18.5, 168.0], [18.6, 168.0], [18.7, 168.0], [18.8, 168.0], [18.9, 168.0], [19.0, 168.0], [19.1, 168.0], [19.2, 168.0], [19.3, 168.0], [19.4, 168.0], [19.5, 168.0], [19.6, 168.0], [19.7, 168.0], [19.8, 168.0], [19.9, 168.0], [20.0, 168.0], [20.1, 168.0], [20.2, 168.0], [20.3, 168.0], [20.4, 168.0], [20.5, 168.0], [20.6, 168.0], [20.7, 168.0], [20.8, 168.0], [20.9, 168.0], [21.0, 169.0], [21.1, 169.0], [21.2, 169.0], [21.3, 169.0], [21.4, 169.0], [21.5, 169.0], [21.6, 169.0], [21.7, 169.0], [21.8, 169.0], [21.9, 169.0], [22.0, 169.0], [22.1, 169.0], [22.2, 169.0], [22.3, 169.0], [22.4, 169.0], [22.5, 169.0], [22.6, 169.0], [22.7, 169.0], [22.8, 169.0], [22.9, 169.0], [23.0, 169.0], [23.1, 169.0], [23.2, 169.0], [23.3, 169.0], [23.4, 169.0], [23.5, 169.0], [23.6, 169.0], [23.7, 169.0], [23.8, 169.0], [23.9, 169.0], [24.0, 169.0], [24.1, 169.0], [24.2, 169.0], [24.3, 169.0], [24.4, 169.0], [24.5, 169.0], [24.6, 170.0], [24.7, 170.0], [24.8, 170.0], [24.9, 170.0], [25.0, 170.0], [25.1, 170.0], [25.2, 170.0], [25.3, 170.0], [25.4, 170.0], [25.5, 170.0], [25.6, 170.0], [25.7, 170.0], [25.8, 170.0], [25.9, 170.0], [26.0, 170.0], [26.1, 170.0], [26.2, 170.0], [26.3, 170.0], [26.4, 170.0], [26.5, 170.0], [26.6, 170.0], [26.7, 170.0], [26.8, 170.0], [26.9, 170.0], [27.0, 170.0], [27.1, 170.0], [27.2, 170.0], [27.3, 170.0], [27.4, 170.0], [27.5, 170.0], [27.6, 170.0], [27.7, 170.0], [27.8, 170.0], [27.9, 170.0], [28.0, 170.0], [28.1, 170.0], [28.2, 170.0], [28.3, 170.0], [28.4, 170.0], [28.5, 170.0], [28.6, 171.0], [28.7, 171.0], [28.8, 171.0], [28.9, 171.0], [29.0, 171.0], [29.1, 171.0], [29.2, 171.0], [29.3, 171.0], [29.4, 171.0], [29.5, 171.0], [29.6, 171.0], [29.7, 171.0], [29.8, 171.0], [29.9, 171.0], [30.0, 171.0], [30.1, 171.0], [30.2, 171.0], [30.3, 171.0], [30.4, 171.0], [30.5, 171.0], [30.6, 171.0], [30.7, 171.0], [30.8, 171.0], [30.9, 171.0], [31.0, 171.0], [31.1, 171.0], [31.2, 171.0], [31.3, 171.0], [31.4, 171.0], [31.5, 171.0], [31.6, 171.0], [31.7, 171.0], [31.8, 171.0], [31.9, 171.0], [32.0, 171.0], [32.1, 171.0], [32.2, 171.0], [32.3, 171.0], [32.4, 171.0], [32.5, 171.0], [32.6, 171.0], [32.7, 171.0], [32.8, 171.0], [32.9, 171.0], [33.0, 171.0], [33.1, 171.0], [33.2, 171.0], [33.3, 172.0], [33.4, 172.0], [33.5, 172.0], [33.6, 172.0], [33.7, 172.0], [33.8, 172.0], [33.9, 172.0], [34.0, 172.0], [34.1, 172.0], [34.2, 172.0], [34.3, 172.0], [34.4, 172.0], [34.5, 172.0], [34.6, 172.0], [34.7, 172.0], [34.8, 172.0], [34.9, 172.0], [35.0, 172.0], [35.1, 172.0], [35.2, 172.0], [35.3, 172.0], [35.4, 172.0], [35.5, 172.0], [35.6, 172.0], [35.7, 172.0], [35.8, 172.0], [35.9, 172.0], [36.0, 172.0], [36.1, 172.0], [36.2, 172.0], [36.3, 172.0], [36.4, 172.0], [36.5, 172.0], [36.6, 172.0], [36.7, 172.0], [36.8, 172.0], [36.9, 172.0], [37.0, 172.0], [37.1, 172.0], [37.2, 172.0], [37.3, 172.0], [37.4, 172.0], [37.5, 172.0], [37.6, 172.0], [37.7, 172.0], [37.8, 172.0], [37.9, 173.0], [38.0, 173.0], [38.1, 173.0], [38.2, 173.0], [38.3, 173.0], [38.4, 173.0], [38.5, 173.0], [38.6, 173.0], [38.7, 173.0], [38.8, 173.0], [38.9, 173.0], [39.0, 173.0], [39.1, 173.0], [39.2, 173.0], [39.3, 173.0], [39.4, 173.0], [39.5, 173.0], [39.6, 173.0], [39.7, 173.0], [39.8, 173.0], [39.9, 173.0], [40.0, 173.0], [40.1, 173.0], [40.2, 173.0], [40.3, 173.0], [40.4, 173.0], [40.5, 173.0], [40.6, 173.0], [40.7, 173.0], [40.8, 173.0], [40.9, 173.0], [41.0, 173.0], [41.1, 173.0], [41.2, 173.0], [41.3, 173.0], [41.4, 173.0], [41.5, 173.0], [41.6, 173.0], [41.7, 173.0], [41.8, 173.0], [41.9, 173.0], [42.0, 173.0], [42.1, 173.0], [42.2, 173.0], [42.3, 173.0], [42.4, 173.0], [42.5, 173.0], [42.6, 173.0], [42.7, 173.0], [42.8, 173.0], [42.9, 174.0], [43.0, 174.0], [43.1, 174.0], [43.2, 174.0], [43.3, 174.0], [43.4, 174.0], [43.5, 174.0], [43.6, 174.0], [43.7, 174.0], [43.8, 174.0], [43.9, 174.0], [44.0, 174.0], [44.1, 174.0], [44.2, 174.0], [44.3, 174.0], [44.4, 174.0], [44.5, 174.0], [44.6, 174.0], [44.7, 174.0], [44.8, 174.0], [44.9, 174.0], [45.0, 174.0], [45.1, 174.0], [45.2, 174.0], [45.3, 174.0], [45.4, 174.0], [45.5, 174.0], [45.6, 174.0], [45.7, 174.0], [45.8, 174.0], [45.9, 174.0], [46.0, 174.0], [46.1, 174.0], [46.2, 174.0], [46.3, 174.0], [46.4, 174.0], [46.5, 174.0], [46.6, 174.0], [46.7, 174.0], [46.8, 174.0], [46.9, 174.0], [47.0, 174.0], [47.1, 174.0], [47.2, 174.0], [47.3, 174.0], [47.4, 174.0], [47.5, 174.0], [47.6, 174.0], [47.7, 174.0], [47.8, 175.0], [47.9, 175.0], [48.0, 175.0], [48.1, 175.0], [48.2, 175.0], [48.3, 175.0], [48.4, 175.0], [48.5, 175.0], [48.6, 175.0], [48.7, 175.0], [48.8, 175.0], [48.9, 175.0], [49.0, 175.0], [49.1, 175.0], [49.2, 175.0], [49.3, 175.0], [49.4, 175.0], [49.5, 175.0], [49.6, 175.0], [49.7, 175.0], [49.8, 175.0], [49.9, 175.0], [50.0, 175.0], [50.1, 175.0], [50.2, 175.0], [50.3, 175.0], [50.4, 175.0], [50.5, 175.0], [50.6, 175.0], [50.7, 175.0], [50.8, 175.0], [50.9, 175.0], [51.0, 175.0], [51.1, 175.0], [51.2, 175.0], [51.3, 175.0], [51.4, 175.0], [51.5, 175.0], [51.6, 175.0], [51.7, 175.0], [51.8, 175.0], [51.9, 175.0], [52.0, 175.0], [52.1, 175.0], [52.2, 175.0], [52.3, 176.0], [52.4, 176.0], [52.5, 176.0], [52.6, 176.0], [52.7, 176.0], [52.8, 176.0], [52.9, 176.0], [53.0, 176.0], [53.1, 176.0], [53.2, 176.0], [53.3, 176.0], [53.4, 176.0], [53.5, 176.0], [53.6, 176.0], [53.7, 176.0], [53.8, 176.0], [53.9, 176.0], [54.0, 176.0], [54.1, 176.0], [54.2, 176.0], [54.3, 176.0], [54.4, 176.0], [54.5, 176.0], [54.6, 176.0], [54.7, 176.0], [54.8, 176.0], [54.9, 176.0], [55.0, 176.0], [55.1, 176.0], [55.2, 176.0], [55.3, 176.0], [55.4, 176.0], [55.5, 176.0], [55.6, 176.0], [55.7, 176.0], [55.8, 176.0], [55.9, 176.0], [56.0, 177.0], [56.1, 177.0], [56.2, 177.0], [56.3, 177.0], [56.4, 177.0], [56.5, 177.0], [56.6, 177.0], [56.7, 177.0], [56.8, 177.0], [56.9, 177.0], [57.0, 177.0], [57.1, 177.0], [57.2, 177.0], [57.3, 177.0], [57.4, 177.0], [57.5, 177.0], [57.6, 177.0], [57.7, 177.0], [57.8, 177.0], [57.9, 177.0], [58.0, 177.0], [58.1, 177.0], [58.2, 177.0], [58.3, 177.0], [58.4, 177.0], [58.5, 177.0], [58.6, 177.0], [58.7, 177.0], [58.8, 177.0], [58.9, 177.0], [59.0, 177.0], [59.1, 177.0], [59.2, 177.0], [59.3, 177.0], [59.4, 177.0], [59.5, 177.0], [59.6, 177.0], [59.7, 177.0], [59.8, 178.0], [59.9, 178.0], [60.0, 178.0], [60.1, 178.0], [60.2, 178.0], [60.3, 178.0], [60.4, 178.0], [60.5, 178.0], [60.6, 178.0], [60.7, 178.0], [60.8, 178.0], [60.9, 178.0], [61.0, 178.0], [61.1, 178.0], [61.2, 178.0], [61.3, 178.0], [61.4, 178.0], [61.5, 178.0], [61.6, 178.0], [61.7, 178.0], [61.8, 178.0], [61.9, 178.0], [62.0, 178.0], [62.1, 178.0], [62.2, 178.0], [62.3, 178.0], [62.4, 178.0], [62.5, 178.0], [62.6, 178.0], [62.7, 178.0], [62.8, 178.0], [62.9, 178.0], [63.0, 179.0], [63.1, 179.0], [63.2, 179.0], [63.3, 179.0], [63.4, 179.0], [63.5, 179.0], [63.6, 179.0], [63.7, 179.0], [63.8, 179.0], [63.9, 179.0], [64.0, 179.0], [64.1, 179.0], [64.2, 179.0], [64.3, 179.0], [64.4, 179.0], [64.5, 179.0], [64.6, 179.0], [64.7, 179.0], [64.8, 179.0], [64.9, 179.0], [65.0, 179.0], [65.1, 179.0], [65.2, 179.0], [65.3, 179.0], [65.4, 179.0], [65.5, 179.0], [65.6, 179.0], [65.7, 180.0], [65.8, 180.0], [65.9, 180.0], [66.0, 180.0], [66.1, 180.0], [66.2, 180.0], [66.3, 180.0], [66.4, 180.0], [66.5, 180.0], [66.6, 180.0], [66.7, 180.0], [66.8, 180.0], [66.9, 180.0], [67.0, 180.0], [67.1, 180.0], [67.2, 180.0], [67.3, 180.0], [67.4, 180.0], [67.5, 180.0], [67.6, 180.0], [67.7, 180.0], [67.8, 180.0], [67.9, 180.0], [68.0, 180.0], [68.1, 180.0], [68.2, 181.0], [68.3, 181.0], [68.4, 181.0], [68.5, 181.0], [68.6, 181.0], [68.7, 181.0], [68.8, 181.0], [68.9, 181.0], [69.0, 181.0], [69.1, 181.0], [69.2, 181.0], [69.3, 181.0], [69.4, 181.0], [69.5, 181.0], [69.6, 181.0], [69.7, 181.0], [69.8, 181.0], [69.9, 181.0], [70.0, 181.0], [70.1, 181.0], [70.2, 181.0], [70.3, 181.0], [70.4, 181.0], [70.5, 181.0], [70.6, 182.0], [70.7, 182.0], [70.8, 182.0], [70.9, 182.0], [71.0, 182.0], [71.1, 182.0], [71.2, 182.0], [71.3, 182.0], [71.4, 182.0], [71.5, 182.0], [71.6, 182.0], [71.7, 182.0], [71.8, 182.0], [71.9, 182.0], [72.0, 182.0], [72.1, 182.0], [72.2, 182.0], [72.3, 182.0], [72.4, 182.0], [72.5, 182.0], [72.6, 182.0], [72.7, 182.0], [72.8, 182.0], [72.9, 182.0], [73.0, 182.0], [73.1, 183.0], [73.2, 183.0], [73.3, 183.0], [73.4, 183.0], [73.5, 183.0], [73.6, 183.0], [73.7, 183.0], [73.8, 183.0], [73.9, 183.0], [74.0, 183.0], [74.1, 183.0], [74.2, 183.0], [74.3, 183.0], [74.4, 183.0], [74.5, 183.0], [74.6, 183.0], [74.7, 183.0], [74.8, 183.0], [74.9, 183.0], [75.0, 183.0], [75.1, 183.0], [75.2, 183.0], [75.3, 184.0], [75.4, 184.0], [75.5, 184.0], [75.6, 184.0], [75.7, 184.0], [75.8, 184.0], [75.9, 184.0], [76.0, 184.0], [76.1, 184.0], [76.2, 184.0], [76.3, 184.0], [76.4, 184.0], [76.5, 184.0], [76.6, 184.0], [76.7, 184.0], [76.8, 184.0], [76.9, 184.0], [77.0, 184.0], [77.1, 184.0], [77.2, 184.0], [77.3, 185.0], [77.4, 185.0], [77.5, 185.0], [77.6, 185.0], [77.7, 185.0], [77.8, 185.0], [77.9, 185.0], [78.0, 185.0], [78.1, 185.0], [78.2, 185.0], [78.3, 185.0], [78.4, 185.0], [78.5, 185.0], [78.6, 185.0], [78.7, 185.0], [78.8, 185.0], [78.9, 185.0], [79.0, 185.0], [79.1, 185.0], [79.2, 186.0], [79.3, 186.0], [79.4, 186.0], [79.5, 186.0], [79.6, 186.0], [79.7, 186.0], [79.8, 186.0], [79.9, 186.0], [80.0, 186.0], [80.1, 186.0], [80.2, 186.0], [80.3, 186.0], [80.4, 186.0], [80.5, 186.0], [80.6, 186.0], [80.7, 186.0], [80.8, 186.0], [80.9, 187.0], [81.0, 187.0], [81.1, 187.0], [81.2, 187.0], [81.3, 187.0], [81.4, 187.0], [81.5, 187.0], [81.6, 187.0], [81.7, 187.0], [81.8, 187.0], [81.9, 187.0], [82.0, 187.0], [82.1, 187.0], [82.2, 187.0], [82.3, 187.0], [82.4, 188.0], [82.5, 188.0], [82.6, 188.0], [82.7, 188.0], [82.8, 188.0], [82.9, 188.0], [83.0, 188.0], [83.1, 188.0], [83.2, 188.0], [83.3, 188.0], [83.4, 188.0], [83.5, 188.0], [83.6, 188.0], [83.7, 188.0], [83.8, 188.0], [83.9, 189.0], [84.0, 189.0], [84.1, 189.0], [84.2, 189.0], [84.3, 189.0], [84.4, 189.0], [84.5, 189.0], [84.6, 189.0], [84.7, 189.0], [84.8, 189.0], [84.9, 189.0], [85.0, 189.0], [85.1, 190.0], [85.2, 190.0], [85.3, 190.0], [85.4, 190.0], [85.5, 190.0], [85.6, 190.0], [85.7, 190.0], [85.8, 190.0], [85.9, 190.0], [86.0, 190.0], [86.1, 191.0], [86.2, 191.0], [86.3, 191.0], [86.4, 191.0], [86.5, 191.0], [86.6, 191.0], [86.7, 191.0], [86.8, 191.0], [86.9, 191.0], [87.0, 192.0], [87.1, 192.0], [87.2, 192.0], [87.3, 192.0], [87.4, 192.0], [87.5, 192.0], [87.6, 192.0], [87.7, 192.0], [87.8, 193.0], [87.9, 193.0], [88.0, 193.0], [88.1, 193.0], [88.2, 193.0], [88.3, 193.0], [88.4, 193.0], [88.5, 194.0], [88.6, 194.0], [88.7, 194.0], [88.8, 194.0], [88.9, 194.0], [89.0, 194.0], [89.1, 194.0], [89.2, 195.0], [89.3, 195.0], [89.4, 195.0], [89.5, 195.0], [89.6, 195.0], [89.7, 195.0], [89.8, 195.0], [89.9, 196.0], [90.0, 196.0], [90.1, 196.0], [90.2, 196.0], [90.3, 196.0], [90.4, 196.0], [90.5, 197.0], [90.6, 197.0], [90.7, 197.0], [90.8, 197.0], [90.9, 198.0], [91.0, 198.0], [91.1, 198.0], [91.2, 198.0], [91.3, 199.0], [91.4, 199.0], [91.5, 199.0], [91.6, 199.0], [91.7, 200.0], [91.8, 200.0], [91.9, 200.0], [92.0, 200.0], [92.1, 201.0], [92.2, 201.0], [92.3, 201.0], [92.4, 202.0], [92.5, 202.0], [92.6, 202.0], [92.7, 203.0], [92.8, 203.0], [92.9, 203.0], [93.0, 204.0], [93.1, 204.0], [93.2, 205.0], [93.3, 205.0], [93.4, 206.0], [93.5, 206.0], [93.6, 206.0], [93.7, 207.0], [93.8, 208.0], [93.9, 208.0], [94.0, 209.0], [94.1, 209.0], [94.2, 210.0], [94.3, 211.0], [94.4, 211.0], [94.5, 212.0], [94.6, 212.0], [94.7, 213.0], [94.8, 214.0], [94.9, 214.0], [95.0, 215.0], [95.1, 215.0], [95.2, 216.0], [95.3, 217.0], [95.4, 217.0], [95.5, 218.0], [95.6, 219.0], [95.7, 220.0], [95.8, 221.0], [95.9, 222.0], [96.0, 224.0], [96.1, 225.0], [96.2, 227.0], [96.3, 228.0], [96.4, 229.0], [96.5, 230.0], [96.6, 233.0], [96.7, 236.0], [96.8, 241.0], [96.9, 243.0], [97.0, 246.0], [97.1, 255.0], [97.2, 261.0], [97.3, 269.0], [97.4, 278.0], [97.5, 288.0], [97.6, 305.0], [97.7, 346.0], [97.8, 396.0], [97.9, 427.0], [98.0, 435.0], [98.1, 451.0], [98.2, 464.0], [98.3, 473.0], [98.4, 490.0], [98.5, 502.0], [98.6, 510.0], [98.7, 531.0], [98.8, 654.0], [98.9, 889.0], [99.0, 1174.0], [99.1, 1178.0], [99.2, 1186.0], [99.3, 1192.0], [99.4, 1392.0], [99.5, 2151.0], [99.6, 2988.0], [99.7, 3487.0], [99.8, 4191.0], [99.9, 5118.0], [100.0, 5707.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 9160.0, "series": [{"data": [[600.0, 8.0], [800.0, 9.0], [900.0, 1.0], [1100.0, 44.0], [1200.0, 4.0], [1300.0, 2.0], [1400.0, 1.0], [100.0, 9160.0], [1700.0, 3.0], [1800.0, 2.0], [1900.0, 2.0], [2100.0, 1.0], [2300.0, 1.0], [2400.0, 2.0], [2600.0, 3.0], [2700.0, 1.0], [2800.0, 2.0], [2900.0, 1.0], [3000.0, 2.0], [3100.0, 1.0], [200.0, 597.0], [3200.0, 3.0], [3300.0, 1.0], [3400.0, 4.0], [3500.0, 1.0], [3600.0, 2.0], [3700.0, 1.0], [3900.0, 1.0], [4000.0, 3.0], [4100.0, 1.0], [4300.0, 2.0], [4200.0, 2.0], [4400.0, 1.0], [4500.0, 1.0], [4600.0, 1.0], [300.0, 23.0], [4700.0, 1.0], [5000.0, 1.0], [5100.0, 1.0], [5200.0, 1.0], [5300.0, 1.0], [5400.0, 1.0], [5600.0, 5.0], [5700.0, 2.0], [400.0, 65.0], [500.0, 28.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 58.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 9848.0, "series": [{"data": [[0.0, 9848.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 94.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 58.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 3.423694779116466, "minX": 1.72865676E12, "maxY": 8.685494223363282, "series": [{"data": [[1.72865718E12, 3.5161290322580627], [1.72865736E12, 3.4266055045871564], [1.728657E12, 3.423694779116466], [1.72865682E12, 3.4418604651162843], [1.72865724E12, 3.555118110236224], [1.72865712E12, 3.5284147557328014], [1.72865694E12, 3.510891089108907], [1.72865676E12, 8.685494223363282], [1.7286573E12, 3.468000000000001], [1.72865706E12, 3.430010070493453], [1.72865688E12, 3.4432270916334646]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72865736E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 172.4923762206612, "minX": 1.0, "maxY": 5644.5, "series": [{"data": [[2.0, 176.6507936507936], [3.0, 172.4923762206612], [4.0, 199.95918984280553], [5.0, 223.54411764705884], [6.0, 229.59090909090912], [7.0, 364.24999999999994], [8.0, 268.83333333333337], [9.0, 293.25], [10.0, 950.2499999999999], [11.0, 2114.0], [13.0, 5499.0], [15.0, 5644.5], [16.0, 3713.0], [17.0, 4630.0], [19.0, 3866.3333333333335], [20.0, 2717.5], [21.0, 5181.5], [22.0, 316.5], [23.0, 4336.5], [24.0, 332.0], [26.0, 2080.75], [27.0, 2846.5], [28.0, 309.0], [29.0, 1867.5], [30.0, 368.0], [31.0, 413.0], [33.0, 1326.5], [32.0, 4396.5], [35.0, 3231.25], [34.0, 2622.8], [37.0, 657.0], [36.0, 388.0], [38.0, 3487.0], [41.0, 2460.0], [43.0, 2372.0], [46.0, 1894.0], [49.0, 3010.5], [51.0, 3049.0], [50.0, 771.5], [52.0, 1954.0], [55.0, 2254.4], [57.0, 884.0], [56.0, 1658.6], [58.0, 864.5], [61.0, 1794.0], [60.0, 2132.0], [63.0, 1754.0], [62.0, 4208.0], [67.0, 2700.0], [66.0, 1705.0], [65.0, 619.0], [64.0, 4353.0], [71.0, 3563.5], [70.0, 4043.0], [69.0, 1904.0], [68.0, 1842.0], [75.0, 722.5], [73.0, 830.0], [72.0, 2413.0], [79.0, 3280.0], [78.0, 4191.0], [77.0, 1763.0], [83.0, 271.0], [82.0, 293.0], [81.0, 281.0], [80.0, 300.0], [1.0, 279.3]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[3.884399999999985, 207.62579999999943]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 83.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 436.0, "minX": 1.72865676E12, "maxY": 1143561.3833333333, "series": [{"data": [[1.72865718E12, 1116547.05], [1.72865736E12, 245370.86666666667], [1.728657E12, 1121047.6333333333], [1.72865682E12, 1113139.8333333333], [1.72865724E12, 1143561.3833333333], [1.72865712E12, 1128927.65], [1.72865694E12, 1136804.5166666666], [1.72865676E12, 876797.3], [1.7286573E12, 1125553.75], [1.72865706E12, 1117671.2], [1.72865688E12, 1130040.6333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.72865718E12, 1984.0], [1.72865736E12, 436.0], [1.728657E12, 1992.0], [1.72865682E12, 1978.0], [1.72865724E12, 2032.0], [1.72865712E12, 2006.0], [1.72865694E12, 2020.0], [1.72865676E12, 1558.0], [1.7286573E12, 2000.0], [1.72865706E12, 1986.0], [1.72865688E12, 2008.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72865736E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 182.52293577981652, "minX": 1.72865676E12, "maxY": 471.91784338896036, "series": [{"data": [[1.72865718E12, 187.70866935483886], [1.72865736E12, 182.52293577981652], [1.728657E12, 184.0040160642569], [1.72865682E12, 184.8604651162793], [1.72865724E12, 183.05511811023635], [1.72865712E12, 188.55234297108666], [1.72865694E12, 186.56237623762397], [1.72865676E12, 471.91784338896036], [1.7286573E12, 185.7579999999998], [1.72865706E12, 184.09164149043312], [1.72865688E12, 183.71613545816732]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72865736E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 138.45767716535454, "minX": 1.72865676E12, "maxY": 420.8562259306796, "series": [{"data": [[1.72865718E12, 143.54032258064518], [1.72865736E12, 139.60550458715588], [1.728657E12, 140.96787148594373], [1.72865682E12, 141.22548028311454], [1.72865724E12, 138.45767716535454], [1.72865712E12, 144.40777666999008], [1.72865694E12, 142.40891089108902], [1.72865676E12, 420.8562259306796], [1.7286573E12, 142.0829999999997], [1.72865706E12, 139.5357502517625], [1.72865688E12, 139.80278884462155]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72865736E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 89.9783464566929, "minX": 1.72865676E12, "maxY": 318.34146341463486, "series": [{"data": [[1.72865718E12, 95.77116935483886], [1.72865736E12, 91.21100917431194], [1.728657E12, 93.28614457831326], [1.72865682E12, 93.56622851365015], [1.72865724E12, 89.9783464566929], [1.72865712E12, 95.47756729810568], [1.72865694E12, 94.24554455445544], [1.72865676E12, 318.34146341463486], [1.7286573E12, 95.00400000000019], [1.72865706E12, 90.785498489426], [1.72865688E12, 91.79581673306761]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72865736E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 149.0, "minX": 1.72865676E12, "maxY": 5707.0, "series": [{"data": [[1.72865718E12, 1198.0], [1.72865736E12, 1208.0], [1.728657E12, 1234.0], [1.72865682E12, 1471.0], [1.72865724E12, 1195.0], [1.72865712E12, 1191.0], [1.72865694E12, 1198.0], [1.72865676E12, 5707.0], [1.7286573E12, 1192.0], [1.72865706E12, 1187.0], [1.72865688E12, 1210.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.72865718E12, 197.0], [1.72865736E12, 188.1], [1.728657E12, 189.0], [1.72865682E12, 192.0], [1.72865724E12, 194.0], [1.72865712E12, 196.0], [1.72865694E12, 195.0], [1.72865676E12, 619.0], [1.7286573E12, 192.89999999999998], [1.72865706E12, 195.0], [1.72865688E12, 194.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.72865718E12, 504.9599999999982], [1.72865736E12, 446.06000000000006], [1.728657E12, 458.3599999999997], [1.72865682E12, 484.00000000000045], [1.72865724E12, 329.79000000000053], [1.72865712E12, 506.72000000000025], [1.72865694E12, 489.1199999999999], [1.72865676E12, 5479.400000000007], [1.7286573E12, 499.4800000000005], [1.72865706E12, 453.71999999999935], [1.72865688E12, 443.85000000000014]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.72865718E12, 215.3499999999999], [1.72865736E12, 195.19999999999993], [1.728657E12, 197.0], [1.72865682E12, 204.0], [1.72865724E12, 203.14999999999998], [1.72865712E12, 217.79999999999995], [1.72865694E12, 208.89999999999986], [1.72865676E12, 3072.0], [1.7286573E12, 207.94999999999993], [1.72865706E12, 211.29999999999995], [1.72865688E12, 202.75]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.72865718E12, 155.0], [1.72865736E12, 158.0], [1.728657E12, 154.0], [1.72865682E12, 157.0], [1.72865724E12, 155.0], [1.72865712E12, 152.0], [1.72865694E12, 153.0], [1.72865676E12, 153.0], [1.7286573E12, 151.0], [1.72865706E12, 149.0], [1.72865688E12, 153.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.72865718E12, 174.0], [1.72865736E12, 174.0], [1.728657E12, 174.0], [1.72865682E12, 175.0], [1.72865724E12, 175.0], [1.72865712E12, 175.0], [1.72865694E12, 175.0], [1.72865676E12, 181.0], [1.7286573E12, 174.0], [1.72865706E12, 175.0], [1.72865688E12, 175.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72865736E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 174.0, "minX": 1.0, "maxY": 1894.0, "series": [{"data": [[2.0, 282.0], [36.0, 368.5], [9.0, 181.0], [11.0, 177.0], [12.0, 180.5], [13.0, 176.0], [14.0, 178.5], [15.0, 176.0], [16.0, 175.0], [1.0, 176.0], [17.0, 174.0], [18.0, 176.0], [77.0, 1894.0], [19.0, 176.0], [20.0, 178.0], [21.0, 215.0], [29.0, 241.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 77.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 131.0, "minX": 1.0, "maxY": 1751.0, "series": [{"data": [[2.0, 188.5], [36.0, 269.0], [9.0, 140.0], [11.0, 132.0], [12.0, 135.5], [13.0, 135.0], [14.0, 135.0], [15.0, 133.0], [16.0, 132.0], [1.0, 137.0], [17.0, 131.0], [18.0, 133.0], [77.0, 1751.0], [19.0, 132.0], [20.0, 134.0], [21.0, 168.0], [29.0, 184.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 77.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.5833333333333335, "minX": 1.72865676E12, "maxY": 16.933333333333334, "series": [{"data": [[1.72865718E12, 16.533333333333335], [1.72865736E12, 3.5833333333333335], [1.728657E12, 16.616666666666667], [1.72865682E12, 16.5], [1.72865724E12, 16.933333333333334], [1.72865712E12, 16.716666666666665], [1.72865694E12, 16.8], [1.72865676E12, 13.033333333333333], [1.7286573E12, 16.666666666666668], [1.72865706E12, 16.55], [1.72865688E12, 16.733333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72865736E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.6333333333333333, "minX": 1.72865676E12, "maxY": 16.933333333333334, "series": [{"data": [[1.72865718E12, 16.533333333333335], [1.72865736E12, 3.6333333333333333], [1.728657E12, 16.6], [1.72865682E12, 16.483333333333334], [1.72865724E12, 16.933333333333334], [1.72865712E12, 16.716666666666665], [1.72865694E12, 16.833333333333332], [1.72865676E12, 12.983333333333333], [1.7286573E12, 16.666666666666668], [1.72865706E12, 16.55], [1.72865688E12, 16.733333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72865736E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.6333333333333333, "minX": 1.72865676E12, "maxY": 16.933333333333334, "series": [{"data": [[1.72865718E12, 16.533333333333335], [1.72865736E12, 3.6333333333333333], [1.728657E12, 16.6], [1.72865682E12, 16.483333333333334], [1.72865724E12, 16.933333333333334], [1.72865712E12, 16.716666666666665], [1.72865694E12, 16.833333333333332], [1.72865676E12, 12.983333333333333], [1.7286573E12, 16.666666666666668], [1.72865706E12, 16.55], [1.72865688E12, 16.733333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72865736E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.6333333333333333, "minX": 1.72865676E12, "maxY": 16.933333333333334, "series": [{"data": [[1.72865718E12, 16.533333333333335], [1.72865736E12, 3.6333333333333333], [1.728657E12, 16.6], [1.72865682E12, 16.483333333333334], [1.72865724E12, 16.933333333333334], [1.72865712E12, 16.716666666666665], [1.72865694E12, 16.833333333333332], [1.72865676E12, 12.983333333333333], [1.7286573E12, 16.666666666666668], [1.72865706E12, 16.55], [1.72865688E12, 16.733333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72865736E12, "title": "Total Transactions Per Second"}},
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

