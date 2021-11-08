module.exports = `
<!doctype html>
<html lang="en">

<head>
    <title>Code coverage report for All files</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="prettify.css" />
    <link rel="stylesheet" href="base.css" />
    <link rel="shortcut icon" type="image/x-icon" href="favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type='text/css'>
        .coverage-summary .sorter {
            background-image: url(sort-arrow-sprite.png);
        }
    </style>
</head>
    
<body>
<div class='wrapper'>
    <div class='pad1'>
        <h1>All files</h1>
        <div class='clearfix'>
            
            <div class='fl pad1y space-right2'>
                <span class="strong">82.86% </span>
                <span class="quiet">Statements</span>
                <span class='fraction'>783/945</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">55.81% </span>
                <span class="quiet">Branches</span>
                <span class='fraction'>120/215</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">74.62% </span>
                <span class="quiet">Functions</span>
                <span class='fraction'>194/260</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">82.93% </span>
                <span class="quiet">Lines</span>
                <span class='fraction'>758/914</span>
            </div>
        
            
        </div>
        <p class="quiet">
            Press <em>n</em> or <em>j</em> to go to the next uncovered block, <em>b</em>, <em>p</em> or <em>k</em> for the previous block.
        </p>
    </div>
    <div class='status-line high'></div>
    <div class="pad1">
<table class="coverage-summary">
<thead>
<tr>
   <th data-col="file" data-fmt="html" data-html="true" class="file">File</th>
   <th data-col="pic" data-type="number" data-fmt="html" data-html="true" class="pic"></th>
   <th data-col="statements" data-type="number" data-fmt="pct" class="pct">Statements</th>
   <th data-col="statements_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="branches" data-type="number" data-fmt="pct" class="pct">Branches</th>
   <th data-col="branches_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="functions" data-type="number" data-fmt="pct" class="pct">Functions</th>
   <th data-col="functions_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="lines" data-type="number" data-fmt="pct" class="pct">Lines</th>
   <th data-col="lines_raw" data-type="number" data-fmt="html" class="abs"></th>
</tr>
</thead>
<tbody><tr>
	<td class="file high" data-value="cypress/plugins"><a href="cypress/plugins/index.html">cypress/plugins</a></td>
	<td data-value="100" class="pic high">
	<div class="chart"><div class="cover-fill cover-full" style="width: 100%"></div><div class="cover-empty" style="width: 0%"></div></div>
	</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="3" class="abs high">3/3</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="0" class="abs high">0/0</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="1" class="abs high">1/1</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="3" class="abs high">3/3</td>
	</tr>

<tr>
	<td class="file low" data-value="src"><a href="src/index.html">src</a></td>
	<td data-value="37.5" class="pic low">
	<div class="chart"><div class="cover-fill" style="width: 37%"></div><div class="cover-empty" style="width: 63%"></div></div>
	</td>
	<td data-value="37.5" class="pct low">37.5%</td>
	<td data-value="56" class="abs low">21/56</td>
	<td data-value="31.82" class="pct low">31.82%</td>
	<td data-value="44" class="abs low">14/44</td>
	<td data-value="33.33" class="pct low">33.33%</td>
	<td data-value="21" class="abs low">7/21</td>
	<td data-value="31.37" class="pct low">31.37%</td>
	<td data-value="51" class="abs low">16/51</td>
	</tr>

<tr>
	<td class="file high" data-value="src/app"><a href="src/app/index.html">src/app</a></td>
	<td data-value="81.82" class="pic high">
	<div class="chart"><div class="cover-fill" style="width: 81%"></div><div class="cover-empty" style="width: 19%"></div></div>
	</td>
	<td data-value="81.82" class="pct high">81.82%</td>
	<td data-value="11" class="abs high">9/11</td>
	<td data-value="50" class="pct medium">50%</td>
	<td data-value="4" class="abs medium">2/4</td>
	<td data-value="50" class="pct medium">50%</td>
	<td data-value="2" class="abs medium">1/2</td>
	<td data-value="81.82" class="pct high">81.82%</td>
	<td data-value="11" class="abs high">9/11</td>
	</tr>

<tr>
	<td class="file medium" data-value="src/app/account"><a href="src/app/account/index.html">src/app/account</a></td>
	<td data-value="75.61" class="pic medium">
	<div class="chart"><div class="cover-fill" style="width: 75%"></div><div class="cover-empty" style="width: 25%"></div></div>
	</td>
	<td data-value="75.61" class="pct medium">75.61%</td>
	<td data-value="41" class="abs medium">31/41</td>
	<td data-value="50" class="pct medium">50%</td>
	<td data-value="6" class="abs medium">3/6</td>
	<td data-value="66.67" class="pct medium">66.67%</td>
	<td data-value="18" class="abs medium">12/18</td>
	<td data-value="74.36" class="pct medium">74.36%</td>
	<td data-value="39" class="abs medium">29/39</td>
	</tr>

<tr>
	<td class="file medium" data-value="src/app/class"><a href="src/app/class/index.html">src/app/class</a></td>
	<td data-value="73.68" class="pic medium">
	<div class="chart"><div class="cover-fill" style="width: 73%"></div><div class="cover-empty" style="width: 27%"></div></div>
	</td>
	<td data-value="73.68" class="pct medium">73.68%</td>
	<td data-value="19" class="abs medium">14/19</td>
	<td data-value="60" class="pct medium">60%</td>
	<td data-value="5" class="abs medium">3/5</td>
	<td data-value="62.5" class="pct medium">62.5%</td>
	<td data-value="8" class="abs medium">5/8</td>
	<td data-value="70.59" class="pct medium">70.59%</td>
	<td data-value="17" class="abs medium">12/17</td>
	</tr>

<tr>
	<td class="file high" data-value="src/app/module"><a href="src/app/module/index.html">src/app/module</a></td>
	<td data-value="85" class="pic high">
	<div class="chart"><div class="cover-fill" style="width: 85%"></div><div class="cover-empty" style="width: 15%"></div></div>
	</td>
	<td data-value="85" class="pct high">85%</td>
	<td data-value="40" class="abs high">34/40</td>
	<td data-value="80" class="pct high">80%</td>
	<td data-value="10" class="abs high">8/10</td>
	<td data-value="75" class="pct medium">75%</td>
	<td data-value="16" class="abs medium">12/16</td>
	<td data-value="83.78" class="pct high">83.78%</td>
	<td data-value="37" class="abs high">31/37</td>
	</tr>

<tr>
	<td class="file high" data-value="src/components/Authentication"><a href="src/components/Authentication/index.html">src/components/Authentication</a></td>
	<td data-value="80.95" class="pic high">
	<div class="chart"><div class="cover-fill" style="width: 80%"></div><div class="cover-empty" style="width: 20%"></div></div>
	</td>
	<td data-value="80.95" class="pct high">80.95%</td>
	<td data-value="21" class="abs high">17/21</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="4" class="abs high">4/4</td>
	<td data-value="42.86" class="pct low">42.86%</td>
	<td data-value="7" class="abs low">3/7</td>
	<td data-value="80.95" class="pct high">80.95%</td>
	<td data-value="21" class="abs high">17/21</td>
	</tr>

<tr>
	<td class="file high" data-value="src/components/Homepage"><a href="src/components/Homepage/index.html">src/components/Homepage</a></td>
	<td data-value="96.3" class="pic high">
	<div class="chart"><div class="cover-fill" style="width: 96%"></div><div class="cover-empty" style="width: 4%"></div></div>
	</td>
	<td data-value="96.3" class="pct high">96.3%</td>
	<td data-value="27" class="abs high">26/27</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="2" class="abs low">0/2</td>
	<td data-value="66.67" class="pct medium">66.67%</td>
	<td data-value="3" class="abs medium">2/3</td>
	<td data-value="96.3" class="pct high">96.3%</td>
	<td data-value="27" class="abs high">26/27</td>
	</tr>

<tr>
	<td class="file medium" data-value="src/components/Student"><a href="src/components/Student/index.html">src/components/Student</a></td>
	<td data-value="66.67" class="pic medium">
	<div class="chart"><div class="cover-fill" style="width: 66%"></div><div class="cover-empty" style="width: 34%"></div></div>
	</td>
	<td data-value="66.67" class="pct medium">66.67%</td>
	<td data-value="6" class="abs medium">4/6</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="2" class="abs low">0/2</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="1" class="abs low">0/1</td>
	<td data-value="66.67" class="pct medium">66.67%</td>
	<td data-value="6" class="abs medium">4/6</td>
	</tr>

<tr>
	<td class="file medium" data-value="src/components/Teacher"><a href="src/components/Teacher/index.html">src/components/Teacher</a></td>
	<td data-value="72.58" class="pic medium">
	<div class="chart"><div class="cover-fill" style="width: 72%"></div><div class="cover-empty" style="width: 28%"></div></div>
	</td>
	<td data-value="72.58" class="pct medium">72.58%</td>
	<td data-value="62" class="abs medium">45/62</td>
	<td data-value="50" class="pct medium">50%</td>
	<td data-value="8" class="abs medium">4/8</td>
	<td data-value="57.89" class="pct medium">57.89%</td>
	<td data-value="19" class="abs medium">11/19</td>
	<td data-value="73.77" class="pct medium">73.77%</td>
	<td data-value="61" class="abs medium">45/61</td>
	</tr>

<tr>
	<td class="file medium" data-value="src/components/Teacher/Popups"><a href="src/components/Teacher/Popups/index.html">src/components/Teacher/Popups</a></td>
	<td data-value="69.57" class="pic medium">
	<div class="chart"><div class="cover-fill" style="width: 69%"></div><div class="cover-empty" style="width: 31%"></div></div>
	</td>
	<td data-value="69.57" class="pct medium">69.57%</td>
	<td data-value="23" class="abs medium">16/23</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="2" class="abs low">0/2</td>
	<td data-value="71.43" class="pct medium">71.43%</td>
	<td data-value="7" class="abs medium">5/7</td>
	<td data-value="72.73" class="pct medium">72.73%</td>
	<td data-value="22" class="abs medium">16/22</td>
	</tr>

<tr>
	<td class="file high" data-value="src/components/Template"><a href="src/components/Template/index.html">src/components/Template</a></td>
	<td data-value="89.35" class="pic high">
	<div class="chart"><div class="cover-fill" style="width: 89%"></div><div class="cover-empty" style="width: 11%"></div></div>
	</td>
	<td data-value="89.35" class="pct high">89.35%</td>
	<td data-value="169" class="abs high">151/169</td>
	<td data-value="50" class="pct medium">50%</td>
	<td data-value="34" class="abs medium">17/34</td>
	<td data-value="85.71" class="pct high">85.71%</td>
	<td data-value="42" class="abs high">36/42</td>
	<td data-value="89.16" class="pct high">89.16%</td>
	<td data-value="166" class="abs high">148/166</td>
	</tr>

<tr>
	<td class="file high" data-value="src/data"><a href="src/data/index.html">src/data</a></td>
	<td data-value="81.25" class="pic high">
	<div class="chart"><div class="cover-fill" style="width: 81%"></div><div class="cover-empty" style="width: 19%"></div></div>
	</td>
	<td data-value="81.25" class="pct high">81.25%</td>
	<td data-value="16" class="abs high">13/16</td>
	<td data-value="50" class="pct medium">50%</td>
	<td data-value="6" class="abs medium">3/6</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="2" class="abs low">0/2</td>
	<td data-value="86.67" class="pct high">86.67%</td>
	<td data-value="15" class="abs high">13/15</td>
	</tr>

<tr>
	<td class="file high" data-value="src/layouts"><a href="src/layouts/index.html">src/layouts</a></td>
	<td data-value="100" class="pic high">
	<div class="chart"><div class="cover-fill cover-full" style="width: 100%"></div><div class="cover-empty" style="width: 0%"></div></div>
	</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="4" class="abs high">4/4</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="2" class="abs high">2/2</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="1" class="abs high">1/1</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="4" class="abs high">4/4</td>
	</tr>

<tr>
	<td class="file high" data-value="src/pages"><a href="src/pages/index.html">src/pages</a></td>
	<td data-value="100" class="pic high">
	<div class="chart"><div class="cover-fill cover-full" style="width: 100%"></div><div class="cover-empty" style="width: 0%"></div></div>
	</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="2" class="abs high">2/2</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="0" class="abs high">0/0</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="1" class="abs high">1/1</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="2" class="abs high">2/2</td>
	</tr>

<tr>
	<td class="file high" data-value="src/pages/LogIn"><a href="src/pages/LogIn/index.html">src/pages/LogIn</a></td>
	<td data-value="82.02" class="pic high">
	<div class="chart"><div class="cover-fill" style="width: 82%"></div><div class="cover-empty" style="width: 18%"></div></div>
	</td>
	<td data-value="82.02" class="pct high">82.02%</td>
	<td data-value="89" class="abs high">73/89</td>
	<td data-value="50" class="pct medium">50%</td>
	<td data-value="22" class="abs medium">11/22</td>
	<td data-value="80" class="pct high">80%</td>
	<td data-value="15" class="abs high">12/15</td>
	<td data-value="82.02" class="pct high">82.02%</td>
	<td data-value="89" class="abs high">73/89</td>
	</tr>

<tr>
	<td class="file high" data-value="src/pages/Student"><a href="src/pages/Student/index.html">src/pages/Student</a></td>
	<td data-value="81.94" class="pic high">
	<div class="chart"><div class="cover-fill" style="width: 81%"></div><div class="cover-empty" style="width: 19%"></div></div>
	</td>
	<td data-value="81.94" class="pct high">81.94%</td>
	<td data-value="72" class="abs high">59/72</td>
	<td data-value="81.25" class="pct high">81.25%</td>
	<td data-value="16" class="abs high">13/16</td>
	<td data-value="72.22" class="pct medium">72.22%</td>
	<td data-value="18" class="abs medium">13/18</td>
	<td data-value="83.1" class="pct high">83.1%</td>
	<td data-value="71" class="abs high">59/71</td>
	</tr>

<tr>
	<td class="file high" data-value="src/pages/Teacher"><a href="src/pages/Teacher/index.html">src/pages/Teacher</a></td>
	<td data-value="89.25" class="pic high">
	<div class="chart"><div class="cover-fill" style="width: 89%"></div><div class="cover-empty" style="width: 11%"></div></div>
	</td>
	<td data-value="89.25" class="pct high">89.25%</td>
	<td data-value="93" class="abs high">83/93</td>
	<td data-value="83.33" class="pct high">83.33%</td>
	<td data-value="24" class="abs high">20/24</td>
	<td data-value="90.91" class="pct high">90.91%</td>
	<td data-value="22" class="abs high">20/22</td>
	<td data-value="89.25" class="pct high">89.25%</td>
	<td data-value="93" class="abs high">83/93</td>
	</tr>

<tr>
	<td class="file high" data-value="src/pages/Teacher/Module"><a href="src/pages/Teacher/Module/index.html">src/pages/Teacher/Module</a></td>
	<td data-value="92.16" class="pic high">
	<div class="chart"><div class="cover-fill" style="width: 92%"></div><div class="cover-empty" style="width: 8%"></div></div>
	</td>
	<td data-value="92.16" class="pct high">92.16%</td>
	<td data-value="102" class="abs high">94/102</td>
	<td data-value="60" class="pct medium">60%</td>
	<td data-value="10" class="abs medium">6/10</td>
	<td data-value="93.55" class="pct high">93.55%</td>
	<td data-value="31" class="abs high">29/31</td>
	<td data-value="92" class="pct high">92%</td>
	<td data-value="100" class="abs high">92/100</td>
	</tr>

<tr>
	<td class="file high" data-value="src/pages/Teacher/Module/Steps"><a href="src/pages/Teacher/Module/Steps/index.html">src/pages/Teacher/Module/Steps</a></td>
	<td data-value="94.64" class="pic high">
	<div class="chart"><div class="cover-fill" style="width: 94%"></div><div class="cover-empty" style="width: 6%"></div></div>
	</td>
	<td data-value="94.64" class="pct high">94.64%</td>
	<td data-value="56" class="abs high">53/56</td>
	<td data-value="75" class="pct medium">75%</td>
	<td data-value="12" class="abs medium">9/12</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="9" class="abs high">9/9</td>
	<td data-value="94.64" class="pct high">94.64%</td>
	<td data-value="56" class="abs high">53/56</td>
	</tr>

<tr>
	<td class="file high" data-value="src/routes"><a href="src/routes/index.html">src/routes</a></td>
	<td data-value="93.94" class="pic high">
	<div class="chart"><div class="cover-fill" style="width: 93%"></div><div class="cover-empty" style="width: 7%"></div></div>
	</td>
	<td data-value="93.94" class="pct high">93.94%</td>
	<td data-value="33" class="abs high">31/33</td>
	<td data-value="50" class="pct medium">50%</td>
	<td data-value="2" class="abs medium">1/2</td>
	<td data-value="87.5" class="pct high">87.5%</td>
	<td data-value="16" class="abs high">14/16</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="23" class="abs high">23/23</td>
	</tr>

</tbody>
</table>
</div>
                <div class='push'></div><!-- for sticky footer -->
            </div><!-- /wrapper -->
            <div class='footer quiet pad2 space-top1 center small'>
                Code coverage generated by
                <a href="https://istanbul.js.org/" target="_blank">istanbul</a>
                at Mon Nov 08 2021 00:25:50 GMT-0500 (Eastern Standard Time)
            </div>
        </div>
        <script src="prettify.js"></script>
        <script>
            window.onload = function () {
                prettyPrint();
            };
        </script>
        <script src="sorter.js"></script>
        <script src="block-navigation.js"></script>
    </body>
</html>`
    