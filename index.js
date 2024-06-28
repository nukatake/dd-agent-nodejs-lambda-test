// Import required packages
const { datadog } = require('datadog-lambda-js');
const tracer = require('dd-trace').init({
    // ここでオプションを設定できます
    service: 'sun-test-service1',
    env: 'stg',
    version: '1.0.0',
    logInjection: 'true',
});

// Lambdaハンドラ
const myHandler = async (event, context) => {
    // Spanを手動で作成する
    const span = tracer.startSpan('Lambda1.login');

    try {
        // メインのロジックをここに書きます
        console.log("Hello from Lambda!!!!");

        // Trace
        const traceId = span.context().toTraceId();
        const spanId = span.context().toSpanId();
        const samplingPriority = span.context()._sampling.priority;

        span.setTag('trace.id', traceId);
        span.setTag('span.id', spanId);
        span.setTag('sampling.Priority', samplingPriority);
        
        console.log(traceId);
        console.log(spanId);
        console.log(samplingPriority);

        const spanContext = {
          traceId: traceId,
          spanId: spanId,
          samplingPriority: samplingPriority
        };
        span.setTag('spanContext', spanContext);

      // 何かの結果を返す
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Success" }),
        };
    } catch (error) {
        // エラーハンドリング
        span.setTag('error', true);
        span.setTag('error.message', error.message);

        throw error;
    } finally {
        // Spanの終了
        span.finish();
    }
};

// datadog関数でラップ
exports.handler = datadog(myHandler);

