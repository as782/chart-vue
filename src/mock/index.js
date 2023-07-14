// 引入模拟数据的插件
import Mock from "mockjs"

// 分页查询数据

import pageChart from "@/mock/pagechart.json"

//第一个参数是请求地址，第二个请求数据
// Mock.mock("/chart/page", { code: 200, data: pageChart })
Mock.mock("/chart/page", {
    "code": 200,
    "msg": "操作成功",
    "data": {
        "records": [
            {
                "id": "1677999487966007297",
                "goal": "帮我分析网站用户增长数据",
                "name": "基金图表",
                "chartData": "日期,用户数\n1号,10\n2号,20\n3号,30\n4号,90\n5号,0\n6号,10\n7号,20\n",
                "chartType": "饼图",
                "genChart": "{\n  \"title\": {\n    \"text\": \"网站用户增长数据\",\n    \"subtext\": \"近七天用户数统计\"\n  },\n  \"tooltip\": {\n    \"trigger\": \"item\",\n    \"formatter\": \"{a} <br/>{b}: {c} ({d}%)\"\n  },\n  \"legend\": {\n    \"orient\": \"vertical\",\n    \"left\": \"left\",\n    \"data\": [\"1号\", \"2号\", \"3号\", \"4号\", \"5号\", \"6号\", \"7号\"]\n  },\n  \"series\": [\n    {\n      \"name\": \"用户数\",\n      \"type\": \"pie\",\n      \"radius\": [\"50%\", \"70%\"],\n      \"avoidLabelOverlap\": false,\n      \"label\": {\n        \"show\": false,\n        \"position\": \"center\"\n      },\n      \"emphasis\": {\n        \"label\": {\n          \"show\": true,\n          \"fontSize\": \"20\",\n          \"fontWeight\": \"bold\"\n        }\n      },\n      \"labelLine\": {\n        \"show\": false\n      },\n      \"data\": [\n        {\"value\": 10, \"name\": \"1号\"},\n        {\"value\": 20, \"name\": \"2号\"},\n        {\"value\": 30, \"name\": \"3号\"},\n        {\"value\": 90, \"name\": \"4号\"},\n        {\"value\": 0, \"name\": \"5号\"},\n        {\"value\": 10, \"name\": \"6号\"},\n        {\"value\": 20, \"name\": \"7号\"}\n      ]\n    }\n  ]\n}",
                "genResult": "根据给定的网站用户增长数据，我们可以得出以下结论：\n1. 7号用户数最多，为90，占总用户数的28.57%\n2. 5号用户数最少，为0，占总用户数的0%\n3. 用户数的变化呈不规则趋势，可能需要进一步分析原因来优化用户体验和提升用户增长",
                "status": "success",
                "execMessage": null,
                "userId": "16779800480241278722",
                "createTime": "2023-07-09T11:13:48.000+00:00",
                "updateTime": "2023-07-09T11:13:48.000+00:00",
                "isDelete": 0
            },
         
            {
                "id": "16779919487966007297",
                "goal": "帮我分析网站用户增长数据",
                "name": "超市增长图表",
                "chartData": "日期,用户数\n1号,10\n2号,20\n3号,30\n4号,90\n5号,0\n6号,10\n7号,20\n",
                "chartType": "饼图",
                "genChart": "{\n  \"title\": {\n    \"text\": \"网站用户增长数据\",\n    \"subtext\": \"近七天用户数统计\"\n  },\n  \"tooltip\": {\n    \"trigger\": \"item\",\n    \"formatter\": \"{a} <br/>{b}: {c} ({d}%)\"\n  },\n  \"legend\": {\n    \"orient\": \"vertical\",\n    \"left\": \"left\",\n    \"data\": [\"1号\", \"2号\", \"3号\", \"4号\", \"5号\", \"6号\", \"7号\"]\n  },\n  \"series\": [\n    {\n      \"name\": \"用户数\",\n      \"type\": \"pie\",\n      \"radius\": [\"50%\", \"70%\"],\n      \"avoidLabelOverlap\": false,\n      \"label\": {\n        \"show\": false,\n        \"position\": \"center\"\n      },\n      \"emphasis\": {\n        \"label\": {\n          \"show\": true,\n          \"fontSize\": \"20\",\n          \"fontWeight\": \"bold\"\n        }\n      },\n      \"labelLine\": {\n        \"show\": false\n      },\n      \"data\": [\n        {\"value\": 10, \"name\": \"1号\"},\n        {\"value\": 20, \"name\": \"2号\"},\n        {\"value\": 30, \"name\": \"3号\"},\n        {\"value\": 90, \"name\": \"4号\"},\n        {\"value\": 0, \"name\": \"5号\"},\n        {\"value\": 10, \"name\": \"6号\"},\n        {\"value\": 20, \"name\": \"7号\"}\n      ]\n    }\n  ]\n}",
                "genResult": "根据给定的网站用户增长数据，我们可以得出以下结论：\n1. 7号用户数最多，为90，占总用户数的28.57%\n2. 5号用户数最少，为0，占总用户数的0%\n3. 用户数的变化呈不规则趋势，可能需要进一步分析原因来优化用户体验和提升用户增长",
                "status": "success",
                "execMessage": null,
                "userId": "1677980048021278722",
                "createTime": "2023-07-09T11:13:48.000+00:00",
                "updateTime": "2023-07-09T11:13:48.000+00:00",
                "isDelete": 0
            },
         
            {
                "id": "16779994879466007297",
                "goal": "帮我分析网站用户增长数据",
                "name": "股票图表",
                "chartData": "日期,用户数\n1号,10\n2号,20\n3号,30\n4号,90\n5号,0\n6号,10\n7号,20\n",
                "chartType": "饼图",
                "genChart": "{\n  \"title\": {\n    \"text\": \"网站用户增长数据\",\n    \"subtext\": \"近七天用户数统计\"\n  },\n  \"tooltip\": {\n    \"trigger\": \"item\",\n    \"formatter\": \"{a} <br/>{b}: {c} ({d}%)\"\n  },\n  \"legend\": {\n    \"orient\": \"vertical\",\n    \"left\": \"left\",\n    \"data\": [\"1号\", \"2号\", \"3号\", \"4号\", \"5号\", \"6号\", \"7号\"]\n  },\n  \"series\": [\n    {\n      \"name\": \"用户数\",\n      \"type\": \"pie\",\n      \"radius\": [\"50%\", \"70%\"],\n      \"avoidLabelOverlap\": false,\n      \"label\": {\n        \"show\": false,\n        \"position\": \"center\"\n      },\n      \"emphasis\": {\n        \"label\": {\n          \"show\": true,\n          \"fontSize\": \"20\",\n          \"fontWeight\": \"bold\"\n        }\n      },\n      \"labelLine\": {\n        \"show\": false\n      },\n      \"data\": [\n        {\"value\": 10, \"name\": \"1号\"},\n        {\"value\": 20, \"name\": \"2号\"},\n        {\"value\": 30, \"name\": \"3号\"},\n        {\"value\": 90, \"name\": \"4号\"},\n        {\"value\": 0, \"name\": \"5号\"},\n        {\"value\": 10, \"name\": \"6号\"},\n        {\"value\": 20, \"name\": \"7号\"}\n      ]\n    }\n  ]\n}",
                "genResult": "根据给定的网站用户增长数据，我们可以得出以下结论：\n1. 7号用户数最多，为90，占总用户数的28.57%\n2. 5号用户数最少，为0，占总用户数的0%\n3. 用户数的变化呈不规则趋势，可能需要进一步分析原因来优化用户体验和提升用户增长",
                "status": "success",
                "execMessage": null,
                "userId": "1677980048021278722",
                "createTime": "2023-07-09T11:13:48.000+00:00",
                "updateTime": "2023-07-09T11:13:48.000+00:00",
                "isDelete": 0
            },
         
             
           
        ],
        "total": 3,
        "size": 5,
        "current": 1,
        "orders": [],
        "optimizeCountSql": true,
        "searchCount": true,
        "countId": null,
        "maxLimit": null,
        "pages": 1
    }
})
Mock.mock("/chart/ge1n", {
    "code": 200,
    "msg": "操作成功",
    "data": {
        "genChart": "{\n    \"tooltip\": {\n        \"trigger\": \"axis\"\n    },\n    \"xAxis\": {\n        \"type\": \"category\",\n        \"data\": [\"1号\", \"2号\", \"3号\", \"4号\", \"5号\", \"6号\", \"7号\"]\n    },\n    \"yAxis\": {\n        \"type\": \"value\"\n    },\n    \"series\": [{\n        \"data\": [10, 20, 30, 90, 0, 10, 20],\n        \"type\": \"line\"\n    }]\n}",
        "genResult": "根据分析结果可以得出以下结论：\n1. 网站用户数在1号到4号之间逐渐增长，在5号突然下降，然后在6号和7号略微回升。\n2. 4号的用户数达到了最高点，为90。\n3. 5号的用户数为0，可能是数据采集出现了错误或者网站运营出现了异常。\n4. 网站用户增长表现不稳定，需要进一步分析原因，并采取相应措施。"
    }
})
