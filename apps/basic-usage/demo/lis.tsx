"use strict";

import React, { Component } from "react";
import { Switch, NavBar, Checkbox, Radio, Input } from "antd-mobile";

import "./common.css";
import "./index.css";

const print = function (e) {};
class DDS_lanhupage_0 extends Component {
  state = {};
  setValue(val) {}
  render() {
    return (
      <div className="page flex-col">
        <div className="block_1 flex-col">
          <div className="box_37 flex-col" />
          <div className="group_2 flex-col">
            <span className="text_1">规则管理</span>
            <div className="box_38 flex-row">
              <div className="group_30 flex-row">
                <span className="text_172">规则状态</span>
                <img
                  className="thumbnail_33"
                  src={
                    "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng670cbcc83f170caad4d4a2fc6f6e7ed2ea8ce821ea4342afdfcf254887b06d14"
                  }
                />
              </div>
              <div className="group_31 flex-row">
                <span className="text_173">调整类型</span>
                <img
                  className="thumbnail_34"
                  src={
                    "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng670cbcc83f170caad4d4a2fc6f6e7ed2ea8ce821ea4342afdfcf254887b06d14"
                  }
                />
              </div>
              <div className="group_32 flex-row">
                <span className="text_174">层级</span>
                <img
                  className="thumbnail_35"
                  src={
                    "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng670cbcc83f170caad4d4a2fc6f6e7ed2ea8ce821ea4342afdfcf254887b06d14"
                  }
                />
              </div>
              <div className="text-wrapper_99 flex-col">
                <span className="text_175">请输入规则名称</span>
              </div>
              <div className="group_33 flex-col">
                <div className="text-wrapper_100 flex-col">
                  <span className="text_176">查&nbsp;询</span>
                </div>
              </div>
              <div className="text-wrapper_101 flex-col">
                <span className="text_177">重&nbsp;置</span>
              </div>
              <div className="group_34 flex-col">
                <div className="text-wrapper_102 flex-col">
                  <span className="text_178">创建规则</span>
                </div>
              </div>
            </div>
            <div className="box_39 flex-row justify-between">
              <div className="section_12 flex-row justify-end">
                <span className="text_179">规则名称</span>
                <img
                  className="image_29"
                  src={
                    "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng9a57955c5c362511c24bea3db32f084e43051b129df6adb8436f655232fb912a"
                  }
                />
              </div>
              <div className="section_13 flex-row justify-end">
                <span className="text_180">状态</span>
                <img
                  className="image_30"
                  src={
                    "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng9a57955c5c362511c24bea3db32f084e43051b129df6adb8436f655232fb912a"
                  }
                />
              </div>
              <div className="section_14 flex-row justify-end">
                <span className="text_181">调整类型</span>
                <img
                  className="image_31"
                  src={
                    "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng9a57955c5c362511c24bea3db32f084e43051b129df6adb8436f655232fb912a"
                  }
                />
              </div>
              <div className="section_15 flex-row justify-end">
                <span className="text_182">层级</span>
                <img
                  className="image_32"
                  src={
                    "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng9a57955c5c362511c24bea3db32f084e43051b129df6adb8436f655232fb912a"
                  }
                />
              </div>
              <div className="section_16 flex-row justify-end">
                <span className="text_183">创建时间</span>
                <img
                  className="image_33"
                  src={
                    "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng9a57955c5c362511c24bea3db32f084e43051b129df6adb8436f655232fb912a"
                  }
                />
              </div>
              <div className="section_17 flex-row justify-end">
                <span className="text_184">操作</span>
                <img
                  className="image_34"
                  src={
                    "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng9a57955c5c362511c24bea3db32f084e43051b129df6adb8436f655232fb912a"
                  }
                />
              </div>
            </div>
            <div className="list-items_1 flex-row">
              <div className="text-wrapper_103 flex-col">
                <span className="text_185">规则名称很长很潮很长&nbsp;很长&nbsp;可能超过一行倍至Bixdo老-PL…</span>
              </div>
              <div className="text-wrapper_104 flex-col">
                <span className="text_186">广告活动名称很长很长很…</span>
              </div>
              <div className="text-wrapper_105 flex-col">
                <span className="text_187">2021-09-12&nbsp;&nbsp;11:12:12</span>
              </div>
              <div className="text-wrapper_106 flex-col">
                <span className="text_188">查看日志</span>
              </div>
              <div className="text-wrapper_107 flex-row">
                <span className="text_189">修改</span>
                <span className="text_122">删除</span>
              </div>
              <div className="group_35 flex-col">
                <div className="text-wrapper_108 flex-col">
                  <span className="text_190">预算</span>
                </div>
              </div>
            </div>
            <div className="group_15 flex-row">
              <div className="text-wrapper_109 flex-col">
                <span className="text_191">倍至Bixdo老-PL</span>
              </div>
              <div className="text-wrapper_110 flex-col">
                <span className="text_192">竞价</span>
              </div>
              <div className="text-wrapper_111 flex-col">
                <span className="text_193">广告活动名称很长很长很…</span>
              </div>
              <div className="text-wrapper_112 flex-col">
                <span className="text_194">2021-09-12&nbsp;&nbsp;11:12:12</span>
              </div>
              <div className="text-wrapper_113 flex-col">
                <span className="text_195">查看日志</span>
              </div>
              <div className="text-wrapper_114 flex-row">
                <span className="text_196">修改</span>
                <span className="text_130">删除</span>
              </div>
              <img
                className="image_35"
                src={
                  "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng3ca279589e0aaed1f421f54a749f46a244aeee134aa87388bad539277a8b3074"
                }
              />
            </div>
            <div className="group_16 flex-row">
              <div className="text-wrapper_115 flex-col">
                <span className="text_197">规则名称很长很潮很长&nbsp;很长&nbsp;可能超过一行倍至Bixdo老-PL…</span>
              </div>
              <div className="text-wrapper_116 flex-col">
                <span className="text_198">广告活动名称很长很长很…</span>
              </div>
              <div className="text-wrapper_117 flex-col">
                <span className="text_199">2021-09-12&nbsp;&nbsp;11:12:12</span>
              </div>
              <div className="text-wrapper_118 flex-col">
                <span className="text_200">查看日志</span>
              </div>
              <div className="text-wrapper_119 flex-row">
                <span className="text_201">修改</span>
                <span className="text_136">删除</span>
              </div>
              <div className="group_36 flex-col">
                <div className="text-wrapper_120 flex-col">
                  <span className="text_202">预算</span>
                </div>
              </div>
            </div>
            <div className="group_17 flex-row">
              <div className="text-wrapper_121 flex-col">
                <span className="text_203">倍至Bixdo老-PL</span>
              </div>
              <div className="text-wrapper_122 flex-col">
                <span className="text_204">竞价</span>
              </div>
              <div className="text-wrapper_123 flex-col">
                <span className="text_205">广告活动名称很长很长很…</span>
              </div>
              <div className="text-wrapper_124 flex-col">
                <span className="text_206">2021-09-12&nbsp;&nbsp;11:12:12</span>
              </div>
              <div className="text-wrapper_125 flex-col">
                <span className="text_207">查看日志</span>
              </div>
              <div className="text-wrapper_126 flex-row">
                <span className="text_208">修改</span>
                <span className="text_144">删除</span>
              </div>
              <img
                className="image_36"
                src={
                  "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng3ca279589e0aaed1f421f54a749f46a244aeee134aa87388bad539277a8b3074"
                }
              />
            </div>
            <div className="group_18 flex-row">
              <div className="text-wrapper_127 flex-col">
                <span className="text_209">规则名称很长很潮很长&nbsp;很长&nbsp;可能超过一行倍至Bixdo老-PL…</span>
              </div>
              <div className="text-wrapper_128 flex-col">
                <span className="text_210">广告活动名称很长很长很…</span>
              </div>
              <div className="text-wrapper_129 flex-col">
                <span className="text_211">2021-09-12&nbsp;&nbsp;11:12:12</span>
              </div>
              <div className="text-wrapper_130 flex-col">
                <span className="text_212">查看日志</span>
              </div>
              <div className="text-wrapper_131 flex-row">
                <span className="text_213">修改</span>
                <span className="text_150">删除</span>
              </div>
              <div className="group_37 flex-col">
                <div className="text-wrapper_132 flex-col">
                  <span className="text_214">预算</span>
                </div>
              </div>
            </div>
            <div className="group_19 flex-row">
              <div className="text-wrapper_133 flex-col">
                <span className="text_215">倍至Bixdo老-PL</span>
              </div>
              <div className="text-wrapper_134 flex-col">
                <span className="text_216">竞价</span>
              </div>
              <div className="text-wrapper_135 flex-col">
                <span className="text_217">广告活动名称很长很长很…</span>
              </div>
              <div className="text-wrapper_136 flex-col">
                <span className="text_218">2021-09-12&nbsp;&nbsp;11:12:12</span>
              </div>
              <div className="text-wrapper_137 flex-col">
                <span className="text_219">查看日志</span>
              </div>
              <div className="text-wrapper_138 flex-row">
                <span className="text_220">修改</span>
                <span className="text_221">删除</span>
              </div>
              <img
                className="image_37"
                src={
                  "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng07157bd34e2c8ec3e9b10ba378c05b245cbef1b578ff106db099dc7d7b8f68b3"
                }
              />
            </div>
            <div className="box_40 flex-row">
              <div className="box_41 flex-row">
                <div className="image-text_14 flex-row justify-between">
                  <img
                    className="thumbnail_36"
                    src={
                      "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng148ca5bc9c94cf08685bba7c68ebaf5a88d9b5b473ab2b9fde7d792963e115f4"
                    }
                  />
                  <span className="text-group_14">创建成功</span>
                </div>
              </div>
              <div className="image-text_15 flex-row justify-between">
                <span className="text-group_15">共50条</span>
                <img
                  className="label_7"
                  src={
                    "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngd504faf12dab8ccf00526f04d0cab34f65acb4231d04d223c944f796949e2ce6"
                  }
                />
              </div>
              <div className="text-wrapper_139 flex-col">
                <span className="text_222">1</span>
              </div>
              <div className="text-wrapper_140 flex-col">
                <span className="text_223">2</span>
              </div>
              <div className="text-wrapper_141 flex-col">
                <span className="text_224">3</span>
              </div>
              <div className="text-wrapper_142 flex-col">
                <span className="text_225">···</span>
              </div>
              <div className="text-wrapper_143 flex-col">
                <span className="text_226">5</span>
              </div>
              <img
                className="label_8"
                src={
                  "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnge18e5093c7b5faf316dac193d1a17b13e339e421fbb594526f0ded501a6d554d"
                }
              />
              <div className="box_42 flex-row">
                <div className="image-text_16 flex-row justify-between">
                  <span className="text-group_16">10条/页</span>
                  <img
                    className="thumbnail_37"
                    src={
                      "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng451367a2ae048c3d3186ac405df69c32c024d9335025cb3f8c0188e0e40c9bac"
                    }
                  />
                </div>
              </div>
            </div>
            <div className="box_43 flex-col">
              <div className="text-wrapper_144 flex-col">
                <span className="text_227">创建规则</span>
              </div>
            </div>
            <div className="box_44 flex-row justify-between">
              <div className="box_45 flex-col justify-end">
                <div className="block_4 flex-row justify-between">
                  <div className="image-text_17 flex-row justify-between">
                    <img
                      className="label_9"
                      src={
                        "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng7a6a6d07fa7519dbfa2a12c52cbe74b1c8547a8a6c878d509d85274dc687c65e"
                      }
                    />
                    <span className="text-group_17">确认删除该规则吗？</span>
                  </div>
                  <img
                    className="thumbnail_38"
                    src={
                      "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngbc10718cea39a7c6cfa60fbb7815c79cdcaa867eed341447210772c18955ff2b"
                    }
                  />
                </div>
                <span className="text_228">删除后信息将无法保存。</span>
                <div className="block_5 flex-row">
                  <div className="text-wrapper_145 flex-col">
                    <span className="text_229">取&nbsp;消</span>
                  </div>
                  <div className="box_46 flex-col">
                    <div className="text-wrapper_146 flex-col">
                      <span className="text_230">确&nbsp;定</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-wrapper_147 flex-col">
                <span className="text_231">当前规则数量达到上限，请删除不需要的规则！</span>
              </div>
            </div>
            <div className="text-wrapper_148 flex-col">
              <span className="text_167">运行中的规则不能删除</span>
            </div>
          </div>
          <div className="box_47 flex-col">
            <div className="block_6 flex-col">
              <img
                className="thumbnail_39"
                src={
                  "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng7974025af5e1f187957f5770bffe974f0971dc10fc99d0eeefbbe8d1dabd5617"
                }
              />
              <span className="text_232">店铺</span>
              <img
                className="thumbnail_40"
                src={
                  "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngedec68d2f01e8fb91f1fadb256a0bb9125864b926d13d82ae314393925909e74"
                }
              />
              <span className="text_233">商品</span>
              <img
                className="thumbnail_41"
                src={
                  "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngccf599fe06716ec13d7ec6968004dde352aae4fdc123dc501a39a776cdc675e5"
                }
              />
              <span className="text_234">财务</span>
              <img
                className="thumbnail_42"
                src={
                  "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng44387b2891f0be9857f0199db5f65ac6d51c8a93047e7b1d644f1a5f4f1fc1a1"
                }
              />
              <span className="text_235">工具</span>
              <div className="image-text_18 flex-col justify-between">
                <img
                  className="thumbnail_43"
                  src={
                    "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng005d7bb40fc0e156db73b8a0761004619c388274a4a292e49dfca5eb852c3915"
                  }
                />
                <span className="text-group_18">设置</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DDS_lanhupage_0;
