<!DOCTYPE html>
<html lang="en">

	<head>
		<title>Music Library</title>
		<meta charset="utf-8" />
		<link href="https://selab.hanyang.ac.kr/courses/cse326/2019/labs/images/5/music.jpg" type="image/jpeg" rel="shortcut icon" />
		<link href="https://selab.hanyang.ac.kr/courses/cse326/2019/labs/labResources/music.css" type="text/css" rel="stylesheet" />
	</head>

	<body>
		<h1>My Music Page</h1>

		<!-- Ex 1: Number of Songs (Variables) -->
		<p>
			I love music.
			I have <?php
				$song_count = 5678;
				echo "{$song_count}";
			?> total songs,
			which is over <?php
				$song_hours = 5678/10;
				$song_hours = (int)$song_hours;
				echo "{$song_hours}";
			?> hours of music!
		</p>

		<!-- Ex 2: Top Music News (Loops) -->
		<!-- Ex 3: Query Variable -->
		<div class="section">
			<h2>Billboard News</h2>
		
			<ol>
				<?php
					$s1 = '<li><a href="https://www.billboard.com/archive/article/2019';
					$s2 = '">2019-';
					$s3 = '</a></li>';
					
					$news_pages = $_GET["news_pages"];

					for($i=0;$i<$news_pages;$i++){
				?>
				<li><a href="https://www.billboard.com/archive/article/2019
					<?= sprintf('%02d',11 - $i) ?>
					"> 2019-
					<?= sprintf('%02d',11 - $i) ?> </a></li>
				<?php	}	?>
			</ol>
		</div>

		<!-- Ex 4: Favorite Artists (Arrays) -->
		<!-- Ex 5: Favorite Artists from a File (Files) -->
		<div class="section">
			<h2>My Favorite Artists</h2>
		
			<ol>
				<?php
					$i = 1;
					foreach(file("favorite.txt") as $data){
				?>
					<li><a href = "http://en.wikipedia.org/wiki/<? echo "$data"; ?>">
						<? echo "$data<br>"; } ?>
					</a></li>
			</ol>
		</div>
		
		<!-- Ex 6: Music (Multiple Files) -->
		<!-- Ex 7: MP3 Formatting -->
		<div class="section">
			<h2>My Music and Playlists</h2>
			<ul id="musiclist">
			<?php
				$filesizelist = array();	
				foreach(glob("./lab5/musicPHP/songs/*.mp3") as $mp3s){
					$filesizelist[$mp3s] = floor(filesize($mp3s)/1024);
				}
				arsort($filesizelist);
				$songlist = array_keys($filesizelist);
				$sizelist = array_values($filesizelist);
				for($i=0; $i<count($filesizelist); $i++){?>
					<li class="mp3item"><a href="<?echo $songlist[$i]?>"><?
					$onlyname = basename($songlist[$i]);
					echo "$onlyname</a> ({$sizelist[$i]} KB)<br>";
				}
			?>
				<!-- Exercise 8: Playlists (Files) -->
			<!--정상 -->
			<?foreach(glob("./lab5/musicPHP/songs/*.m3u") as $list){?>
				<li class="playlistitem"><?echo basename($list);?>
				<ul>
					<?foreach(file("$list") as $line){
						if(!strpos($line,"EXT")){//#은 안되나??>
							<li/><?echo "$line<br>";}?><?
					}?>
				</ul><?
			}?>
			<!--역순-->
			역순
			<?$playlist=array();
			foreach(glob("./lab5/musicPHP/songs/*.m3u") as $list){?>
				<li class="playlistitem"><?echo basename($list);?>
				<ul>
					<?foreach(file("$list") as $line){
						if(!strpos($line,"EXT")){//#은 안되나?
							array_push($playlist,$line);
						}
					}
					rsort($playlist);
					foreach($playlist as $a){?>
						<li/><?echo "$a<br>";
					}?>
				</ul>
			<?}?>
			<!--셔플-->
			셔플
			<?$playlist=array();
			foreach(glob("./lab5/musicPHP/songs/*.m3u") as $list){?>
				<li class="playlistitem"><?echo basename($list);?>
				<ul>
					<?foreach(file("$list") as $line){
						if(!strpos($line,"EXT")){//#은 안되나?
							array_push($playlist,$line);
						}
					}
					shuffle($playlist);
					foreach($playlist as $a){?>
						<li/><?echo "$a<br>";
					}?>
				</ul>
			<?}?>		</div>

		<div>
			<a href="https://validator.w3.org/check/referer">
				<img src="https://selab.hanyang.ac.kr/courses/cse326/2019/labs/images/w3c-html.png" alt="Valid HTML5" />
			</a>
			<a href="https://jigsaw.w3.org/css-validator/check/referer">
				<img src="https://selab.hanyang.ac.kr/courses/cse326/2019/labs/images/w3c-css.png" alt="Valid CSS" />
			</a>
		</div>
	</body>
</html>
