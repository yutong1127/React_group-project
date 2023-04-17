const patient = [
  {
    fname: "Laureen",
    lanem: "Lance",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id ipsum lectus. Donec commodo mollis suscipit. Donec ut purus nec nibh pharetra finibus. Nunc vitae suscipit urna. Vivamus efficitur turpis nibh, nec tristique purus tempus eu. Sed finibus sagittis tortor hendrerit suscipit. Vestibulum porta ex quis dui volutpat, ac mollis arcu ornare. Fusce sit amet efficitur odio, eu pharetra augue. Suspendisse ut ullamcorper lorem. Aenean at odio in dui tempor eleifend. Nullam a viverra enim. Aenean nec felis mattis, pharetra magna in, molestie lacus.",
    location: "Auckland",
    responsibleClinicians: '643ca1aef72f49a5254081c1',
    quickAdd: 'blood-test',
    notification: true,
  },
  {
    fname: "Bram",
    lanem: "Gene",
    description:"Aenean ac lorem facilisis, dignissim urna nec, malesuada erat. In consectetur libero at mauris vehicula venenatis. Nam pulvinar mattis posuere. Aenean ligula magna, ultrices nec vestibulum ut, rutrum vehicula nisl. Phasellus egestas placerat sapien eget malesuada. Proin nibh nisi, fermentum id tincidunt eu, iaculis eget erat. Ut sit amet odio sit amet felis tincidunt placerat. Vestibulum ac aliquet mauris. Pellentesque tincidunt vulputate magna et tristique.",
    location: "Wellington",
    responsibleClinicians: '643ca1aef72f49a5254081c3',
    quickAdd: 'radiology',
    notification: true,
  },
  {
    fname: "Cearra",
    lanem: "Buffy",
    description:"Vestibulum commodo interdum molestie. Quisque aliquet, tellus ac iaculis dictum, lectus ante euismod velit, volutpat luctus augue magna sit amet purus. Donec euismod aliquam nisi sit amet volutpat. Sed ut ullamcorper augue, sed interdum lacus. Cras sodales tincidunt lectus, ut suscipit metus cursus non. Etiam ipsum nibh, porta blandit vestibulum sit amet, suscipit ut lorem. Suspendisse potenti. Vestibulum fringilla lorem libero, sed ultricies elit porttitor eu. Quisque non nulla sagittis, varius ex sed, ullamcorper eros. Aliquam dictum iaculis dolor. Proin semper vehicula turpis, id hendrerit ante fermentum id. Donec euismod efficitur ligula, vitae tristique velit egestas sed. Etiam eleifend mauris sed eros fringilla suscipit. Aliquam nunc tellus, efficitur mollis magna sed, tincidunt volutpat odio. Phasellus blandit, nisi in varius tempor, dolor ipsum pharetra est, in volutpat massa felis nec mauris.",
    location: "Queenstown",
    responsibleClinicians: '643ca1aef72f49a5254081c1',
    quickAdd: null,
    notification: true,
  },
  {
    fname: "Laureen",
    lanem: "Lance",
    description:"Quisque eros leo, venenatis eu interdum a, mattis quis turpis. Suspendisse potenti. Nulla ut consectetur urna. In lobortis finibus orci ac condimentum. Aenean ut sem et ex vestibulum scelerisque id eget augue. Cras vulputate feugiat magna quis tincidunt. Curabitur in ante semper, consequat nisl a, imperdiet velit. Etiam feugiat in sapien ut eleifend. Pellentesque dolor lectus, dictum ut pellentesque at, varius interdum mi. Nulla non nisi eget nunc rhoncus fringilla et sit amet dui. Nam lobortis dui eu rutrum aliquam.",
    location: "Christchurch",
    responsibleClinicians: '643ca1aef72f49a5254081c7',
    quickAdd: 'radiology',
    notification: true,
  },
  {
    fname: "Ross",
    lanem: "Carlisle",
    description:"Integer in viverra eros. Integer imperdiet placerat ligula quis aliquam. Sed non accumsan libero. Curabitur ac quam nulla. Vivamus et est nec leo semper ornare in et purus. Phasellus arcu tortor, ullamcorper quis ultrices quis, gravida sit amet magna. Curabitur enim turpis, tincidunt vel tortor tincidunt, bibendum venenatis elit. Nulla et nibh urna.",
    location: "Wellington",
    responsibleClinicians: '643ca1aef72f49a5254081c5',
    quickAdd: 'radiology',
    notification: true,
  },
  {
    fname: "Ferdie",
    lanem: "Kurt",
    description:"Pellentesque vel aliquet mi, vel gravida tortor. Aenean sit amet velit lacinia, convallis erat vestibulum, ullamcorper elit. Fusce ullamcorper porta blandit. Nulla facilisi. Etiam porttitor justo vitae eros pretium aliquam. Donec sed libero vestibulum, laoreet ligula ac, consectetur felis. Vivamus et facilisis odio, quis faucibus purus. Nam eget neque vel massa pulvinar scelerisque ut id urna. In hac habitasse platea dictumst. Donec vitae turpis et risus condimentum luctus eu a arcu. Duis dignissim mattis ultrices.",
    location: "Auckland",
    responsibleClinicians: '643ca1aef72f49a5254081c5',
    quickAdd: 'blood-test',
    notification: true,
  }
];

const user = [
  {
    fname: "Jant",
    lname: "Chan",
    phone: "0225881753",
    email: "jant.chan@aucklanduni.ac.nz",
    password: "abc123",
    isSupervisor: false,
    isAdmin: false,
    role: "",
    avatar: "",
  },
  {
    fname: "Zhiyan",
    lname: "Hu",
    phone: "0225478594",
    email: "zhiyan.hu@aucklanduni.ac.nz",
    password: "abc123",
    isSupervisor: false,
    isAdmin: false,
    role: "",
    avatar: "",
  },
  {
    fname: "Jiewen",
    lname: "Li",
    phone: "0229584736",
    email: "jiewen.li@aucklanduni.ac.nz",
    password: "abc123",
    isSupervisor: false,
    isAdmin: true,
    role: "",
    avatar: "",
  },
  {
    fname: "Olivia",
    lname: "Li",
    phone: "0228561923",
    email: "olivia.li@aucklanduni.ac.nz",
    password: "abc123",
    isSupervisor: false,
    isAdmin: false,
    role: "",
    avatar: "",
  }, 
  {
    fname: "Jingyi",
    lname: "You",
    phone: "0229384712",
    email: "jingyi.you@aucklanduni.ac.nz",
    password: "abc123",
    isSupervisor: false,
    isAdmin: false,
    role: "",
    avatar: "",
  }, 
  {
    fname: "Kevin",
    lname: "Zheng",
    phone: "0228471234",
    email: "kevin.zheng@aucklanduni.ac.nz",
    password: "abc123",
    isSupervisor: true,
    isAdmin: false,
    role: "",
    avatar: "",
  }
]

const team = [
  {
    id: 1,
    name: "Pink Panda",
    patients: ["643ca27a0293d379cd4e4f03", "643ca27a0293d379cd4e4f05", "643ca46667ab9e4b039eb90f"],
    clinicians: ["643ca1aef72f49a5254081c1", "643ca1aef72f49a5254081c3"],
    supervisors: ["643ca27a0293d379cd4e4f19"]
  }, 
  {
    id: 2,
    name: "Red Panda",
    patients: ["643ca46667ab9e4b039eb911", "643ca46667ab9e4b039eb913", "643ca46667ab9e4b039eb915"],
    clinicians: ["643ca1aef72f49a5254081c5", "643ca1aef72f49a5254081c7"],
    supervisors: ["643ca1aef72f49a5254081c9"]
  }
]
export { patient, user,team };
