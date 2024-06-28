# dd-agent-nodejs-lambda-test
LambdaでDatadogへTraceするサンプルプログラム

環境
```
$ node -v
v18.15.0
```

# モジュールインストール
npm install

# zipにしてAWSコンソールから、Lambdaをアップする。関数名は任意。
zip -r function.zip index.js node_modules/

# datadog-ciコマンドをインストール
npm i -g @datadog/datadog-ci

# AWS cli で接続できる環境で以下のコマンド実施
datadog-ci lambda instrument -i

いろいろ聞かれるので回答すると指定した、Lambdaに変更が入る。


# DatadogにTrace情報が送信される。
<img width="1182" alt="スクリーンショット 2024-06-28 14 27 00" src="https://github.com/nukatake/dd-agent-nodejs-lambda-test/assets/102710052/4eaa4e6a-33fe-4a91-8777-8f1328e608ea">

