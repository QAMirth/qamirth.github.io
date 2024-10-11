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
        data: {"result": {"minY": 149.0, "minX": 0.0, "maxY": 11638.0, "series": [{"data": [[0.0, 149.0], [0.1, 154.0], [0.2, 155.0], [0.3, 155.0], [0.4, 156.0], [0.5, 156.0], [0.6, 156.0], [0.7, 156.0], [0.8, 157.0], [0.9, 157.0], [1.0, 157.0], [1.1, 157.0], [1.2, 157.0], [1.3, 158.0], [1.4, 158.0], [1.5, 158.0], [1.6, 158.0], [1.7, 158.0], [1.8, 159.0], [1.9, 159.0], [2.0, 159.0], [2.1, 159.0], [2.2, 159.0], [2.3, 159.0], [2.4, 159.0], [2.5, 159.0], [2.6, 159.0], [2.7, 160.0], [2.8, 160.0], [2.9, 160.0], [3.0, 160.0], [3.1, 160.0], [3.2, 160.0], [3.3, 160.0], [3.4, 160.0], [3.5, 160.0], [3.6, 160.0], [3.7, 160.0], [3.8, 160.0], [3.9, 160.0], [4.0, 160.0], [4.1, 160.0], [4.2, 161.0], [4.3, 161.0], [4.4, 161.0], [4.5, 161.0], [4.6, 161.0], [4.7, 161.0], [4.8, 161.0], [4.9, 161.0], [5.0, 161.0], [5.1, 161.0], [5.2, 161.0], [5.3, 161.0], [5.4, 161.0], [5.5, 161.0], [5.6, 161.0], [5.7, 161.0], [5.8, 161.0], [5.9, 161.0], [6.0, 161.0], [6.1, 161.0], [6.2, 162.0], [6.3, 162.0], [6.4, 162.0], [6.5, 162.0], [6.6, 162.0], [6.7, 162.0], [6.8, 162.0], [6.9, 162.0], [7.0, 162.0], [7.1, 162.0], [7.2, 162.0], [7.3, 162.0], [7.4, 162.0], [7.5, 162.0], [7.6, 162.0], [7.7, 162.0], [7.8, 162.0], [7.9, 162.0], [8.0, 162.0], [8.1, 162.0], [8.2, 162.0], [8.3, 162.0], [8.4, 162.0], [8.5, 162.0], [8.6, 162.0], [8.7, 162.0], [8.8, 162.0], [8.9, 163.0], [9.0, 163.0], [9.1, 163.0], [9.2, 163.0], [9.3, 163.0], [9.4, 163.0], [9.5, 163.0], [9.6, 163.0], [9.7, 163.0], [9.8, 163.0], [9.9, 163.0], [10.0, 163.0], [10.1, 163.0], [10.2, 163.0], [10.3, 163.0], [10.4, 163.0], [10.5, 163.0], [10.6, 163.0], [10.7, 163.0], [10.8, 163.0], [10.9, 163.0], [11.0, 163.0], [11.1, 163.0], [11.2, 163.0], [11.3, 163.0], [11.4, 163.0], [11.5, 163.0], [11.6, 163.0], [11.7, 163.0], [11.8, 163.0], [11.9, 163.0], [12.0, 163.0], [12.1, 164.0], [12.2, 164.0], [12.3, 164.0], [12.4, 164.0], [12.5, 164.0], [12.6, 164.0], [12.7, 164.0], [12.8, 164.0], [12.9, 164.0], [13.0, 164.0], [13.1, 164.0], [13.2, 164.0], [13.3, 164.0], [13.4, 164.0], [13.5, 164.0], [13.6, 164.0], [13.7, 164.0], [13.8, 164.0], [13.9, 164.0], [14.0, 164.0], [14.1, 164.0], [14.2, 164.0], [14.3, 164.0], [14.4, 164.0], [14.5, 164.0], [14.6, 164.0], [14.7, 164.0], [14.8, 164.0], [14.9, 164.0], [15.0, 164.0], [15.1, 164.0], [15.2, 164.0], [15.3, 164.0], [15.4, 164.0], [15.5, 164.0], [15.6, 164.0], [15.7, 165.0], [15.8, 165.0], [15.9, 165.0], [16.0, 165.0], [16.1, 165.0], [16.2, 165.0], [16.3, 165.0], [16.4, 165.0], [16.5, 165.0], [16.6, 165.0], [16.7, 165.0], [16.8, 165.0], [16.9, 165.0], [17.0, 165.0], [17.1, 165.0], [17.2, 165.0], [17.3, 165.0], [17.4, 165.0], [17.5, 165.0], [17.6, 165.0], [17.7, 165.0], [17.8, 165.0], [17.9, 165.0], [18.0, 165.0], [18.1, 165.0], [18.2, 165.0], [18.3, 165.0], [18.4, 165.0], [18.5, 165.0], [18.6, 165.0], [18.7, 165.0], [18.8, 165.0], [18.9, 165.0], [19.0, 165.0], [19.1, 165.0], [19.2, 165.0], [19.3, 165.0], [19.4, 165.0], [19.5, 165.0], [19.6, 165.0], [19.7, 165.0], [19.8, 165.0], [19.9, 166.0], [20.0, 166.0], [20.1, 166.0], [20.2, 166.0], [20.3, 166.0], [20.4, 166.0], [20.5, 166.0], [20.6, 166.0], [20.7, 166.0], [20.8, 166.0], [20.9, 166.0], [21.0, 166.0], [21.1, 166.0], [21.2, 166.0], [21.3, 166.0], [21.4, 166.0], [21.5, 166.0], [21.6, 166.0], [21.7, 166.0], [21.8, 166.0], [21.9, 166.0], [22.0, 166.0], [22.1, 166.0], [22.2, 166.0], [22.3, 166.0], [22.4, 166.0], [22.5, 166.0], [22.6, 166.0], [22.7, 166.0], [22.8, 166.0], [22.9, 166.0], [23.0, 166.0], [23.1, 166.0], [23.2, 166.0], [23.3, 166.0], [23.4, 166.0], [23.5, 166.0], [23.6, 166.0], [23.7, 166.0], [23.8, 166.0], [23.9, 166.0], [24.0, 167.0], [24.1, 167.0], [24.2, 167.0], [24.3, 167.0], [24.4, 167.0], [24.5, 167.0], [24.6, 167.0], [24.7, 167.0], [24.8, 167.0], [24.9, 167.0], [25.0, 167.0], [25.1, 167.0], [25.2, 167.0], [25.3, 167.0], [25.4, 167.0], [25.5, 167.0], [25.6, 167.0], [25.7, 167.0], [25.8, 167.0], [25.9, 167.0], [26.0, 167.0], [26.1, 167.0], [26.2, 167.0], [26.3, 167.0], [26.4, 167.0], [26.5, 167.0], [26.6, 167.0], [26.7, 167.0], [26.8, 167.0], [26.9, 167.0], [27.0, 167.0], [27.1, 167.0], [27.2, 167.0], [27.3, 167.0], [27.4, 167.0], [27.5, 167.0], [27.6, 167.0], [27.7, 167.0], [27.8, 167.0], [27.9, 167.0], [28.0, 167.0], [28.1, 167.0], [28.2, 167.0], [28.3, 167.0], [28.4, 167.0], [28.5, 167.0], [28.6, 167.0], [28.7, 167.0], [28.8, 168.0], [28.9, 168.0], [29.0, 168.0], [29.1, 168.0], [29.2, 168.0], [29.3, 168.0], [29.4, 168.0], [29.5, 168.0], [29.6, 168.0], [29.7, 168.0], [29.8, 168.0], [29.9, 168.0], [30.0, 168.0], [30.1, 168.0], [30.2, 168.0], [30.3, 168.0], [30.4, 168.0], [30.5, 168.0], [30.6, 168.0], [30.7, 168.0], [30.8, 168.0], [30.9, 168.0], [31.0, 168.0], [31.1, 168.0], [31.2, 168.0], [31.3, 168.0], [31.4, 168.0], [31.5, 168.0], [31.6, 168.0], [31.7, 168.0], [31.8, 168.0], [31.9, 168.0], [32.0, 168.0], [32.1, 168.0], [32.2, 168.0], [32.3, 168.0], [32.4, 168.0], [32.5, 168.0], [32.6, 168.0], [32.7, 168.0], [32.8, 168.0], [32.9, 168.0], [33.0, 168.0], [33.1, 168.0], [33.2, 168.0], [33.3, 168.0], [33.4, 169.0], [33.5, 169.0], [33.6, 169.0], [33.7, 169.0], [33.8, 169.0], [33.9, 169.0], [34.0, 169.0], [34.1, 169.0], [34.2, 169.0], [34.3, 169.0], [34.4, 169.0], [34.5, 169.0], [34.6, 169.0], [34.7, 169.0], [34.8, 169.0], [34.9, 169.0], [35.0, 169.0], [35.1, 169.0], [35.2, 169.0], [35.3, 169.0], [35.4, 169.0], [35.5, 169.0], [35.6, 169.0], [35.7, 169.0], [35.8, 169.0], [35.9, 169.0], [36.0, 169.0], [36.1, 169.0], [36.2, 169.0], [36.3, 169.0], [36.4, 169.0], [36.5, 169.0], [36.6, 169.0], [36.7, 169.0], [36.8, 169.0], [36.9, 169.0], [37.0, 169.0], [37.1, 169.0], [37.2, 169.0], [37.3, 169.0], [37.4, 169.0], [37.5, 169.0], [37.6, 169.0], [37.7, 169.0], [37.8, 170.0], [37.9, 170.0], [38.0, 170.0], [38.1, 170.0], [38.2, 170.0], [38.3, 170.0], [38.4, 170.0], [38.5, 170.0], [38.6, 170.0], [38.7, 170.0], [38.8, 170.0], [38.9, 170.0], [39.0, 170.0], [39.1, 170.0], [39.2, 170.0], [39.3, 170.0], [39.4, 170.0], [39.5, 170.0], [39.6, 170.0], [39.7, 170.0], [39.8, 170.0], [39.9, 170.0], [40.0, 170.0], [40.1, 170.0], [40.2, 170.0], [40.3, 170.0], [40.4, 170.0], [40.5, 170.0], [40.6, 170.0], [40.7, 170.0], [40.8, 170.0], [40.9, 170.0], [41.0, 170.0], [41.1, 170.0], [41.2, 170.0], [41.3, 170.0], [41.4, 170.0], [41.5, 170.0], [41.6, 170.0], [41.7, 170.0], [41.8, 171.0], [41.9, 171.0], [42.0, 171.0], [42.1, 171.0], [42.2, 171.0], [42.3, 171.0], [42.4, 171.0], [42.5, 171.0], [42.6, 171.0], [42.7, 171.0], [42.8, 171.0], [42.9, 171.0], [43.0, 171.0], [43.1, 171.0], [43.2, 171.0], [43.3, 171.0], [43.4, 171.0], [43.5, 171.0], [43.6, 171.0], [43.7, 171.0], [43.8, 171.0], [43.9, 171.0], [44.0, 171.0], [44.1, 171.0], [44.2, 171.0], [44.3, 171.0], [44.4, 171.0], [44.5, 171.0], [44.6, 171.0], [44.7, 171.0], [44.8, 171.0], [44.9, 171.0], [45.0, 171.0], [45.1, 171.0], [45.2, 171.0], [45.3, 171.0], [45.4, 171.0], [45.5, 171.0], [45.6, 171.0], [45.7, 171.0], [45.8, 171.0], [45.9, 171.0], [46.0, 172.0], [46.1, 172.0], [46.2, 172.0], [46.3, 172.0], [46.4, 172.0], [46.5, 172.0], [46.6, 172.0], [46.7, 172.0], [46.8, 172.0], [46.9, 172.0], [47.0, 172.0], [47.1, 172.0], [47.2, 172.0], [47.3, 172.0], [47.4, 172.0], [47.5, 172.0], [47.6, 172.0], [47.7, 172.0], [47.8, 172.0], [47.9, 172.0], [48.0, 172.0], [48.1, 172.0], [48.2, 172.0], [48.3, 172.0], [48.4, 172.0], [48.5, 172.0], [48.6, 172.0], [48.7, 172.0], [48.8, 172.0], [48.9, 172.0], [49.0, 172.0], [49.1, 172.0], [49.2, 172.0], [49.3, 172.0], [49.4, 172.0], [49.5, 172.0], [49.6, 172.0], [49.7, 172.0], [49.8, 172.0], [49.9, 173.0], [50.0, 173.0], [50.1, 173.0], [50.2, 173.0], [50.3, 173.0], [50.4, 173.0], [50.5, 173.0], [50.6, 173.0], [50.7, 173.0], [50.8, 173.0], [50.9, 173.0], [51.0, 173.0], [51.1, 173.0], [51.2, 173.0], [51.3, 173.0], [51.4, 173.0], [51.5, 173.0], [51.6, 173.0], [51.7, 173.0], [51.8, 173.0], [51.9, 173.0], [52.0, 173.0], [52.1, 173.0], [52.2, 173.0], [52.3, 173.0], [52.4, 173.0], [52.5, 173.0], [52.6, 173.0], [52.7, 173.0], [52.8, 173.0], [52.9, 173.0], [53.0, 173.0], [53.1, 173.0], [53.2, 173.0], [53.3, 174.0], [53.4, 174.0], [53.5, 174.0], [53.6, 174.0], [53.7, 174.0], [53.8, 174.0], [53.9, 174.0], [54.0, 174.0], [54.1, 174.0], [54.2, 174.0], [54.3, 174.0], [54.4, 174.0], [54.5, 174.0], [54.6, 174.0], [54.7, 174.0], [54.8, 174.0], [54.9, 174.0], [55.0, 174.0], [55.1, 174.0], [55.2, 174.0], [55.3, 174.0], [55.4, 174.0], [55.5, 174.0], [55.6, 174.0], [55.7, 174.0], [55.8, 174.0], [55.9, 174.0], [56.0, 174.0], [56.1, 174.0], [56.2, 174.0], [56.3, 175.0], [56.4, 175.0], [56.5, 175.0], [56.6, 175.0], [56.7, 175.0], [56.8, 175.0], [56.9, 175.0], [57.0, 175.0], [57.1, 175.0], [57.2, 175.0], [57.3, 175.0], [57.4, 175.0], [57.5, 175.0], [57.6, 175.0], [57.7, 175.0], [57.8, 175.0], [57.9, 175.0], [58.0, 175.0], [58.1, 175.0], [58.2, 175.0], [58.3, 175.0], [58.4, 175.0], [58.5, 175.0], [58.6, 175.0], [58.7, 175.0], [58.8, 175.0], [58.9, 175.0], [59.0, 175.0], [59.1, 175.0], [59.2, 175.0], [59.3, 176.0], [59.4, 176.0], [59.5, 176.0], [59.6, 176.0], [59.7, 176.0], [59.8, 176.0], [59.9, 176.0], [60.0, 176.0], [60.1, 176.0], [60.2, 176.0], [60.3, 176.0], [60.4, 176.0], [60.5, 176.0], [60.6, 176.0], [60.7, 176.0], [60.8, 176.0], [60.9, 176.0], [61.0, 176.0], [61.1, 176.0], [61.2, 176.0], [61.3, 176.0], [61.4, 176.0], [61.5, 176.0], [61.6, 176.0], [61.7, 176.0], [61.8, 176.0], [61.9, 176.0], [62.0, 177.0], [62.1, 177.0], [62.2, 177.0], [62.3, 177.0], [62.4, 177.0], [62.5, 177.0], [62.6, 177.0], [62.7, 177.0], [62.8, 177.0], [62.9, 177.0], [63.0, 177.0], [63.1, 177.0], [63.2, 177.0], [63.3, 177.0], [63.4, 177.0], [63.5, 177.0], [63.6, 177.0], [63.7, 177.0], [63.8, 177.0], [63.9, 177.0], [64.0, 177.0], [64.1, 177.0], [64.2, 177.0], [64.3, 177.0], [64.4, 177.0], [64.5, 178.0], [64.6, 178.0], [64.7, 178.0], [64.8, 178.0], [64.9, 178.0], [65.0, 178.0], [65.1, 178.0], [65.2, 178.0], [65.3, 178.0], [65.4, 178.0], [65.5, 178.0], [65.6, 178.0], [65.7, 178.0], [65.8, 178.0], [65.9, 178.0], [66.0, 178.0], [66.1, 178.0], [66.2, 178.0], [66.3, 178.0], [66.4, 178.0], [66.5, 178.0], [66.6, 178.0], [66.7, 178.0], [66.8, 179.0], [66.9, 179.0], [67.0, 179.0], [67.1, 179.0], [67.2, 179.0], [67.3, 179.0], [67.4, 179.0], [67.5, 179.0], [67.6, 179.0], [67.7, 179.0], [67.8, 179.0], [67.9, 179.0], [68.0, 179.0], [68.1, 179.0], [68.2, 179.0], [68.3, 179.0], [68.4, 179.0], [68.5, 179.0], [68.6, 179.0], [68.7, 179.0], [68.8, 179.0], [68.9, 179.0], [69.0, 180.0], [69.1, 180.0], [69.2, 180.0], [69.3, 180.0], [69.4, 180.0], [69.5, 180.0], [69.6, 180.0], [69.7, 180.0], [69.8, 180.0], [69.9, 180.0], [70.0, 180.0], [70.1, 180.0], [70.2, 180.0], [70.3, 180.0], [70.4, 180.0], [70.5, 180.0], [70.6, 180.0], [70.7, 180.0], [70.8, 180.0], [70.9, 181.0], [71.0, 181.0], [71.1, 181.0], [71.2, 181.0], [71.3, 181.0], [71.4, 181.0], [71.5, 181.0], [71.6, 181.0], [71.7, 181.0], [71.8, 181.0], [71.9, 181.0], [72.0, 181.0], [72.1, 181.0], [72.2, 181.0], [72.3, 181.0], [72.4, 182.0], [72.5, 182.0], [72.6, 182.0], [72.7, 182.0], [72.8, 182.0], [72.9, 182.0], [73.0, 182.0], [73.1, 182.0], [73.2, 182.0], [73.3, 182.0], [73.4, 182.0], [73.5, 182.0], [73.6, 182.0], [73.7, 182.0], [73.8, 182.0], [73.9, 182.0], [74.0, 182.0], [74.1, 182.0], [74.2, 183.0], [74.3, 183.0], [74.4, 183.0], [74.5, 183.0], [74.6, 183.0], [74.7, 183.0], [74.8, 183.0], [74.9, 183.0], [75.0, 183.0], [75.1, 183.0], [75.2, 183.0], [75.3, 184.0], [75.4, 184.0], [75.5, 184.0], [75.6, 184.0], [75.7, 184.0], [75.8, 184.0], [75.9, 184.0], [76.0, 184.0], [76.1, 184.0], [76.2, 184.0], [76.3, 185.0], [76.4, 185.0], [76.5, 185.0], [76.6, 185.0], [76.7, 185.0], [76.8, 185.0], [76.9, 185.0], [77.0, 185.0], [77.1, 185.0], [77.2, 185.0], [77.3, 186.0], [77.4, 186.0], [77.5, 186.0], [77.6, 186.0], [77.7, 186.0], [77.8, 186.0], [77.9, 186.0], [78.0, 186.0], [78.1, 186.0], [78.2, 186.0], [78.3, 187.0], [78.4, 187.0], [78.5, 187.0], [78.6, 187.0], [78.7, 187.0], [78.8, 187.0], [78.9, 187.0], [79.0, 187.0], [79.1, 187.0], [79.2, 187.0], [79.3, 188.0], [79.4, 188.0], [79.5, 188.0], [79.6, 188.0], [79.7, 188.0], [79.8, 188.0], [79.9, 189.0], [80.0, 189.0], [80.1, 189.0], [80.2, 189.0], [80.3, 189.0], [80.4, 189.0], [80.5, 189.0], [80.6, 189.0], [80.7, 189.0], [80.8, 190.0], [80.9, 190.0], [81.0, 190.0], [81.1, 190.0], [81.2, 190.0], [81.3, 190.0], [81.4, 191.0], [81.5, 191.0], [81.6, 191.0], [81.7, 191.0], [81.8, 191.0], [81.9, 191.0], [82.0, 191.0], [82.1, 192.0], [82.2, 192.0], [82.3, 192.0], [82.4, 192.0], [82.5, 192.0], [82.6, 193.0], [82.7, 193.0], [82.8, 193.0], [82.9, 193.0], [83.0, 193.0], [83.1, 193.0], [83.2, 193.0], [83.3, 194.0], [83.4, 194.0], [83.5, 194.0], [83.6, 194.0], [83.7, 194.0], [83.8, 195.0], [83.9, 195.0], [84.0, 195.0], [84.1, 195.0], [84.2, 195.0], [84.3, 196.0], [84.4, 196.0], [84.5, 196.0], [84.6, 196.0], [84.7, 196.0], [84.8, 197.0], [84.9, 197.0], [85.0, 197.0], [85.1, 197.0], [85.2, 198.0], [85.3, 198.0], [85.4, 198.0], [85.5, 198.0], [85.6, 199.0], [85.7, 199.0], [85.8, 199.0], [85.9, 199.0], [86.0, 200.0], [86.1, 200.0], [86.2, 200.0], [86.3, 201.0], [86.4, 201.0], [86.5, 201.0], [86.6, 201.0], [86.7, 201.0], [86.8, 202.0], [86.9, 202.0], [87.0, 202.0], [87.1, 202.0], [87.2, 203.0], [87.3, 203.0], [87.4, 203.0], [87.5, 204.0], [87.6, 204.0], [87.7, 204.0], [87.8, 204.0], [87.9, 205.0], [88.0, 205.0], [88.1, 205.0], [88.2, 206.0], [88.3, 206.0], [88.4, 206.0], [88.5, 206.0], [88.6, 207.0], [88.7, 207.0], [88.8, 208.0], [88.9, 208.0], [89.0, 208.0], [89.1, 209.0], [89.2, 209.0], [89.3, 210.0], [89.4, 210.0], [89.5, 211.0], [89.6, 211.0], [89.7, 211.0], [89.8, 212.0], [89.9, 213.0], [90.0, 213.0], [90.1, 214.0], [90.2, 214.0], [90.3, 215.0], [90.4, 215.0], [90.5, 216.0], [90.6, 217.0], [90.7, 217.0], [90.8, 218.0], [90.9, 218.0], [91.0, 219.0], [91.1, 219.0], [91.2, 220.0], [91.3, 220.0], [91.4, 221.0], [91.5, 221.0], [91.6, 222.0], [91.7, 222.0], [91.8, 223.0], [91.9, 224.0], [92.0, 225.0], [92.1, 226.0], [92.2, 227.0], [92.3, 228.0], [92.4, 229.0], [92.5, 230.0], [92.6, 230.0], [92.7, 231.0], [92.8, 232.0], [92.9, 233.0], [93.0, 234.0], [93.1, 234.0], [93.2, 235.0], [93.3, 236.0], [93.4, 237.0], [93.5, 238.0], [93.6, 239.0], [93.7, 240.0], [93.8, 241.0], [93.9, 243.0], [94.0, 245.0], [94.1, 246.0], [94.2, 247.0], [94.3, 249.0], [94.4, 250.0], [94.5, 252.0], [94.6, 254.0], [94.7, 255.0], [94.8, 257.0], [94.9, 259.0], [95.0, 261.0], [95.1, 263.0], [95.2, 264.0], [95.3, 268.0], [95.4, 271.0], [95.5, 273.0], [95.6, 278.0], [95.7, 281.0], [95.8, 283.0], [95.9, 288.0], [96.0, 293.0], [96.1, 299.0], [96.2, 306.0], [96.3, 311.0], [96.4, 317.0], [96.5, 331.0], [96.6, 348.0], [96.7, 368.0], [96.8, 387.0], [96.9, 408.0], [97.0, 426.0], [97.1, 447.0], [97.2, 454.0], [97.3, 464.0], [97.4, 472.0], [97.5, 476.0], [97.6, 488.0], [97.7, 501.0], [97.8, 515.0], [97.9, 525.0], [98.0, 560.0], [98.1, 710.0], [98.2, 1173.0], [98.3, 1182.0], [98.4, 1191.0], [98.5, 1256.0], [98.6, 1369.0], [98.7, 1648.0], [98.8, 1762.0], [98.9, 2331.0], [99.0, 3011.0], [99.1, 3711.0], [99.2, 4593.0], [99.3, 5254.0], [99.4, 5617.0], [99.5, 5899.0], [99.6, 6678.0], [99.7, 7519.0], [99.8, 8036.0], [99.9, 9383.0], [100.0, 11638.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 6873.0, "series": [{"data": [[600.0, 4.0], [700.0, 1.0], [800.0, 1.0], [900.0, 1.0], [1100.0, 23.0], [1200.0, 10.0], [1300.0, 5.0], [1400.0, 3.0], [1500.0, 3.0], [1600.0, 6.0], [1700.0, 5.0], [1900.0, 1.0], [2100.0, 4.0], [2300.0, 3.0], [2400.0, 2.0], [2600.0, 1.0], [2900.0, 3.0], [3000.0, 3.0], [3100.0, 1.0], [3300.0, 1.0], [3400.0, 1.0], [3500.0, 1.0], [3700.0, 1.0], [3600.0, 1.0], [3800.0, 4.0], [3900.0, 2.0], [4400.0, 1.0], [4500.0, 1.0], [4700.0, 1.0], [5000.0, 3.0], [5100.0, 1.0], [5200.0, 4.0], [5300.0, 1.0], [5500.0, 5.0], [5600.0, 3.0], [5700.0, 5.0], [5800.0, 1.0], [6000.0, 2.0], [6100.0, 1.0], [5900.0, 1.0], [6600.0, 2.0], [6400.0, 1.0], [6500.0, 1.0], [6700.0, 2.0], [6800.0, 1.0], [7200.0, 2.0], [7300.0, 1.0], [7500.0, 3.0], [7800.0, 4.0], [7700.0, 2.0], [8000.0, 1.0], [8100.0, 2.0], [8200.0, 1.0], [8500.0, 1.0], [8600.0, 1.0], [8700.0, 1.0], [9300.0, 2.0], [9400.0, 1.0], [9600.0, 1.0], [10400.0, 1.0], [10300.0, 1.0], [10500.0, 1.0], [11600.0, 2.0], [11500.0, 1.0], [100.0, 6873.0], [200.0, 815.0], [300.0, 62.0], [400.0, 63.0], [500.0, 30.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 11600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 79.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 7813.0, "series": [{"data": [[0.0, 7813.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 79.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 108.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 3.1517960602549273, "minX": 1.72860348E12, "maxY": 19.30929791271347, "series": [{"data": [[1.72860372E12, 3.3683615819209076], [1.7286039E12, 3.2243735763097914], [1.72860384E12, 3.2259887005649768], [1.72860402E12, 3.2095238095238097], [1.72860354E12, 3.1517960602549273], [1.72860396E12, 3.2703619909502226], [1.72860348E12, 19.30929791271347], [1.72860366E12, 3.41371681415929], [1.7286036E12, 3.206857142857141], [1.72860378E12, 3.2263936291240043]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72860402E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 174.4, "minX": 1.0, "maxY": 9383.0, "series": [{"data": [[2.0, 188.68983957219245], [3.0, 176.14672459893094], [4.0, 217.1832122679582], [5.0, 284.6174242424241], [6.0, 334.957894736842], [7.0, 575.5151515151515], [8.0, 1208.8], [9.0, 2096.3333333333335], [10.0, 5979.5], [11.0, 7510.0], [12.0, 9383.0], [13.0, 7558.0], [14.0, 3060.25], [15.0, 2479.857142857143], [16.0, 238.11111111111111], [17.0, 318.6], [18.0, 1599.8], [19.0, 311.0], [20.0, 279.5], [21.0, 4820.0], [22.0, 1022.6666666666667], [23.0, 1580.3333333333335], [24.0, 2102.25], [25.0, 312.0], [26.0, 1328.0], [27.0, 3157.0], [28.0, 4845.0], [29.0, 251.0], [30.0, 234.0], [31.0, 254.0], [33.0, 6604.0], [32.0, 7519.0], [35.0, 393.0], [34.0, 1717.0], [37.0, 8661.0], [36.0, 396.0], [39.0, 6474.0], [38.0, 419.0], [40.0, 5515.0], [42.0, 499.0], [45.0, 710.0], [44.0, 470.0], [47.0, 2483.6666666666665], [46.0, 536.0], [49.0, 8561.0], [48.0, 3542.3333333333335], [51.0, 1735.0], [50.0, 656.0], [53.0, 4722.5], [55.0, 2590.5], [56.0, 1517.0], [59.0, 576.0], [58.0, 1490.5], [61.0, 1646.0], [60.0, 1658.0], [63.0, 1658.0], [67.0, 2279.0], [66.0, 7207.5], [65.0, 636.0], [64.0, 1648.0], [70.0, 7011.5], [69.0, 6061.0], [68.0, 3536.75], [75.0, 3970.0], [74.0, 5467.0], [72.0, 6661.5], [79.0, 3955.5], [78.0, 3852.5], [77.0, 8095.5], [76.0, 5254.0], [83.0, 5734.0], [82.0, 5741.0], [81.0, 5261.0], [80.0, 6605.0], [87.0, 5676.0], [86.0, 5381.0], [85.0, 7852.0], [84.0, 5702.0], [91.0, 6670.0], [90.0, 3377.5], [89.0, 4745.5], [88.0, 2308.0], [95.0, 5239.0], [94.0, 5503.0], [93.0, 5509.0], [92.0, 2161.0], [99.0, 2115.0], [98.0, 2657.0], [97.0, 2957.0], [96.0, 7207.0], [103.0, 2381.0], [102.0, 2691.2], [101.0, 6796.0], [100.0, 5090.0], [106.0, 3245.5], [105.0, 3175.0], [104.0, 3711.0], [1.0, 174.4]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[4.316250000000001, 258.15349999999995]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 106.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 840.0, "minX": 1.72860348E12, "maxY": 1017450.8166666667, "series": [{"data": [[1.72860372E12, 996067.2166666667], [1.7286039E12, 988191.45], [1.72860384E12, 996068.8], [1.72860402E12, 472712.11666666664], [1.72860354E12, 971284.7833333333], [1.72860396E12, 994945.5166666667], [1.72860348E12, 593117.4666666667], [1.72860366E12, 1017450.8166666667], [1.7286036E12, 984807.6166666667], [1.72860378E12, 989314.9]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.72860372E12, 1770.0], [1.7286039E12, 1756.0], [1.72860384E12, 1770.0], [1.72860402E12, 840.0], [1.72860354E12, 1726.0], [1.72860396E12, 1768.0], [1.72860348E12, 1054.0], [1.72860366E12, 1808.0], [1.7286036E12, 1750.0], [1.72860378E12, 1758.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72860402E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 181.8595238095239, "minX": 1.72860348E12, "maxY": 1278.1745730550283, "series": [{"data": [[1.72860372E12, 194.00790960451974], [1.7286039E12, 186.0045558086561], [1.72860384E12, 185.33785310734476], [1.72860402E12, 181.8595238095239], [1.72860354E12, 182.05677867902705], [1.72860396E12, 188.20022624434404], [1.72860348E12, 1278.1745730550283], [1.72860366E12, 187.63938053097354], [1.7286036E12, 183.0937142857144], [1.72860378E12, 185.32309442548356]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72860402E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 138.26904761904757, "minX": 1.72860348E12, "maxY": 1144.726755218218, "series": [{"data": [[1.72860372E12, 149.69943502824873], [1.7286039E12, 141.27676537585418], [1.72860384E12, 141.2248587570622], [1.72860402E12, 138.26904761904757], [1.72860354E12, 140.00231749710306], [1.72860396E12, 142.96153846153845], [1.72860348E12, 1144.726755218218], [1.72860366E12, 143.40929203539815], [1.7286036E12, 140.1737142857143], [1.72860378E12, 142.50284414106937]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72860402E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 90.27346465816912, "minX": 1.72860348E12, "maxY": 983.7779886147986, "series": [{"data": [[1.72860372E12, 98.71073446327695], [1.7286039E12, 91.63781321184507], [1.72860384E12, 92.90395480225985], [1.72860402E12, 90.37142857142858], [1.72860354E12, 90.27346465816912], [1.72860396E12, 92.11425339366517], [1.72860348E12, 983.7779886147986], [1.72860366E12, 94.83185840707962], [1.7286036E12, 92.57371428571419], [1.72860378E12, 94.7383390216154]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72860402E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 149.0, "minX": 1.72860348E12, "maxY": 11638.0, "series": [{"data": [[1.72860372E12, 1421.0], [1.7286039E12, 1202.0], [1.72860384E12, 1186.0], [1.72860402E12, 1179.0], [1.72860354E12, 1215.0], [1.72860396E12, 1191.0], [1.72860348E12, 11638.0], [1.72860366E12, 1232.0], [1.7286036E12, 1230.0], [1.72860378E12, 1256.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.72860372E12, 220.0], [1.7286039E12, 211.10000000000002], [1.72860384E12, 198.0], [1.72860402E12, 201.90000000000003], [1.72860354E12, 195.60000000000002], [1.72860396E12, 219.5], [1.72860348E12, 5510.2], [1.72860366E12, 210.5], [1.7286036E12, 204.39999999999998], [1.72860378E12, 195.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.72860372E12, 536.6199999999989], [1.7286039E12, 471.0], [1.72860384E12, 510.9799999999999], [1.72860402E12, 310.32000000000016], [1.72860354E12, 453.80000000000007], [1.72860396E12, 473.1999999999998], [1.72860348E12, 10423.040000000003], [1.72860366E12, 443.600000000004], [1.7286036E12, 446.4000000000001], [1.72860378E12, 527.2000000000019]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.72860372E12, 272.69999999999993], [1.7286039E12, 244.04999999999995], [1.72860384E12, 227.0], [1.72860402E12, 228.5999999999999], [1.72860354E12, 213.79999999999995], [1.72860396E12, 245.75], [1.72860348E12, 7453.199999999995], [1.72860366E12, 235.75], [1.7286036E12, 231.19999999999993], [1.72860378E12, 213.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.72860372E12, 151.0], [1.7286039E12, 156.0], [1.72860384E12, 154.0], [1.72860402E12, 154.0], [1.72860354E12, 152.0], [1.72860396E12, 154.0], [1.72860348E12, 157.0], [1.72860366E12, 154.0], [1.7286036E12, 149.0], [1.72860378E12, 152.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.72860372E12, 172.0], [1.7286039E12, 173.0], [1.72860384E12, 171.0], [1.72860402E12, 172.0], [1.72860354E12, 172.0], [1.72860396E12, 174.0], [1.72860348E12, 189.0], [1.72860366E12, 174.0], [1.7286036E12, 171.0], [1.72860378E12, 171.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72860402E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 163.0, "minX": 4.0, "maxY": 5573.5, "series": [{"data": [[8.0, 173.5], [9.0, 177.5], [10.0, 176.0], [11.0, 180.0], [12.0, 181.5], [52.0, 5573.5], [13.0, 177.0], [14.0, 172.0], [58.0, 1490.5], [15.0, 171.0], [16.0, 175.0], [4.0, 163.0], [17.0, 177.5], [18.0, 178.5], [19.0, 196.0], [5.0, 170.0], [20.0, 167.0], [24.0, 195.5], [26.0, 185.0], [28.0, 346.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 58.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 122.5, "minX": 4.0, "maxY": 5316.0, "series": [{"data": [[8.0, 129.5], [9.0, 134.5], [10.0, 131.5], [11.0, 135.0], [12.0, 135.0], [52.0, 5316.0], [13.0, 133.0], [14.0, 130.0], [58.0, 1312.5], [15.0, 130.0], [16.0, 133.0], [4.0, 122.5], [17.0, 134.0], [18.0, 137.5], [19.0, 150.5], [5.0, 131.0], [20.0, 126.5], [24.0, 149.5], [26.0, 137.5], [28.0, 268.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 58.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.933333333333334, "minX": 1.72860348E12, "maxY": 15.066666666666666, "series": [{"data": [[1.72860372E12, 14.75], [1.7286039E12, 14.616666666666667], [1.72860384E12, 14.766666666666667], [1.72860402E12, 6.933333333333334], [1.72860354E12, 14.366666666666667], [1.72860396E12, 14.75], [1.72860348E12, 8.833333333333334], [1.72860366E12, 15.066666666666666], [1.7286036E12, 14.583333333333334], [1.72860378E12, 14.666666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72860402E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 7.0, "minX": 1.72860348E12, "maxY": 15.066666666666666, "series": [{"data": [[1.72860372E12, 14.75], [1.7286039E12, 14.633333333333333], [1.72860384E12, 14.75], [1.72860402E12, 7.0], [1.72860354E12, 14.383333333333333], [1.72860396E12, 14.733333333333333], [1.72860348E12, 8.783333333333333], [1.72860366E12, 15.066666666666666], [1.7286036E12, 14.583333333333334], [1.72860378E12, 14.65]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72860402E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 7.0, "minX": 1.72860348E12, "maxY": 15.066666666666666, "series": [{"data": [[1.72860372E12, 14.75], [1.7286039E12, 14.633333333333333], [1.72860384E12, 14.75], [1.72860402E12, 7.0], [1.72860354E12, 14.383333333333333], [1.72860396E12, 14.733333333333333], [1.72860348E12, 8.783333333333333], [1.72860366E12, 15.066666666666666], [1.7286036E12, 14.583333333333334], [1.72860378E12, 14.65]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72860402E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 7.0, "minX": 1.72860348E12, "maxY": 15.066666666666666, "series": [{"data": [[1.72860372E12, 14.75], [1.7286039E12, 14.633333333333333], [1.72860384E12, 14.75], [1.72860402E12, 7.0], [1.72860354E12, 14.383333333333333], [1.72860396E12, 14.733333333333333], [1.72860348E12, 8.783333333333333], [1.72860366E12, 15.066666666666666], [1.7286036E12, 14.583333333333334], [1.72860378E12, 14.65]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72860402E12, "title": "Total Transactions Per Second"}},
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

