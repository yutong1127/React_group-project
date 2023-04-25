const BarChartData = [
    {
      "country": "Monday",
      "Bloods": 12,
      "BloodsColor": "hsl(348, 70%, 50%)",
      "Discharge": 2,
      "DischargeColor": "hsl(325, 70%, 50%)",
      "reviews": 3,
      "reviewsColor": "hsl(22, 70%, 50%)"
    },
    {
      "country": "Tuesday",
      "Bloods": 8,
      "BloodsColor": "hsl(320, 70%, 50%)",
      "Discharge": 3,
      "DischargeColor": "hsl(104, 70%, 50%)",
      "reviews": 15,
      "reviewsColor": "hsl(68, 70%, 50%)"
    },
    {
      "country": "Wednesday",
      "Bloods": 22,
      "BloodsColor": "hsl(78, 70%, 50%)",
      "Discharge": 2,
      "DischargeColor": "hsl(11, 70%, 50%)",
      "reviews": 4,
      "reviewsColor": "hsl(319, 70%, 50%)"
    },
    {
      "country": "Thursday",
      "Bloods": 4,
      "BloodsColor": "hsl(70, 70%, 50%)",
      "Discharge": 21,
      "DischargeColor": "hsl(27, 70%, 50%)",
      "reviews": 5,
      "reviewsColor": "hsl(266, 70%, 50%)"
    },
    {
      "country": "Friday",
      "Bloods": 22,
      "BloodsColor": "hsl(141, 70%, 50%)",
      "Discharge": 3,
      "DischargeColor": "hsl(269, 70%, 50%)",
      "reviews": 7,
      "reviewsColor": "hsl(23, 70%, 50%)"
    },
    {
      "country": "Saturday",
      "Bloods": 8,
      "BloodsColor": "hsl(127, 70%, 50%)",
      "Discharge": 11,
      "DischargeColor": "hsl(332, 70%, 50%)",
      "reviews": 2,
      "reviewsColor": "hsl(105, 70%, 50%)"
    },
    {
      "country": "Sunday",
      "Bloods": 1,
      "BloodsColor": "hsl(207, 70%, 50%)",
      "Discharge": 1,
      "DischargeColor": "hsl(71, 70%, 50%)",
      "reviews": 0,
      "reviewsColor": "hsl(186, 70%, 50%)"
    }
  ]
 const PieChartData = [
    {
      "id": "Dr. Jant Chan	",
      "label": "Dr. Jant Chan",
      "value": 47,
      "color": "hsl(124, 70%, 50%)"
    },
    {
      "id": "Dr. Zhiyan Hu	",
      "label": "Dr. Zhiyan Hu	",
      "value": 31,
      "color": "hsl(180, 70%, 50%)"
    },
    {
      "id": "Dr. Jiewen Li	",
      "label": "Dr. Jiewen Li	",
      "value": 25,
      "color": "hsl(46, 70%, 50%)"
    },
    {
      "id": "Dr. Olivia Li	",
      "label": "Dr. Olivia Li	",
      "value": 37,
      "color": "hsl(92, 70%, 50%)"
    },
    {
      "id": "Dr. Jingyi You	",
      "label": "Dr. Jingyi You",
      "value": 26,
      "color": "hsl(153, 70%, 50%)"
    },
    {
      "id": "Dr. Kevin Zheng",
      "label": "Dr. Kevin Zheng",
      "value": 20,
      "color": "hsl(153, 70%, 50%)"
    }
  ]
  const patients = [
    {
      fname: "Laureen",
      lname: "Lance",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id ipsum lectus. Donec commodo mollis suscipit. Donec ut purus nec nibh pharetra finibus. Nunc vitae suscipit urna. Vivamus efficitur turpis nibh, nec tristique purus tempus eu. Sed finibus sagittis tortor hendrerit suscipit. Vestibulum porta ex quis dui volutpat, ac mollis arcu ornare. Fusce sit amet efficitur odio, eu pharetra augue. Suspendisse ut ullamcorper lorem. Aenean at odio in dui tempor eleifend. Nullam a viverra enim. Aenean nec felis mattis, pharetra magna in, molestie lacus.",
      location: "Auckland",
      responsibleClinicians: '643ca1aef72f49a5254081c1',
      quickAdd: 'blood-test',
      notification: true,
    },
    {
      fname: "Bram",
      lname: "Gene",
      description:"Aenean ac lorem facilisis, dignissim urna nec, malesuada erat. In consectetur libero at mauris vehicula venenatis. Nam pulvinar mattis posuere. Aenean ligula magna, ultrices nec vestibulum ut, rutrum vehicula nisl. Phasellus egestas placerat sapien eget malesuada. Proin nibh nisi, fermentum id tincidunt eu, iaculis eget erat. Ut sit amet odio sit amet felis tincidunt placerat. Vestibulum ac aliquet mauris. Pellentesque tincidunt vulputate magna et tristique.",
      location: "Wellington",
      responsibleClinicians: '643ca1aef72f49a5254081c3',
      quickAdd: 'radiology',
      notification: true,
    },
    {
      fname: "Cearra",
      lname: "Buffy",
      description:"Vestibulum commodo interdum molestie. Quisque aliquet, tellus ac iaculis dictum, lectus ante euismod velit, volutpat luctus augue magna sit amet purus. Donec euismod aliquam nisi sit amet volutpat. Sed ut ullamcorper augue, sed interdum lacus. Cras sodales tincidunt lectus, ut suscipit metus cursus non. Etiam ipsum nibh, porta blandit vestibulum sit amet, suscipit ut lorem. Suspendisse potenti. Vestibulum fringilla lorem libero, sed ultricies elit porttitor eu. Quisque non nulla sagittis, varius ex sed, ullamcorper eros. Aliquam dictum iaculis dolor. Proin semper vehicula turpis, id hendrerit ante fermentum id. Donec euismod efficitur ligula, vitae tristique velit egestas sed. Etiam eleifend mauris sed eros fringilla suscipit. Aliquam nunc tellus, efficitur mollis magna sed, tincidunt volutpat odio. Phasellus blandit, nisi in varius tempor, dolor ipsum pharetra est, in volutpat massa felis nec mauris.",
      location: "Queenstown",
      responsibleClinicians: '643ca1aef72f49a5254081c1',
      quickAdd: null,
      notification: true,
    },
    {
      fname: "Laureen",
      lname: "Lance",
      description:"Quisque eros leo, venenatis eu interdum a, mattis quis turpis. Suspendisse potenti. Nulla ut consectetur urna. In lobortis finibus orci ac condimentum. Aenean ut sem et ex vestibulum scelerisque id eget augue. Cras vulputate feugiat magna quis tincidunt. Curabitur in ante semper, consequat nisl a, imperdiet velit. Etiam feugiat in sapien ut eleifend. Pellentesque dolor lectus, dictum ut pellentesque at, varius interdum mi. Nulla non nisi eget nunc rhoncus fringilla et sit amet dui. Nam lobortis dui eu rutrum aliquam.",
      location: "Christchurch",
      responsibleClinicians: '643ca1aef72f49a5254081c7',
      quickAdd: 'radiology',
      notification: true,
    },
    {
      fname: "Ross",
      lname: "Carlisle",
      description:"Integer in viverra eros. Integer imperdiet placerat ligula quis aliquam. Sed non accumsan libero. Curabitur ac quam nulla. Vivamus et est nec leo semper ornare in et purus. Phasellus arcu tortor, ullamcorper quis ultrices quis, gravida sit amet magna. Curabitur enim turpis, tincidunt vel tortor tincidunt, bibendum venenatis elit. Nulla et nibh urna.",
      location: "Wellington",
      responsibleClinicians: '643ca1aef72f49a5254081c5',
      quickAdd: 'radiology',
      notification: true,
    },
    {
      fname: "Ferdie",
      lname: "Kurt",
      description:"Pellentesque vel aliquet mi, vel gravida tortor. Aenean sit amet velit lacinia, convallis erat vestibulum, ullamcorper elit. Fusce ullamcorper porta blandit. Nulla facilisi. Etiam porttitor justo vitae eros pretium aliquam. Donec sed libero vestibulum, laoreet ligula ac, consectetur felis. Vivamus et facilisis odio, quis faucibus purus. Nam eget neque vel massa pulvinar scelerisque ut id urna. In hac habitasse platea dictumst. Donec vitae turpis et risus condimentum luctus eu a arcu. Duis dignissim mattis ultrices.",
      location: "Auckland",
      responsibleClinicians: '643ca1aef72f49a5254081c5',
      quickAdd: 'blood-test',
      notification: true,
    }
  ];
  
  const users = [
    {
      fname: "Jant",
      lname: "Chan",
      phone: "0225881753",
      email: "jant.chan@aucklanduni.ac.nz",
      password: "abc123",
      isSupervisor: false,
      isAdmin: false,
      role: "Paediatrics",
      avatar: "DoctorAvatar1",
    },
    {
      fname: "Zhiyan",
      lname: "Hu",
      phone: "0225478594",
      email: "zhiyan.hu@aucklanduni.ac.nz",
      password: "abc123",
      isSupervisor: false,
      isAdmin: false,
      role: "Surgery",
      avatar: "DoctorAvatar2",
    },
    {
      fname: "Jiewen",
      lname: "Li",
      phone: "0229584736",
      email: "jiewen.li@aucklanduni.ac.nz",
      password: "abc123",
      isSupervisor: false,
      isAdmin: true,
      role: "Surgery",
      avatar: "DoctorAvatar3",
    },
    {
      fname: "Olivia",
      lname: "Li",
      phone: "0228561923",
      email: "olivia.li@aucklanduni.ac.nz",
      password: "abc123",
      isSupervisor: false,
      isAdmin: false,
      role: "Clinical radiology",
      avatar: "DoctorAvatar4",
    }, 
    {
      fname: "Jingyi",
      lname: "You",
      phone: "0229384712",
      email: "jingyi.you@aucklanduni.ac.nz",
      password: "abc123",
      isSupervisor: false,
      isAdmin: false,
      role: "Clinical radiology",
      avatar: "DoctorAvatar5",
    }, 
    {
      fname: "Kevin",
      lname: "Zheng",
      phone: "0228471234",
      email: "kevin.zheng@aucklanduni.ac.nz",
      password: "abc123",
      isSupervisor: true,
      isAdmin: false,
      role: "Psychiatry",
      avatar: "DoctorAvatar6",
    }
  ]
  
  const team = [
    {
      id: 1,
      name: "Pink Panda",
      patientss: ["643ca27a0293d379cd4e4f03", "643ca27a0293d379cd4e4f05", "643ca46667ab9e4b039eb90f"],
      clinicians: ["643ca1aef72f49a5254081c1", "643ca1aef72f49a5254081c3"],
      supervisors: ["643ca27a0293d379cd4e4f19"]
    }, 
    {
      id: 2,
      name: "Red Panda",
      patientss: ["643ca46667ab9e4b039eb911", "643ca46667ab9e4b039eb913", "643ca46667ab9e4b039eb915"],
      clinicians: ["643ca1aef72f49a5254081c5", "643ca1aef72f49a5254081c7"],
      supervisors: ["643ca1aef72f49a5254081c9"]
    }
  ]
  export { BarChartData, PieChartData, patients, users,team };