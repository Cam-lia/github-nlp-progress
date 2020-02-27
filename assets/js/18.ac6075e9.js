(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{226:function(t,e,r){"use strict";r.r(e);var a=r(1),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"grammatical-error-correction"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#grammatical-error-correction"}},[t._v("#")]),t._v(" Grammatical Error Correction")]),t._v(" "),r("p",[t._v("Grammatical Error Correction (GEC) is the task of correcting different kinds of errors in text such as spelling, punctuation, grammatical, and word choice errors.")]),t._v(" "),r("p",[t._v("GEC is typically formulated as a sentence correction task. A GEC system takes a potentially erroneous sentence as input and is expected to transform it to its corrected version. See the example given below:")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Input (Erroneous)")]),t._v(" "),r("th",[t._v("Output (Corrected)")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("She see Tom is catched by policeman in park at last night.")]),t._v(" "),r("td",[t._v("She saw Tom caught by a policeman in the park last night.")])])])]),t._v(" "),r("h3",{attrs:{id:"conll-2014-shared-task"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#conll-2014-shared-task"}},[t._v("#")]),t._v(" CoNLL-2014 Shared Task")]),t._v(" "),r("p",[t._v("The "),r("a",{attrs:{href:"https://www.comp.nus.edu.sg/~nlp/conll14st/conll14st-test-data.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[t._v("CoNLL-2014 shared task test set"),r("OutboundLink")],1),t._v(" is the most widely used dataset to benchmark GEC systems. The test set contains 1,312 English sentences with error annotations by 2 expert annotators. Models are evaluated with MaxMatch scorer ("),r("a",{attrs:{href:"http://www.aclweb.org/anthology/N12-1067",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dahlmeier and Ng, 2012"),r("OutboundLink")],1),t._v(") which computes a span-based F"),r("sub",[t._v("β")]),t._v("-score (β set to 0.5 to weight precision twice as recall).")]),t._v(" "),r("p",[t._v("The shared task setting restricts that systems use only publicly available datasets for training to ensure a fair comparison between systems. The highest published scores on the the CoNLL-2014 test set are given below. A distinction is made between papers that report results in the restricted CoNLL-2014 shared task setting of training using publicly-available training datasets only ("),r("em",[r("strong",[t._v("Restricted")])]),t._v(") and those that made use of large, non-public datasets ("),r("em",[r("strong",[t._v("Unrestricted")])]),t._v(").")]),t._v(" "),r("p",[r("strong",[t._v("Restricted")]),t._v(":")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Model")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("F0.5")]),t._v(" "),r("th",[t._v("Paper / Source")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("Code")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Transformer + Pre-train with Pseudo Data (Kiyono et al., EMNLP 2019)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("65.0")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://arxiv.org/abs/1909.00502",target:"_blank",rel:"noopener noreferrer"}},[t._v("An Empirical Study of Incorporating Pseudo Data into Grammatical Error Correction"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("NA")])]),t._v(" "),r("tr",[r("td",[t._v("Sequence Labeling with edits using BERT, Faster inference (Ensemble)  (Awasthi et al., EMNLP 2019)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("61.2")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://www.aclweb.org/anthology/D19-1435.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Parallel Iterative Edit Models for Local Sequence Transduction"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("a",{attrs:{href:"https://github.com/awasthiabhijeet/PIE",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",[t._v("Copy-Augmented Transformer + Pre-train (Zhao and Wang, NAACL 2019)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("61.15")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://arxiv.org/pdf/1903.00138.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Improving Grammatical Error Correction via Pre-Training a Copy-Augmented Architecture with Unlabeled Data"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("a",{attrs:{href:"https://github.com/zhawe01/fairseq-gec",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",[t._v("Sequence Labeling with edits using BERT, Faster inference (Single Model) (Awasthi et al., EMNLP 2019)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("59.7")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://www.aclweb.org/anthology/D19-1435.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Parallel Iterative Edit Models for Local Sequence Transduction"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("a",{attrs:{href:"https://github.com/awasthiabhijeet/PIE",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",[t._v("CNN Seq2Seq + Quality Estimation (Chollampatt and Ng, EMNLP 2018)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("56.52")]),t._v(" "),r("td",[r("a",{attrs:{href:"http://aclweb.org/anthology/D18-1274",target:"_blank",rel:"noopener noreferrer"}},[t._v("Neural Quality Estimation of Grammatical Error Correction"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("a",{attrs:{href:"https://github.com/nusnlp/neuqe/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",[t._v("SMT + BiGRU (Grundkiewicz and Junczys-Dowmunt, 2018)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("56.25")]),t._v(" "),r("td",[r("a",{attrs:{href:"http://aclweb.org/anthology/N18-2046",target:"_blank",rel:"noopener noreferrer"}},[t._v("Near Human-Level Performance in Grammatical Error Correction with Hybrid Machine Translation"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("NA")])]),t._v(" "),r("tr",[r("td",[t._v("Transformer (Junczys-Dowmunt et al., 2018)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("55.8")]),t._v(" "),r("td",[r("a",{attrs:{href:"http://aclweb.org/anthology/N18-1055",target:"_blank",rel:"noopener noreferrer"}},[t._v("Approaching Neural Grammatical Error Correction as a Low-Resource Machine Translation Task"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("a",{attrs:{href:"https://github.com/grammatical/neural-naacl2018",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",[t._v("CNN Seq2Seq (Chollampatt and Ng, 2018)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("54.79")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://www.aaai.org/ocs/index.php/AAAI/AAAI18/paper/viewFile/17308/16137",target:"_blank",rel:"noopener noreferrer"}},[t._v("A Multilayer Convolutional Encoder-Decoder Neural Network for Grammatical Error Correction"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("a",{attrs:{href:"https://github.com/nusnlp/mlconvgec2018",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official"),r("OutboundLink")],1)])])])]),t._v(" "),r("p",[r("strong",[t._v("Unrestricted")]),t._v(":")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Model")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("F0.5")]),t._v(" "),r("th",[t._v("Paper / Source")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("Code")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("CNN Seq2Seq + Fluency Boost (Ge et al., 2018)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("61.34")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://arxiv.org/pdf/1807.01270.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Reaching Human-level Performance in Automatic Grammatical Error Correction: An Empirical Study"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("NA")])])])]),t._v(" "),r("p",[r("em",[r("strong",[t._v("Restricted")])]),t._v(": uses only publicly available datasets. "),r("em",[r("strong",[t._v("Unrestricted")])]),t._v(": uses non-public datasets.")]),t._v(" "),r("h3",{attrs:{id:"conll-2014-10-annotations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#conll-2014-10-annotations"}},[t._v("#")]),t._v(" CoNLL-2014 10 Annotations")]),t._v(" "),r("p",[r("a",{attrs:{href:"http://aclweb.org/anthology/P15-1068",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bryant and Ng, 2015"),r("OutboundLink")],1),t._v(" released 8 additional annotations (in addition to the two official annotations) for the CoNLL-2014 shared task test set ("),r("a",{attrs:{href:"http://www.comp.nus.edu.sg/~nlp/sw/10gec_annotations.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),r("OutboundLink")],1),t._v(").")]),t._v(" "),r("p",[r("strong",[t._v("Restricted")]),t._v(":")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Model")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("F0.5")]),t._v(" "),r("th",[t._v("Paper / Source")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("Code")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("SMT + BiGRU (Grundkiewicz and Junczys-Dowmunt, 2018)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("72.04")]),t._v(" "),r("td",[r("a",{attrs:{href:"http://aclweb.org/anthology/N18-2046",target:"_blank",rel:"noopener noreferrer"}},[t._v("Near Human-Level Performance in Grammatical Error Correction with Hybrid Machine Translation"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("NA")])]),t._v(" "),r("tr",[r("td",[t._v("CNN Seq2Seq (Chollampatt and Ng, 2018)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("70.14 (measured by Ge et al., 2018)")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://www.aaai.org/ocs/index.php/AAAI/AAAI18/paper/viewFile/17308/16137",target:"_blank",rel:"noopener noreferrer"}},[t._v(" A Multilayer Convolutional Encoder-Decoder Neural Network for Grammatical Error Correction"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("a",{attrs:{href:"https://github.com/nusnlp/mlconvgec2018",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official"),r("OutboundLink")],1)])])])]),t._v(" "),r("p",[r("strong",[t._v("Unrestricted")]),t._v(":")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Model")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("F0.5")]),t._v(" "),r("th",[t._v("Paper / Source")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("Code")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("CNN Seq2Seq + Fluency Boost (Ge et al., 2018)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("76.88")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://arxiv.org/pdf/1807.01270.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Reaching Human-level Performance in Automatic Grammatical Error Correction: An Empirical Study"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("NA")])])])]),t._v(" "),r("p",[r("em",[r("strong",[t._v("Restricted")])]),t._v(": uses only publicly available datasets. "),r("em",[r("strong",[t._v("Unrestricted")])]),t._v(": uses non-public datasets.")]),t._v(" "),r("h3",{attrs:{id:"jfleg"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jfleg"}},[t._v("#")]),t._v(" JFLEG")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/keisks/jfleg",target:"_blank",rel:"noopener noreferrer"}},[t._v("JFLEG test set"),r("OutboundLink")],1),t._v(" released by "),r("a",{attrs:{href:"http://aclweb.org/anthology/E17-2037",target:"_blank",rel:"noopener noreferrer"}},[t._v("Napoles et al., 2017"),r("OutboundLink")],1),t._v(" consists of 747 English sentences with 4 references for each sentence. Models are evaluated with "),r("a",{attrs:{href:"https://github.com/cnap/gec-ranking/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GLEU"),r("OutboundLink")],1),t._v(" metric ("),r("a",{attrs:{href:"https://arxiv.org/pdf/1605.02592.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Napoles et al., 2016"),r("OutboundLink")],1),t._v(").")]),t._v(" "),r("p",[r("strong",[t._v("Restricted")]),t._v(":")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Model")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("GLEU")]),t._v(" "),r("th",[t._v("Paper / Source")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("Code")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("SMT + BiGRU (Grundkiewicz and Junczys-Dowmunt, 2018)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("61.50")]),t._v(" "),r("td",[r("a",{attrs:{href:"http://aclweb.org/anthology/N18-2046",target:"_blank",rel:"noopener noreferrer"}},[t._v("Near Human-Level Performance in Grammatical Error Correction with Hybrid Machine Translation"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("NA")])]),t._v(" "),r("tr",[r("td",[t._v("Transformer (Junczys-Dowmunt et al., 2018)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("59.9")]),t._v(" "),r("td",[r("a",{attrs:{href:"http://aclweb.org/anthology/N18-1055",target:"_blank",rel:"noopener noreferrer"}},[t._v("Approaching Neural Grammatical Error Correction as a Low-Resource Machine Translation Task"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("NA")])]),t._v(" "),r("tr",[r("td",[t._v("CNN Seq2Seq (Chollampatt and Ng, 2018)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("57.47")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://www.aaai.org/ocs/index.php/AAAI/AAAI18/paper/viewFile/17308/16137",target:"_blank",rel:"noopener noreferrer"}},[t._v(" A Multilayer Convolutional Encoder-Decoder Neural Network for Grammatical Error Correction"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("a",{attrs:{href:"https://github.com/nusnlp/mlconvgec2018",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official"),r("OutboundLink")],1)])])])]),t._v(" "),r("p",[r("strong",[t._v("Unrestricted")]),t._v(":")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Model")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("GLEU")]),t._v(" "),r("th",[t._v("Paper / Source")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("Code")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("CNN Seq2Seq + Fluency Boost and inference (Ge et al., 2018)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("62.42")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://arxiv.org/pdf/1807.01270.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Reaching Human-level Performance in Automatic Grammatical Error Correction: An Empirical Study"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("NA")])])])]),t._v(" "),r("p",[r("em",[r("strong",[t._v("Restricted")])]),t._v(": uses only publicly available datasets. "),r("em",[r("strong",[t._v("Unrestricted")])]),t._v(": uses non-public datasets.")]),t._v(" "),r("h3",{attrs:{id:"bea-shared-task-2019"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bea-shared-task-2019"}},[t._v("#")]),t._v(" BEA Shared Task - 2019")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.cl.cam.ac.uk/research/nl/bea2019st/",target:"_blank",rel:"noopener noreferrer"}},[t._v("BEA shared task - 2019 dataset"),r("OutboundLink")],1),t._v(" released for the BEA Shared Task on Grammatical Error Correction provides a newer and bigger dataset for evaluating GEC models in 3 tracks, based on the datasets used for training:")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://competitions.codalab.org/competitions/20228",target:"_blank",rel:"noopener noreferrer"}},[t._v("Restricted track"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://competitions.codalab.org/competitions/20229",target:"_blank",rel:"noopener noreferrer"}},[t._v("Unrestricted track"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://competitions.codalab.org/competitions/20230",target:"_blank",rel:"noopener noreferrer"}},[t._v("Low-resource track"),r("OutboundLink")],1)])]),t._v(" "),r("p",[t._v("Training and dev sets are released publicly and a GEC model's performance is evaluated by F-0.5 score. The model outputs on the test-set have to be uploaded to Codalab(publicly available) where category-wise error metrics are displayed. The test set consists of 4477 sentences(larger and diverse than the CoNLL-14 dataset) and the outputs are scored via "),r("a",{attrs:{href:"https://github.com/chrisjbryant/errant",target:"_blank",rel:"noopener noreferrer"}},[t._v("ERRANT"),r("OutboundLink")],1),t._v(" toolkit. The released data are collected from 2 sources:")]),t._v(" "),r("ul",[r("li",[t._v("Write & Improve, an online web platform that assists non-native English students with their writing.")]),t._v(" "),r("li",[t._v("LOCNESS, a corpus consisting of essays written by native English students.")])]),t._v(" "),r("p",[t._v("The description of tracks from the BEA "),r("a",{attrs:{href:"https://www.cl.cam.ac.uk/research/nl/bea2019st/#tracks",target:"_blank",rel:"noopener noreferrer"}},[t._v("site"),r("OutboundLink")],1),t._v(" is given below:")]),t._v(" "),r("p",[r("em",[r("strong",[t._v("Restricted Track:")])]),t._v("\nIn the restricted track, participants may only use the following learner datasets:")]),t._v(" "),r("ul",[r("li",[t._v("FCE (Yannakoudakis et al., 2011)")]),t._v(" "),r("li",[t._v("Lang-8 Corpus of Learner English (Mizumoto et al., 2011; Tajiri et al., 2012)")]),t._v(" "),r("li",[t._v("NUCLE (Dahlmeier et al., 2013)")]),t._v(" "),r("li",[t._v("W&I+LOCNESS (Bryant et al., 2019; Granger, 1998)"),r("br"),t._v("\nNote that we restrict participants to the preprocessed Lang-8 Corpus of Learner English rather than the raw, multilingual Lang-8 Learner Corpus because participants would otherwise need to filter the raw corpus themselves. We also do not allow the use of the CoNLL 2013/2014 shared task test sets in this track.")])]),t._v(" "),r("p",[r("em",[r("strong",[t._v("Unrestricted Track:")])]),t._v("\nIn the unrestricted track, participants may use anything and everything to build their systems. This includes proprietary datasets and software.")]),t._v(" "),r("p",[r("em",[r("strong",[t._v("Low Resource Track (formerly Unsupervised Track):")])]),t._v("\nIn the low resource track, participants may only use the following learner dataset: W&I+LOCNESS development set.")]),t._v(" "),r("p",[t._v("Since current state-of-the-art systems rely on as much annotated learner data as possible to reach the best performance, the goal of the low resource track is to encourage research into systems that do not rely on large amounts of learner data. This track should be of particular interest to researchers working on GEC for languages where large learner corpora do not exist.")]),t._v(" "),r("h3",{attrs:{id:"results-on-wi-locness-test-set"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#results-on-wi-locness-test-set"}},[t._v("#")]),t._v(" Results on WI-LOCNESS test set:")]),t._v(" "),r("p",[r("strong",[t._v("Restricted track")]),t._v(":")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Model")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("F0.5")]),t._v(" "),r("th",[t._v("Paper / Source")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("Code")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("BEA Combination")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("73.18")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://www.aclweb.org/anthology/W19-4414/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Learning to Combine Grammatical Error Corrections "),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("NA")])]),t._v(" "),r("tr",[r("td",[t._v("Transformer + Pre-train with Pseudo Data (Kiyono et al., EMNLP 2019)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("70.2")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://arxiv.org/abs/1909.00502",target:"_blank",rel:"noopener noreferrer"}},[t._v("An Empirical Study of Incorporating Pseudo Data into Grammatical Error Correction"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("NA")])]),t._v(" "),r("tr",[r("td",[t._v("Transformer")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("69.47")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://www.aclweb.org/anthology/W19-4427",target:"_blank",rel:"noopener noreferrer"}},[t._v("Neural Grammatical Error Correction Systems with UnsupervisedPre-training on Synthetic Data"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("a",{attrs:{href:"https://github.com/grammatical/pretraining-bea2019",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official: Code to be updated soon"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",[t._v("Transformer")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("69.00")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://www.aclweb.org/anthology/W19-4423",target:"_blank",rel:"noopener noreferrer"}},[t._v("A Neural Grammatical Error Correction System Built OnBetter Pre-training and Sequential Transfer Learning"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("a",{attrs:{href:"https://github.com/kakaobrain/helo_word/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",[t._v("Ensemble of models")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("66.78")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://www.aclweb.org/anthology/W19-4416",target:"_blank",rel:"noopener noreferrer"}},[t._v("The LAIX Systems in the BEA-2019 GEC Shared Task"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("NA")])])])]),t._v(" "),r("p",[r("strong",[t._v("Low-resource track")]),t._v(":")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Model")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("F0.5")]),t._v(" "),r("th",[t._v("Paper / Source")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("Code")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Transformer")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("64.24")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://www.aclweb.org/anthology/W19-4427",target:"_blank",rel:"noopener noreferrer"}},[t._v("Neural Grammatical Error Correction Systems with UnsupervisedPre-training on Synthetic Data"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("a",{attrs:{href:"https://github.com/grammatical/pretraining-bea2019",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official: Code to be updated soon"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",[t._v("Transformer")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("58.80")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://www.aclweb.org/anthology/W19-4423",target:"_blank",rel:"noopener noreferrer"}},[t._v("A Neural Grammatical Error Correction System Built OnBetter Pre-training and Sequential Transfer Learning"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("a",{attrs:{href:"https://github.com/kakaobrain/helo_word/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",[t._v("Ensemble of models")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("51.81")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://www.aclweb.org/anthology/W19-4416",target:"_blank",rel:"noopener noreferrer"}},[t._v("The LAIX Systems in the BEA-2019 GEC Shared Task"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("NA")])])])]),t._v(" "),r("p",[r("strong",[t._v("Reference")]),t._v(":")]),t._v(" "),r("ul",[r("li",[t._v("Helen Yannakoudakis, Ekaterina Kochmar, Claudia Leacock, Nitin Madnani, Ildikó Pilán, Torsten Zesch, in "),r("a",{attrs:{href:"https://www.aclweb.org/anthology/W19-44",target:"_blank",rel:"noopener noreferrer"}},[t._v("Proceedings of the Fourteenth Workshop on Innovative Use of NLP for Building Educational Applications"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("Christopher Bryant, Mariano Felice, and Ted Briscoe. 2017. Automatic annotation and evaluation of Error Types for Grammatical Error Correction. In Proceedings of the 55th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers). Vancouver, Canada.")])])])}),[],!1,null,null,null);e.default=n.exports}}]);