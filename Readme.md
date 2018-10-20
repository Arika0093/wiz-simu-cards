# wiz-simu-cards
## はじめに
1. ```git clone```するか、[githubから直接DL](https://github.com/Arika0093/wiz_simu_cards/archive/master.zip)します。  
2. 解凍します。  
3. ```initialize.bat```を初回に1回**必ず**実行してください。  
（cards.js自動生成の処理を追加するために必要です）  

## カード編集の方法
1. ```bin/ws_cardeditor.exe```を実行します。
2. 定義データを入力します。
3. Generate Fileを押すと精霊別に定義データを作成します(```cards/```フォルダに生成します)
4. gitでコミットします。
5. コミットする際に自動で```build/cards.js```を生成してくれます。  
(黒い画面が表示された場合、閉じないでください。しばらくすると自動で消えます)

## 注意点
今までと異なり```cards.js```は自動で生成されます。  
手を加えないでください。

## ws_cardeditorについて(コード読む人向け)
このツールは以下の2つの役割を担っています。  
1. 精霊定義エディタ
2. 各精霊データを```build/cards.js```に結合する機能(要はbuild)

普通に起動すると1.の機能のほうが立ち上がります。  
buildを手動でやる場合は```bin/ws_cardeditor.exe --build```と実行してください。 