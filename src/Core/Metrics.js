const Prometheus = require('prom-client');

class Metrics {
    constructor() {
        this.Prometheus = Prometheus;

        this.httpRequestDurationMS = new Prometheus.Histogram({
            name: 'http_request_duration_ms',
            help: 'Duration of HTTP requests in MS',
            labelNames: ['endpoint', 'successful'],
            buckets: [300, 400, 500, 750, 1000, 1500, 2000, 2500, 3000, 5000]
        });

        this.imageGenDurationMS = new Prometheus.Histogram({
            name: 'image_gen_duration_ms',
            help: 'Duration of image generation in MS',
            labelNames: ['id'],
            buckets: [300, 400, 500, 750, 1000, 1500, 2000, 2500, 3000, 5000]
        });

        this.usageCounter = new Prometheus.Counter({
            name: 'api_usage_counter',
            help: 'Tracks the API usage',
            labelNames: ['endpoint', 'userid']
        });

        this.collectDefaultMetrics = Prometheus.collectDefaultMetrics;

        this.collectDefaultMetrics();
    }
}


module.exports = Metrics;