import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.rx.rongxingnaozhong',
  name: 'WPS',
  groups: [
    {
  "id": "com.rx.rongxingnaozhong",
  "name": "快云影音",
  "groups": [
    {
      "key": 1,
      "name": "[ChangeMe]规则名称-2023-11-27 19:44:51",
      "desc": "[ChangeMe]本规则由GKD网页端审查工具生成",
      "rules": [
        {
          "activityIds": "com.wc.wcdidi.SplashActivity",
          "matches": "[id$='/tt_splash_skip_btn']",
          "snapshotUrls": "https://i.gkd.li/import/13473622"
        }
      ]
    }
  ]
}
  ],
});
