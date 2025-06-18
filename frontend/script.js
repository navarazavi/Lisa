window.addEventListener("load", () => {
  const sendBtn = document.getElementById("send-btn");
  const userInput = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

const inventoryData = [
  { date: "12/19/22", name: "Flanged plug caps", qty: "5 packs", id: "Fisher Scientific 22-171-668 (Blue)" },
  { date: "12/27/22", name: "Plastic pipettes, graduated 3mL", qty: "3 packs", id: "VWR 14670-200" },
  { date: "12/27/22", name: "pipet tips, 0.5-10 ul", qty: "2 packs", id: "VWR 76322-514" },
  { date: "12/27/22", name: "small capped tubes", qty: "1 case", id: "Laboratory Disposables 352054" },
  { date: "12/27/22", name: "HemaColor Stain Set", qty: "1 set", id: "VWR 15204-176" },
  { date: "1/5/23", name: "Eosin-Y 25 grams", qty: "1 bottle", id: "Sigma E4382" },
  { date: "1/5/23", name: "microcentrifuged tubes", qty: "1 pack", id: "VWR 89000-034" },
  { date: "1/5/23", name: "pH indicator strips", qty: "3 packs", id: "VWR EM1.09543.0001" },
  { date: "1/5/23", name: "slides, frosted color", qty: "1 case", id: "Market Lab ML7646" },
  { date: "1/18/23", name: "Acetic Acid (500 ml)", qty: "1 bottle", id: "Sigma 27225" },
  { date: "1/19/23", name: "PBS 500 ml", qty: "1 bottle", id: "Irvine 9235" },
  { date: "1/27/23", name: "microcentrifuged tubes", qty: "1 pack", id: "VWR 89000-034" },
  { date: "1/27/23", name: "mineral oil (lube)", qty: "1 bottle", id: "McKesson 996302" },
  { date: "1/30/23", name: "Plastic pipettes, graduated 1mL", qty: "4 packs", id: "VWR 14670-307" },
  { date: "1/30/23", name: "Plastic pipettes, graduated 3mL", qty: "3 packs", id: "VWR 14670-200" },
  { date: "2/6/23", name: "5 ml pipettes", qty: "2 cases", id: "VWR 14673-216" },
  { date: "2/6/23", name: "cryo cane tabs", qty: "10 bags", id: "Agtech F09A" },
  { date: "2/9/23", name: "15 ml conical tubes", qty: "2 cases", id: "Laboratory Disposables 352095" },
  { date: "2/14/23", name: "Chambered slides", qty: "see comments", id: "Spectrum" },
  { date: "2/14/23", name: "Upper & lower gradient", qty: "see comments", id: "Origio" },
  { date: "2/14/23", name: "Sperm Wash", qty: "see comments", id: "Origio" },
  { date: "2/15/23", name: "15mL conical tubes", qty: "2 cases", id: "IVF Store 0030122151-MEA" },
  { date: "2/16/23", name: "paper bags", qty: "1 pack ", id: "McKesson 733024" },
  { date: "2/16/23", name: "5 ml pipettes", qty: "3 cases", id: "VWR 14673-216" },
  { date: "2/16/23", name: "Small biohaz bags", qty: "1 box", id: "McKesson 196264" },
  { date: "2/24/23", name: "pH indicator strips", qty: "1 pack", id: "MS EMD 1.09543.0007-1" },
  { date: "2/27/23", name: "cryo labels", qty: "5 packs", id: "Brady PTL-75-461" },
  { date: "2/27/23", name: "cryl label maker ribbon ", qty: "1 pack of 3 ribbons", id: "Brady M61-R4310-3" },
  { date: "2/28/23", name: "Plastic pipettes, graduated 1mL", qty: "3 packs", id: "VWR 14670-307" },
  { date: "2/28/23", name: "Plastic pipettes, graduated 3mL", qty: "3 packs", id: "VWR 14670-200" },
  { date: "2/28/23", name: "Zip Ties", qty: "2 packs", id: "VWR 80080-914" },
  { date: "3/12/23", name: "Flange Plug Cap - For 13mm Tubes (Blue)", qty: "10 bags", id: "Globe Scientific 118240B" },
  { date: "3/13/23", name: "Biohazard Bags", qty: "1 case", id: "McKesson 551254" },
  { date: "3/15/23", name: "Plastic pipettes, graduated 1mL", qty: "5 packs", id: "VWR 14670-307" },
  { date: "3/19/23", name: "5 ml pipettes", qty: "1 case", id: "VWR 14673-216" },
  { date: "3/19/23", name: "200ul tips", qty: "2 boxes", id: "VWR 89215-252" },
  { date: "3/19/23", name: "1250ul tips", qty: "2 boxes", id: "VWR 15000-462" },
  { date: "3/24/23", name: "Tip cone (mLINE)", qty: "1 tip", id: "Pipette Supplies - SA 731084" },
  { date: "3/27/23", name: "LN measuring stick", qty: "1 meter stick", id: "IVF Store 20561020 (47" version)" },
  { date: "3/29/23", name: "5 ml pipettes", qty: "1 case", id: "VWR 14673-216" },
  { date: "4/4/23", name: "5mL pipettes", qty: "3 cases ", id: "IVF STORE 0030127714-MEA" },
  { date: "4/3/23", name: "Plastic pipettes, graduated 3mL", qty: "5 packs", id: "VWR 14670-200" },
  { date: "4/3/23", name: "Plastic pipettes, graduated 1mL", qty: "5 packs", id: "VWR 14670-307" },
  { date: "4/7/23", name: "microcentrifuge tubes", qty: "4 bags", id: "VWR 89000-038" },
  { date: "4/12/23", name: "15mL conicals", qty: "4 cases", id: "IVF store 0030122151-MEA" },
  { date: "4/12/23", name: "workstation pads", qty: "1 case", id: "Mckesson 730985" },
  { date: "4/12/23", name: "cryo labels", qty: "3 packs", id: "Brady M6-75-461" },
  { date: "4/19/23", name: "5mL pipettes", qty: "3 cases ", id: "IVF STORE 0030127714-MEA" },
  { date: "4/20/23", name: "10 uL pipettes", qty: "2 cases", id: "VWR 89215-252" },
  { date: "4/28/23", name: "morph stain set", qty: "1 set", id: "VWR 15204-176" },
  { date: "4/28/23", name: "mineral oil", qty: "2 bottles", id: "Mckesson 996302" },
  { date: "4/28/23", name: "190 ul pipettes", qty: "2 cases", id: "VWR 15000-462" },
  { date: "4/28/23", name: "Plastic pipettes, graduated 3mL", qty: "3 packs", id: "VWR 14670-200" },
  { date: "4/28/23", name: "Plastic pipettes, graduated 1mL", qty: "3 packs", id: "VWR 14670-307" },
  { date: "5/1/23", name: "5mL pipettes", qty: "3 cases ", id: "IVF STORE 0030127714-MEA" },
  { date: "5/3/23", name: "Fixative Solution", qty: "1 bottle", id: "VWR 15204-170" },
  { date: "5/9/23", name: "5mL pipettes", qty: "1 case", id: "IVF store 7077-5N-MEA" },
  { date: "5/10/23", name: "HemaColor stain set", qty: "2 packs", id: "VWR 15204-176" },
  { date: "5/16/23", name: "5 mL pipettes", qty: "3 cases", id: "IVF STORE 0030127714-MEA" },
  { date: "5/17/23", name: "cryo labels", qty: "4 packs", id: "Brady M6-75-461" },
  { date: "5/23/23", name: "15mL conicals", qty: "4 cases", id: "IVF Store 0030122151-MEA" },
  { date: "5/24/23", name: "Snap cap tubes, large", qty: "1 case", id: "IVF Store 352051" },
  { date: "5/24/23", name: "morph slides", qty: "1 case", id: "Market Lab ML7646 (pink)" },
  { date: "5/24/23", name: "ribbon, cryo labeler", qty: "1 pack", id: "Brady M61-R4310-3" },
  { date: "5/31/23", name: "Snap cap tubes, large", qty: "2 cases", id: "IVF Store 352057" },
  { date: "6/2/23", name: "pH strips", qty: "1 case", id: "VWR EM1.09543.0007" },
  { date: "6/5/23", name: "kimwipes", qty: "1 case", id: "Mckesson 188618" },
  { date: "6/6/23", name: "5 mL pipettes", qty: "3 cases", id: "IVF STORE 0030127714-MEA" },
  { date: "6/6/23", name: "kimwipes", qty: "1 case", id: "IVF Store 34120-CT" },
  { date: "6/8/23", name: "Vortexer", qty: "1", id: "VWR 76549-932" },
  { date: "6/18/23", name: "PBS", qty: "1", id: "Irvine 9235" },
  { date: "6/21/23", name: "5 uL pipette tips", qty: "2 cases", id: "VWR 76322-514" },
  { date: "6/21/23", name: "microcentrifuge tubes", qty: "2 packs (of 500)", id: "VWR 89000-038" },
  { date: "6/21/23", name: "5 mL pipettes", qty: "3 cases", id: "IVF STORE 0030127714-MEA" },
  { date: "6/29/23", name: "Plastic pipettes, graduated 3mL", qty: "3 cases", id: "VWR 14670-200" },
  { date: "6/29/23", name: "Plastic pipettes, graduated 1mL", qty: "3 cases", id: "VWR 14670-307" },
  { date: "7/5/23", name: "10 ul pipette tips", qty: "1 case", id: "VWR 89215-252" },
  { date: "7/5/23", name: "190 ul pipette tips", qty: "1 case", id: "VWR 15000-462" },
  { date: "7/1/23", name: "Acrylic tube racks", qty: "8", id: "Dynalon 159505-10" },
  { date: "7/5/23", name: "Lab tape - rainbow pack", qty: "1 box", id: "VWR 89097-920" },
  { date: "7/6/23", name: "LeucoScreen Plus", qty: "1 pack", id: "Vitrolife 15447" },
  { date: "7/13/23", name: "workstation pads", qty: "1 case", id: "Mckesson 730985" },
  { date: "7/17/23", name: "5 mL pipettes", qty: "3 cases", id: "IVF STORE 0030127714-MEA" },
  { date: "7/21/23", name: "cryo labels", qty: "3 packs", id: "Brady M6-75-461" },
  { date: "7/25/23", name: "15 mL conical vials", qty: "3 cases", id: "IVF Store 0030122151-MEA" },
  { date: "7/27/23", name: "Plastic pipettes, graduated 3mL", qty: "5 packs", id: "VWR 14670-200" },
  { date: "7/27/23", name: "Plastic pipettes, graduated 1mL", qty: "5 packs", id: "VWR 14670-307" },
  { date: "7/27/23", name: "cryo vials", qty: "1 case", id: "Origio NUNC368632" },
  { date: "7/27/23", name: "cryo canes", qty: "1 bag", id: "IVF Store 2019-13-106" },
  { date: "7/28/23", name: "Plastic pipettes, graduated 1mL", qty: "5 packs", id: "VWR 14670-307" },
  { date: "7/28/23", name: "Plastic pipettes, graduated 3mL", qty: "5 packs", id: "VWR 14670-200" },
  { date: "8/1/23", name: "LN2 Ruler", qty: "1 ruler, 47"", id: "SKU: 20561020 IVF Store" },
  { date: "8/1/23", name: "Collection kit condoms", qty: "2 Boxes", id: "IVF Store MFP-25" },
  { date: "8/4/23", name: "snap cap tubes, small", qty: "1 case", id: "Laboratory Disposables 352054" },
  { date: "8/4/23", name: "ethanol", qty: "1 bottle", id: "VWR BDH1164-4LP" },
  { date: "8/11/23", name: "mineral oil", qty: "2 bottles", id: "Mckesson 996302" },
  { date: "8/12/23", name: "cryo labels", qty: "10 packs", id: "Brady M6-75-461" },
  { date: "7/24/23", name: "microcentrifuge tubes", qty: "2 bags", id: "VWR 89000-038" },
  { date: "8/17/23", name: "5 mL pipettes", qty: "3 cases", id: "IVF STORE 0030127714-MEA" },
  { date: "8/18/23", name: "morph stain set", qty: "1 count", id: "VWR 15204-176" },
  { date: "8/28/23", name: "10 uL pipettes", qty: "2 cases", id: "VWR 89215-252" },
  { date: "8/28/23", name: "190 uL pipettes", qty: "2 cases", id: "VWR 15000-462" },
  { date: "8/28/23", name: "5 mL pipettes", qty: "2 cases", id: "IVF store 7077-5N-MEA" },
  { date: "8/31/23", name: "specimen cups, 4 oz", qty: "2 cases", id: "McKesson 1109302" },
  { date: "9/5/23", name: "5 mL pipettes", qty: "6 boxes", id: "1740-MEA" },
  { date: "9/12/23", name: "Plastic pipettes, graduated 1mL", qty: "5 boxes", id: "VWR 14670-307" },
  { date: "9/12/23", name: "Plastic pipettes, graduated 3mL", qty: "5 boxes", id: "VWR 14670-200" },
  { date: "9/12/23", name: "15 mL conical vials", qty: "3 cases", id: "IVF Store 0030122151-MEA" },
  { date: "9/13/23", name: "small biohaz bags", qty: "1 box", id: "McKesson 196264" },
  { date: "9/14/23", name: "bulb, 6v/30 watt, halogen ", qty: "3 bulbs", id: "IVF Store 410849" },
  { date: "9/15/23", name: "microcentrifuge tubes", qty: "3 bags", id: "VWR 89000-040" },
  { date: "9/15/23", name: "PBS Solution", qty: "1 bottle", id: "Irvine 9235" },
  { date: "9/19/23", name: "pH strips", qty: "1 case", id: "VWR EM1.09543.0007" },
  { date: "9/28/23", name: "5 mL pipettes", qty: "3 cases", id: "IVF STORE 0030127714-MEA" },
  { date: "10/2/23", name: "accu-beads", qty: "1 box", id: "Fisher Scientific NC0136046" },
  { date: "10/9/23", name: "tubes, Roche analyzer 13mm x 75mm", qty: "1 pack", id: "Fisher Scientific 22-171-610" },
  { date: "10/9/23", name: "tubes, Roche analyzer 13mm x 75mm", qty: "3 packs", id: "Fisher Scientific 22-171-610" },
  { date: "10/9/23", name: "Plastic pipettes, graduated 3mL", qty: "5 packs", id: "VWR 14670-200" },
  { date: "10/16/23", name: "Zip Ties", qty: "3 packs (2 andro, 1 FD)", id: "VWR 80080-914" },
  { date: "10/18/23", name: "5 mL pipettes", qty: "3 cases", id: "IVF STORE 0030127714-MEA" },
  { date: "10/20/23", name: "ribbon, cryo labeller", qty: "1 pack of 3", id: "Brady M61-R4310-3" },
  { date: "10/26/23", name: "morph slides", qty: "1 case", id: "Market Lab ML7646" },
  { date: "10/29/23", name: "biohaz bags", qty: "1 case", id: "Mckesson 551254" },
  { date: "11/2/23", name: "Plastic pipettes, graduated 1mL", qty: "5 boxes", id: "VWR 14670-307" },
  { date: "11/6/23", name: "snap cap tubes, large", qty: "1 case", id: "Laboratory Disposables 352051" },
  { date: "11/6/23", name: "snap cap tubes, small", qty: "1 case", id: "Laboratory Disposables 352054" },
  { date: "11/7/23", name: "5 mL pipettes", qty: "3 cases", id: "IVF STORE 0030127714-MEA" },
  { date: "11/7/23", name: "15 mL conical vials", qty: "3 cases", id: "IVF Store 0030122151-MEA" },
  { date: "11/8/23", name: "Pasteur pipettes", qty: "1 case", id: "Sigma S6143" },
  { date: "11/13/23", name: "190 uL pipettes", qty: "1 case", id: "VWR 15000-462" },
  { date: "11/13/23", name: "10 uL pipettes", qty: "2 cases", id: "VWR 89215-252" },
  { date: "11/14/23", name: "Plastic pipettes, graduated 1mL", qty: "5 boxes", id: "VWR 14670-307" },
  { date: "11/20/23", name: "microcentrifuge tubes", qty: "3 bags", id: "VWR 89000-040" },
  { date: "11/27/23", name: "mineral oil", qty: "2 bottles", id: "Mckesson 996302" },
  { date: "11/27/23", name: "5 mL pipettes", qty: "3 cases", id: "IVF STORE 0030127714-MEA" },
  { date: "11/28/23", name: "190 uL pipettes", qty: "1 case", id: "VWR 15000-462" },
  { date: "12/8/23", name: "cryo canes", qty: "1 case", id: "IVF Store 2019-13-106" },
  { date: "12/13/23", name: "5 mL pipettes", qty: "4 cases", id: "IVF STORE 0030127714-MEA" },
  { date: "12/13/23", name: "15 mL conical vials", qty: "4 cases", id: "IVF Store 0030122151-MEA" },
  { date: "12/15/23", name: "PXP", qty: "1 bottle", id: "Sigma P1784" },
  { date: "12/18/23", name: "Fixative solution", qty: "1 bottle", id: "VWR 15204-170" },
  { date: "12/18/23", name: "5 uL pipettes", qty: "2 cases", id: "VWR 76322-514" },
  { date: "12/18/23", name: "cryo labels", qty: "10 packs", id: "Brady M6-75-461" },
  { date: "12/22/23", name: "cane tabs", qty: "10 bags of 100", id: "Agtech F09A" },
  { date: "1/5/24", name: "cryo labeler, ribbon", qty: "1 pack of 3", id: "Brady M61-R4310-3" },
  { date: "1/15/24", name: "Plastic pipettes, graduated 3mL", qty: "4 packs", id: "VWR 14670-200" },
  { date: "1/28/24", name: "PBS Solution", qty: "1 bottle", id: "Irvine 9235" },
  { date: "2/1/24", name: "Leucoscreen Plus", qty: "1 count", id: "Vitrolife 15447" },
  { date: "2/9/24", name: "large snap cap tubes", qty: "1 case", id: "Laboratory Disposables 352051" },
  { date: "2/9/24", name: "morph slides", qty: "1 case", id: "Market Lab ML7646 (choose color)" },
  { date: "2/12/24", name: "Plastic pipettes, graduated 1mL", qty: "5 boxes", id: "VWR 14670-307" },
  { date: "2/20/24", name: "5 mL pipettes", qty: "3 cases", id: "IVF STORE 0030127714-MEA" },
  { date: "2/26/24", name: "5 ul pipette tips", qty: "3 cases", id: "VWR 76322-514" },
  { date: "2/26/24", name: "Roche analyzer tubes", qty: "2 cases", id: "Fischer Scientific 22-171-610" },
  { date: "3/4/24", name: "10 uL pipette tips", qty: "2 cases", id: "VWR 89215-252" },
  { date: "3/4/24", name: "190 uL pipette tips", qty: "2 cases", id: "VWR 15000-462" },
  { date: "3/4/24", name: "0.5-10uL Pipettor", qty: "1 pipettor", id: "VWR 47745-544" },
  { date: "3/4/24", name: "10-100uL Pipettor", qty: "1 pipettor", id: "VWR 47745-546" },
  { date: "3/4/24", name: "100-1000uL Pipettor", qty: "1 pipettor", id: "VWR 47745-550" },
  { date: "3/13/24", name: "zip ties", qty: "3 packs", id: "VWR 80080-914" },
  { date: "3/13/24", name: "Plastic pipettes, graduated 3mL", qty: "4 packs", id: "VWR 14670-200" },
  { date: "3/17/24", name: "15 mL conical vials", qty: "4 cases", id: "IVF Store 0030122151-MEA" },
  { date: "3/17/24", name: "Plastic pipettes, graduated 1mL", qty: "4 packs", id: "VWR 14670-307" },
  { date: "3/19/24", name: "190 uL pipette tips (back up)", qty: "2 packs", id: "VWR 76322-154" },
  { date: "3/21/24", name: "5 mL pipettes", qty: "3 cases", id: "IVF STORE 0030127714-MEA" },
  { date: "3/25/24", name: "microcentrifuge tubes", qty: "3 bags", id: "VWR 89000-040" },
  { date: "3/28/24", name: "morph stain set", qty: "1 count", id: "VWR 15204-176" },
  { date: "3/28/24", name: "glove holder/dispenser for endo", qty: "1 count", id: "VWR 10031-896" },
  { date: "4/5/24", name: "pH strips", qty: "1 case", id: "VWR EM1.09543.0007" },
  { date: "4/5/24", name: "5 mL pipettes", qty: "3 cases", id: "IVF STORE 0030127714-MEA" },
  { date: "4/9/24", name: "biohaz bags", qty: "1 case", id: "Mckesson 551254" },
  { date: "4/22/24", name: "mineral oil", qty: "2 bottles", id: "Mckesson 1235109" },
  { date: "4/26/24", name: "Plastic pipettes, graduated 3mL", qty: "4 packs", id: "VWR 14670-200" },
  { date: "4/26/24", name: "Plastic pipettes, graduated 1mL", qty: "4 packs", id: "VWR 14670-307" },
  { date: "4/26/24", name: "10 uL pipette tips", qty: "2 cases", id: "VWR 89215-252" },
  { date: "4/28/24", name: "Roche analyzer tubes", qty: "4 cases", id: "Fischer Scientific 22-171-610" },
  { date: "4/30/24", name: "Coplin Jars (For slide staining)", qty: "6 pack", id: "900570-Case" },
  { date: "5/6/24", name: "5 mL pipettes", qty: "3 cases", id: "IVF STORE 0030127714-MEA" },
  { date: "5/6/24", name: "large snap cap tubes", qty: "1 case", id: "Laboratory Disposables 352051" },
  { date: "5/6/24", name: "small snap cap tubes", qty: "1 case", id: "Laboratory Disposables 352054" },
  { date: "5/6/24", name: "biohaz bags", qty: "1 case", id: "Mckesson 551254" },
  { date: "5/10/24", name: "Serum tube caps", qty: "5 packs", id: "VWR 89206-927" },
  { date: "5/13/24", name: "morph slides", qty: "1 case", id: "Market Lab ML7646 (choose color)" },
  { date: "5/13/24", name: "PBS", qty: "1 bottle", id: "Irvine 9235" },
  { date: "5/14/24", name: "Coplin Jars 60mL", qty: "6 pack", id: "VWR 25457-006" },
  { date: "5/28/24", name: "10 mL pipettes", qty: "1 case", id: "VWR 53223-020" },
  { date: "5/28/24", name: "cryo ribbons", qty: "3 packs (of 3)", id: "Brady M61-R4310-3" },
  { date: "5/28/24", name: "15 mL conical vials", qty: "4 cases", id: "IVF Store 0030122151-MEA" },
  { date: "6/3/24", name: "70% ethanol", qty: "1 bottle", id: "VWR BDH1164-4LP" },
  { date: "6/5/24", name: "Plastic pipettes, graduated 1mL", qty: "4 packs", id: "VWR 14670-307" },
  { date: "6/5/24", name: "Plastic pipettes, graduated 3mL", qty: "4 packs", id: "VWR 14670-200" },
  { date: "6/6/24", name: "cryo labels", qty: "10 packs", id: "Brady M6-75-461" },
  { date: "6/6/24", name: "5 mL pipettes", qty: "4 cases", id: "IVF STORE 0030127714-MEA" },
  { date: "6/7/24", name: "microcentrifuge tubes", qty: "3 bags", id: "VWR 89000-040" },
  { date: "6/27/24", name: "biohaz bags", qty: "1 case", id: "Mckesson 551254" },
  { date: "6/28/24", name: "sperm wash", qty: "20 bottles", id: "origio" },
  { date: "7/4/24", name: "LN measuring stick", qty: "2 count", id: "IVF Store 20561020 (47" version)" },
  { date: "7/8/24", name: "5 mL pipettes", qty: "3 cases", id: "IVF STORE 0030127714-MEA" },
  { date: "7/8/24", name: "LN measuring stick", qty: "3 count", id: "IVF Store 20561020 (47" version)" },
  { date: "7/9/24", name: "Plastic pipettes, graduated 1mL", qty: "4 packs", id: "VWR 14670-307" },
  { date: "7/17/24", name: "tubes, roche ", qty: "4 bags", id: "Fischer Scientific 22-171-610" },
  { date: "7/19/24", name: "ethanol 70%", qty: "1 bottle", id: "VWR BDH1164-4LP" },
  { date: "7/19/24", name: "cryo canes", qty: "1 bag", id: "IVF Store 2019-13-106" },
  { date: "7/19/24", name: "190 uL pipette tips", qty: "2 cases", id: "VWR 15000-462" },
  { date: "7/29/24", name: "mineral oil", qty: "2 bottles", id: "McKesson 1235109" },
  { date: "8/5/24", name: "5 mL pipettes", qty: "4 cases", id: "IVF STORE 0030127714-MEA" },
  { date: "8/5/24", name: "pH strips", qty: "1 case", id: "VWR EM1.09543.0007" },
  { date: "8/5/24", name: "PBS", qty: "1 bottle", id: "Irvine 9235" },
  { date: "8/9/24", name: "15 mL conical vials", qty: "4 cases", id: "IVF Store 0030122151-MEA" },
  { date: "8/9/24", name: "10 uL pipettes (5-200 uL)", qty: "2 cases", id: "VWR 89215-252" },
  { date: "8/9/24", name: "cover slips", qty: "1 case of 10oz", id: "VWR 48366-089" },
  { date: "8/12/24", name: "Plastic pipettes, graduated 1mL", qty: "4 packs", id: "VWR 14670-307" },
  { date: "8/12/24", name: "Plastic pipettes, graduated 3mL", qty: "4 packs", id: "VWR 14670-200" },
  { date: "8/20/24", name: "large snap cap tubes", qty: "1 case of 1000", id: "IVF Store 352051" },
  { date: "8/27/24", name: "blue serum tube caps", qty: "5 packs", id: "VWR 89206-927" },
  { date: "8/28/24", name: "Leucoscreen plus", qty: "1 count", id: "Vitrolife 15447" },
  { date: "9/2/24", name: "Microcentrifuge tubes", qty: "2 packs", id: "VWR 89000-034" },
  { date: "9/3/24", name: "specimen cups", qty: "2 boxes", id: "Mckesson 182927" },
  { date: "9/6/24", name: "Fixative solution", qty: "1 bottle", id: "VWR 15204-170" },
  { date: "9/10/24", name: "5 mL pipettes", qty: "4 cases", id: "IVF STORE 0030127714-MEA" },
  { date: "9/10/24", name: "Lab tape - rainbow pack", qty: "1 pack", id: "VWR 89097-920" },
  { date: "9/13/24", name: "slides, frosted", qty: "4 boxes", id: "MarketLab Inc ML7646 (choose color)" },
  { date: "9/23/24", name: "Cryo tubes", qty: "5 packs", id: "Origio NUNC368632" },
  { date: "9/23/24", name: "Cryo labels ", qty: "5 packs", id: "Brady M6-75-461" },
  { date: "10/1/24", name: "Plastic pipettes, graduated 1mL", qty: "3 packs", id: "VWR 14670-307" },
  { date: "10/1/24", name: "Plastic pipettes, graduated 3mL", qty: "3 packs", id: "VWR 14670-200" },
  { date: "10/1/24", name: "Kim wipes, small", qty: "1 case", id: "McKesson 188618" },
  { date: "10/1/24", name: "Eye wash bottle", qty: "1 bottle", id: "VWR 56611-124" },
  { date: "10/1/24", name: "15ml conical tube, grey ", qty: "1 case", id: "0030122151-MEA" },
  { date: "10/1/24", name: "roche analyzer tubes", qty: "3 bags", id: "Fischer Scientific 22-171-610" },
  { date: "10/9/24", name: "HemaColor stains", qty: "1 set of 3 ", id: "VWR 48218-567" },
  { date: "10/14/24", name: "5 mL pipettes", qty: "4 cases", id: "IVF STORE 0030127714-MEA" },
  { date: "10/21/24", name: "small snap cap tubes", qty: "1 case", id: "Laboratory Disposables 352054" },
  { date: "11/4/24", name: "Plastic pipettes, graduated 1mL", qty: "3 packs", id: "VWR 14670-307" },
  { date: "11/4/24", name: "Plastic pipettes, graduated 3mL", qty: "3 packs", id: "VWR 14670-200" },
  { date: "11/4/24", name: "15ml conical tube, grey ", qty: "3 cases", id: "IVF Store 0030122151-MEA" },
  { date: "11/4/24", name: "IUI bags", qty: "2 boxes (NOT cases)", id: "Mckesson 890534" },
  { date: "11/8/24", name: "microcentrifuge tubes", qty: "3 bags", id: "VWR 89000-034" },
  { date: "11/8/24", name: "large snap cap tubes", qty: "1 case of 1000", id: "IVF Store 352051" },
  { date: "11/11/24", name: "190 uL pipettes", qty: "2 cases", id: "VWR 15000-462" },
  { date: "11/15/24", name: "5 mL pipettes", qty: "4 cases", id: "IVF STORE 0030127714-MEA" },
  { date: "11/15/24", name: "zip ties", qty: "2 packs", id: "VWR 80080-914" },
  { date: "11/25/24", name: "25 ml pipette", qty: "1 case", id: "VWR 75816-090" },
  { date: "11/25/24", name: "large snap tubes", qty: "1 case", id: "IVF Store 352051" },
  { date: "11/25/24", name: "10 mL pipettes", qty: "1 case", id: "VWR 75816-100" },
  { date: "11/26/24", name: "Cryo tubes", qty: "pack of 450", id: "VWR Origio NUNC368632" },
  { date: "12/2/24", name: "microcentrifuge tubes", qty: "3 bags", id: "VWR 89000-034" },
  { date: "12/9/24", name: "Plastic pipettes, graduated 1mL", qty: "4 packs", id: "VWR 14670-307" },
  { date: "12/9/24", name: "Plastic pipettes, graduated 3mL", qty: "4 packs", id: "VWR 14670-200" },
  { date: "12/9/24", name: "190 uL pipettes", qty: "2 cases", id: "VWR 15000-462" },
  { date: "12/9/24", name: "10 uL pipettes (5-200 uL)", qty: "2 cases", id: "VWR 89215-252" },
  { date: "12/10/24", name: "15 mL conical tubes", qty: "4 cases", id: "IVF Store 0030122151-MEA" },
  { date: "12/13/24", name: "5 mL pipettes", qty: "4 cases", id: "IVF STORE 0030127714-MEA" },
  { date: "12/23/24", name: "cane tabs ", qty: "2 cases of 48", id: "vwr 24270-022" },
  { date: "12/30/24", name: "10 mL pipettes", qty: "1 case", id: "VWR 75816-100" },
  { date: "12/30/24", name: "mineral oil", qty: "2 bottles", id: "McKesson #1235109" },
  { date: "1/3/25", name: "roche analyzer tubes", qty: "3 bags", id: "Fischer Scientific 22-171-610" },
  { date: "12/30/24", name: "Cryo Canes", qty: "2 bags, 72 each", id: "Avantor VWR" },
  { date: "1/15/25", name: "Gluteraldehyde solution", qty: "2 x 1L bottles", id: "Order Placed- Sigma" },
  { date: "1/15/25", name: "Cane tabs, white", qty: "7 x bags of 100", id: "IVF Store ID-Tag-White (Agtech sold out)" },
  { date: "1/15/25", name: "Cryo labels", qty: "5 x boxes", id: "Brady M6-75-461" },
  { date: "1/15/24", name: "Amber 2.0mL tubes", qty: "1 bag", id: "VWR 76004-122" },
  { date: "1/22/25", name: "5mL pipettes", qty: "4 cases", id: "IVF STORE 0030127714-MEA" },
  { date: "1/28/25", name: "15mL conicals ", qty: "4 cases", id: "IVF Store 0030122151-MEA" },
  { date: "2/3/25", name: "Plastic pipettes, graduated 1mL", qty: "4 packs", id: "VWR 14670-307" },
  { date: "2/18/24", name: "Microscope Bulbs", qty: "3 bulbs", id: "IVF 410849" },
  { date: "2/18/25", name: "5 uL tips", qty: "2 cases", id: "VWR 76322-514" },
  { date: "2/18/25", name: "10 uL tips", qty: "2 cases", id: "VWR 89215-252" },
  { date: "2/18/25", name: "Cryo labels ", qty: "5 boxes", id: "Brady M6-75-461" },
  { date: "2/24/25", name: "Plastic pipettes, graduated 3mL", qty: "4 packs", id: "VWR 14670-200" },
  { date: "2/24/25", name: "Analyzer tube caps, blue", qty: "2 cases", id: "Fisher Scientific 22-171-668" },
  { date: "3/3/25", name: "Leucoscreen", qty: "1", id: "vitrolife 15447" },
  { date: "3/3/25", name: "station pads", qty: "300 count", id: "amazon" },
  { date: "3/3/25", name: "5 mL pipettes", qty: "4 cases", id: "IVF STORE 0030127714-MEA" },
  { date: "3/3/25", name: "Microcentrifuge tubes ", qty: "3 bags", id: "VWR 89000-034" },
  { date: "3/3/25", name: "Large snap cap tubes", qty: "1 case, 1000", id: "IVF Store 352051" },
  { date: "3/4/25", name: "Accubeads", qty: "1 box", id: "Fisher Scientific, NC0136046" },
  { date: "3/10/25", name: "Plastic pipettes, graduated 1mL", qty: "4 packs", id: "VWR 14670-307" },
  { date: "3/14/25", name: "cryo ribbons", qty: "2 packs of 3", id: "Brady M61-R4310-3" },
  { date: "4/3/25", name: "5 mL pipettes", qty: "2 cases", id: "IVF STORE 0030127714-MEA" },
  { date: "4/3/25", name: "PBS Solution", qty: "2 bottles, send 1 to EVT", id: "FUJIFILM IRVINE SCIENTIFIC INC 9240500ML" },
  { date: "4/4/25", name: "Kahetics Blunt Needles, 1inch, 18Ga", qty: "1 pack of 50", id: "VWR 37695-022" },
  { date: "4/4/25", name: "Reli Blunt Needles, 1 inch without filter", qty: "1 box of 100", id: "Mckesson 1218455" },
  { date: "4/9/25", name: "10 uL tips ", qty: "2 cases ", id: "VWR 89215-252" },
  { date: "4/23/25", name: "Immersion oil, low viscosity", qty: "6 tubes", id: "VWR 48218-049" },
  { date: "4/23/25", name: "190 uL tips", qty: "2 cases", id: "VWR 15000-462" },
  { date: "4/23/25", name: "pH strips", qty: "1 case", id: "VWR EM1.09543.0007" },
  { date: "4/23/25", name: "15 mL conical tubes", qty: "2 cases", id: "IVF STORE 0030122151-MEA" },
  { date: "4/23/25", name: "small snap cap tubes", qty: "1 bag of 500", id: "IVF STORE 352058-MEA" },
  { date: "4/23/25", name: "Mineral oil", qty: "2 bottles", id: "McKesson 1235109" },
  { date: "4/29/25", name: "Plastic pipettes, graduated 1mL", qty: "4 packs", id: "VWR 14670-307" },
  { date: "4/29/25", name: "Plastic pipettes, graduated 3mL", qty: "4 packs", id: "VWR 14670-200" },
  { date: "4/29/25", name: "Roche analyzer tubes", qty: "3 bags", id: "Fisher Scientific 22-171-610" },
  { date: "5/13/25", name: "Microcentrifuge tubes", qty: "2 bags ", id: "VWR 89000-040" },
  { date: "5/13/25", name: "Mineral oil", qty: "2 bottles", id: "McKesson 1235109" },
  { date: "5/13/25", name: "15 mL conicals ", qty: "2 cases", id: "IVF STORE 0030122151-MEA" },
  { date: "5/13/25", name: "5 mL pipettes", qty: "1 case", id: "VWR 14673-216" },
  { date: "5/13/25", name: "5 mL pipettes ", qty: "3 cases", id: "IVF STORE 0030127714-MEA" },
  { date: "5/21/25", name: "Fixative soltution ", qty: "1 gallon ", id: "VWR 48218-569 (REF 3303)" },
  { date: "5/28/25", name: "Zip ties", qty: "4 packs of 100", id: "VWR  80080-914" },
  { date: "6/2/25", name: "Plastic pipettes, graduated 1mL", qty: "4 packs", id: "VWR 14670-307" },
  { date: "6/11/25", name: "Plastic pipettes, graduated 3mL", qty: "4 packs", id: "VWR 14670-200" }
];

  sendBtn.addEventListener("click", sendMessage);
  userInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") sendMessage();
  });

 async function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;

  // 💥 Remove the intro message if it exists
  const intro = document.getElementById("intro");
  if (intro) intro.remove();

  const userBubble = document.createElement("div");
  userBubble.classList.add("chat-bubble", "user");
  userBubble.textContent = message;
  chatBox.appendChild(userBubble);
  chatBox.scrollTop = chatBox.scrollHeight;


    userInput.value = "";

    const personalityIntro = `You are LISA: the Laboratory Inventory and Supply Chain Assistant. You're smart, witty, and designed to help with lab efficiency. Keep responses concise, less than 2 sentences is ideal. No bullet points or lists. You have this inventory:\n${inventoryData.map(item => `• ${item.date}: ${item.name} (${item.qty}, ${item.id})`).join("\n")}`;

    try {
      const res = await fetch("/ask-lisa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: `${personalityIntro}\nUser: ${message}` }),
      });

      const data = await res.json();
      console.log("Response:", data);

      // Clear typing indicators
      document.querySelectorAll(".typing").forEach(el => el.remove());

      if (data.reply) {
        const lisaBubble = document.createElement("div");
        lisaBubble.classList.add("chat-bubble", "lisa");
        lisaBubble.textContent = ""; // Clear before writing
        chatBox.appendChild(lisaBubble);
        chatBox.scrollTop = chatBox.scrollHeight;

        let i = 0;
        function typeWriter() {
          if (i < data.reply.length) {
            lisaBubble.textContent += data.reply.charAt(i);
            i++;
            setTimeout(typeWriter, 20);
          }
        }
        typeWriter();
      } else {
        const errorBubble = document.createElement("div");
        errorBubble.classList.add("chat-bubble", "lisa");
        errorBubble.textContent = "⚠️ Lisa didn’t reply.";
        chatBox.appendChild(errorBubble);
      }
    } catch (err) {
      console.error("Fetch error:", err);
      const failBubble = document.createElement("div");
      failBubble.classList.add("chat-bubble", "lisa");
      failBubble.textContent = "⚠️ Something went wrong.";
      chatBox.appendChild(failBubble);
    }
  }
});

