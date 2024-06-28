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
