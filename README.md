# Hexo-Processor-Linkedin-Data

一个用于将 Linkedin 数据转换为 Hexo 文章的插件。

> 该插件还在开发阶段，目前什么都做不了。

## 介绍

LinkedIn 支持导出数据，其中包含了用户的所有信息，包括个人信息、联系人、公司、职位等等。

这个插件的目的是将这些数据转换为 Hexo 文章，以便于在博客中展示，且不需要手动编写。这一功能是为 [Hexo-Theme-Anatole-Core-Resume](https://github.com/Cytrogen/hexo-theme-Anatole-Core-Resume) 主题而设计的。

## 设计

LinkedIn 导出的数据是一个 `zip` 文件，其中包含了多个 `csv` 文件，每个文件对应一个表格。其中不会被考虑的表格有：

- Ad_Targeting
- Comments
- Company Follows
- Connections
- Endorsement_Received_Info
- Events
- Inferences_about_you
- Invitations
- Learning
- Logins
- Member_Follows
- messages
- Reactions
- Registration
- Rich Media
- Saved_Items
- SearchQueries
- Security Challenges
- Shares
- Votes

适合转换的表格和其格式如下：

| 表格名             | CSV 格式                                                                                                                                            |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| Certifications  | `Name,Url,Authority,Started On,Finished On,License Number`                                                                                        |
| Education       | `School Name,Start Date,End Date,Notes,Degree Name,Activities`                                                                                    |
| Email Addresses | `Email Address,Confirmed,Primary,Updated On`                                                                                                      |
| PhoneNumbers    | `Extension,Number,Type`                                                                                                                           |
| Profile         | `First Name,Last Name,Maiden Name,Address,Birth Date,Headline,Summary,Industry,Zip Code,Geo Location,Twitter Handles,Websites,Instant Messengers` |
| Profile Summary | 因为我自己导出的 `Profile Summary.csv` 为空，所以转换这个表格的优先度会是最低的。                                                                                              |
| Skills          | `Name`                                                                                                                                            |

#### 配置

```yaml
linkedin_data:
  enable: false
  path: linkedin-data/
  certifications: false
  education: false
  email_address: false
  phone_numbers: false
  profile: false
  profile_summary: false
  skills: false
```

这个配置项的设计是为了方便用户选择需要转换的表格，以减少不必要的转换时间。

例如用户不想要网站中展示自己的电话号码，那么可以将 `phone_numbers` 设置为 `false`，反之亦然。 开发期间我也希望可以考虑到用户想要隐藏表格中的某些字段、或者添加一些额外的字段的情况。

由于 LinkedIn 导出的 `zip` 文件的文件名并非固定，我这里便偷了个懒、希望用户可以修改解压后的文件夹名为 `linkedin-data`，以便于插件的识别。
