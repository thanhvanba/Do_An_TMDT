﻿using Do_an_TMDT.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Do_an_TMDT.ViewModels
{
    public class itemcart
    {
        public ChiTietGioHang CT_GH { get; set; }
        public MatHang SanPham { get; set; }
        public List<MatHangAnh> MatHangAnhs { get; set; }
        public int tong { get; set; }
    }
}
