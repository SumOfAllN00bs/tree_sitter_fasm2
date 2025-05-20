// swift-tools-version:5.3

import Foundation
import PackageDescription

var sources = ["src/parser.c"]
if FileManager.default.fileExists(atPath: "src/scanner.c") {
    sources.append("src/scanner.c")
}

let package = Package(
    name: "TreeSitterTreeSitterFasm2",
    products: [
        .library(name: "TreeSitterTreeSitterFasm2", targets: ["TreeSitterTreeSitterFasm2"]),
    ],
    dependencies: [
        .package(url: "https://github.com/tree-sitter/swift-tree-sitter", from: "0.8.0"),
    ],
    targets: [
        .target(
            name: "TreeSitterTreeSitterFasm2",
            dependencies: [],
            path: ".",
            sources: sources,
            resources: [
                .copy("queries")
            ],
            publicHeadersPath: "bindings/swift",
            cSettings: [.headerSearchPath("src")]
        ),
        .testTarget(
            name: "TreeSitterTreeSitterFasm2Tests",
            dependencies: [
                "SwiftTreeSitter",
                "TreeSitterTreeSitterFasm2",
            ],
            path: "bindings/swift/TreeSitterTreeSitterFasm2Tests"
        )
    ],
    cLanguageStandard: .c11
)
