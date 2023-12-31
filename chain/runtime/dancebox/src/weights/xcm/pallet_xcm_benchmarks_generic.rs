// Copyright (C) Moondance Labs Ltd.
// This file is part of Tanssi.

// Tanssi is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Tanssi is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Tanssi.  If not, see <http://www.gnu.org/licenses/>


//! Autogenerated weights for pallet_xcm_benchmarks::generic
//!
//! THIS FILE WAS AUTO-GENERATED USING THE SUBSTRATE BENCHMARK CLI VERSION 4.0.0-dev
//! DATE: 2023-09-06, STEPS: `50`, REPEAT: `20`, LOW RANGE: `[]`, HIGH RANGE: `[]`
//! WORST CASE MAP SIZE: `1000000`
//! HOSTNAME: `COV0768`, CPU: `AMD Ryzen 9 7950X 16-Core Processor`
//! EXECUTION: Some(Wasm), WASM-EXECUTION: Compiled, CHAIN: None, DB CACHE: 1024

// Executed Command:
// ./target/release/tanssi-node
// benchmark
// pallet
// --steps=50
// --repeat=20
// --pallet=pallet_xcm_benchmarks::generic
// --extrinsic=*
// --execution=wasm
// --wasm-execution=compiled
// --output=./runtime/dancebox/src/weights/pallet_xcm_benchmarks.rs
// --template=./benchmarking/frame-weight-template.hbs

#![cfg_attr(rustfmt, rustfmt_skip)]
#![allow(unused_parens)]
#![allow(unused_imports)]

use frame_support::{traits::Get, weights::{Weight, constants::RocksDbWeight}};
use sp_std::marker::PhantomData;

/// Weight functions needed for pallet_xcm_benchmarks::generic.
pub trait WeightInfo {
	fn report_holding() -> Weight;
	fn buy_execution() -> Weight;
	fn query_response() -> Weight;
	fn transact() -> Weight;
	fn refund_surplus() -> Weight;
	fn set_error_handler() -> Weight;
	fn set_appendix() -> Weight;
	fn clear_error() -> Weight;
	fn descend_origin() -> Weight;
	fn clear_origin() -> Weight;
	fn report_error() -> Weight;
	fn claim_asset() -> Weight;
	fn trap() -> Weight;
	fn subscribe_version() -> Weight;
	fn unsubscribe_version() -> Weight;
	fn initiate_reserve_withdraw() -> Weight;
	fn burn_asset() -> Weight;
	fn expect_asset() -> Weight;
	fn expect_origin() -> Weight;
	fn expect_error() -> Weight;
	fn expect_transact_status() -> Weight;
	fn query_pallet() -> Weight;
	fn expect_pallet() -> Weight;
	fn report_transact_status() -> Weight;
	fn clear_transact_status() -> Weight;
	fn set_topic() -> Weight;
	fn clear_topic() -> Weight;
	fn set_fees_mode() -> Weight;
	fn unpaid_execution() -> Weight;
}

/// Weights for pallet_xcm_benchmarks::generic using the Substrate node and recommended hardware.
pub struct SubstrateWeight<T>(PhantomData<T>);
impl<T: frame_system::Config> WeightInfo for SubstrateWeight<T> {
	/// Storage: PolkadotXcm SupportedVersion (r:1 w:0)
	/// Proof Skipped: PolkadotXcm SupportedVersion (max_values: None, max_size: None, mode: Measured)
	/// Storage: PolkadotXcm VersionDiscoveryQueue (r:1 w:1)
	/// Proof Skipped: PolkadotXcm VersionDiscoveryQueue (max_values: Some(1), max_size: None, mode: Measured)
	/// Storage: PolkadotXcm SafeXcmVersion (r:1 w:0)
	/// Proof Skipped: PolkadotXcm SafeXcmVersion (max_values: Some(1), max_size: None, mode: Measured)
	/// Storage: ParachainSystem HostConfiguration (r:1 w:0)
	/// Proof Skipped: ParachainSystem HostConfiguration (max_values: Some(1), max_size: None, mode: Measured)
	/// Storage: ParachainSystem PendingUpwardMessages (r:1 w:1)
	/// Proof Skipped: ParachainSystem PendingUpwardMessages (max_values: Some(1), max_size: None, mode: Measured)
	fn report_holding() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `145`
		//  Estimated: `3610`
		// Minimum execution time: 25_280_000 picoseconds.
		Weight::from_parts(25_700_000, 3610)
			.saturating_add(T::DbWeight::get().reads(5_u64))
			.saturating_add(T::DbWeight::get().writes(2_u64))
	}
	fn buy_execution() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 2_550_000 picoseconds.
		Weight::from_parts(2_640_000, 0)
	}
	/// Storage: PolkadotXcm Queries (r:1 w:0)
	/// Proof Skipped: PolkadotXcm Queries (max_values: None, max_size: None, mode: Measured)
	fn query_response() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `103`
		//  Estimated: `3568`
		// Minimum execution time: 9_680_000 picoseconds.
		Weight::from_parts(9_860_000, 3568)
			.saturating_add(T::DbWeight::get().reads(1_u64))
	}
	/// Storage: MaintenanceMode MaintenanceMode (r:1 w:0)
	/// Proof Skipped: MaintenanceMode MaintenanceMode (max_values: Some(1), max_size: None, mode: Measured)
	fn transact() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `76`
		//  Estimated: `1561`
		// Minimum execution time: 11_380_000 picoseconds.
		Weight::from_parts(11_750_000, 1561)
			.saturating_add(T::DbWeight::get().reads(1_u64))
	}
	fn refund_surplus() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 2_610_000 picoseconds.
		Weight::from_parts(2_680_000, 0)
	}
	fn set_error_handler() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 2_410_000 picoseconds.
		Weight::from_parts(2_490_000, 0)
	}
	fn set_appendix() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 2_410_000 picoseconds.
		Weight::from_parts(2_510_000, 0)
	}
	fn clear_error() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 2_390_000 picoseconds.
		Weight::from_parts(2_520_000, 0)
	}
	fn descend_origin() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 2_840_000 picoseconds.
		Weight::from_parts(2_910_000, 0)
	}
	fn clear_origin() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 2_420_000 picoseconds.
		Weight::from_parts(2_490_000, 0)
	}
	/// Storage: PolkadotXcm SupportedVersion (r:1 w:0)
	/// Proof Skipped: PolkadotXcm SupportedVersion (max_values: None, max_size: None, mode: Measured)
	/// Storage: PolkadotXcm VersionDiscoveryQueue (r:1 w:1)
	/// Proof Skipped: PolkadotXcm VersionDiscoveryQueue (max_values: Some(1), max_size: None, mode: Measured)
	/// Storage: PolkadotXcm SafeXcmVersion (r:1 w:0)
	/// Proof Skipped: PolkadotXcm SafeXcmVersion (max_values: Some(1), max_size: None, mode: Measured)
	/// Storage: ParachainSystem HostConfiguration (r:1 w:0)
	/// Proof Skipped: ParachainSystem HostConfiguration (max_values: Some(1), max_size: None, mode: Measured)
	/// Storage: ParachainSystem PendingUpwardMessages (r:1 w:1)
	/// Proof Skipped: ParachainSystem PendingUpwardMessages (max_values: Some(1), max_size: None, mode: Measured)
	fn report_error() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `145`
		//  Estimated: `3610`
		// Minimum execution time: 20_289_000 picoseconds.
		Weight::from_parts(20_590_000, 3610)
			.saturating_add(T::DbWeight::get().reads(5_u64))
			.saturating_add(T::DbWeight::get().writes(2_u64))
	}
	/// Storage: PolkadotXcm AssetTraps (r:1 w:1)
	/// Proof Skipped: PolkadotXcm AssetTraps (max_values: None, max_size: None, mode: Measured)
	fn claim_asset() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `160`
		//  Estimated: `3625`
		// Minimum execution time: 13_400_000 picoseconds.
		Weight::from_parts(13_640_000, 3625)
			.saturating_add(T::DbWeight::get().reads(1_u64))
			.saturating_add(T::DbWeight::get().writes(1_u64))
	}
	fn trap() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 2_420_000 picoseconds.
		Weight::from_parts(2_520_000, 0)
	}
	/// Storage: PolkadotXcm VersionNotifyTargets (r:1 w:1)
	/// Proof Skipped: PolkadotXcm VersionNotifyTargets (max_values: None, max_size: None, mode: Measured)
	/// Storage: PolkadotXcm SupportedVersion (r:1 w:0)
	/// Proof Skipped: PolkadotXcm SupportedVersion (max_values: None, max_size: None, mode: Measured)
	/// Storage: PolkadotXcm VersionDiscoveryQueue (r:1 w:1)
	/// Proof Skipped: PolkadotXcm VersionDiscoveryQueue (max_values: Some(1), max_size: None, mode: Measured)
	/// Storage: PolkadotXcm SafeXcmVersion (r:1 w:0)
	/// Proof Skipped: PolkadotXcm SafeXcmVersion (max_values: Some(1), max_size: None, mode: Measured)
	/// Storage: ParachainSystem HostConfiguration (r:1 w:0)
	/// Proof Skipped: ParachainSystem HostConfiguration (max_values: Some(1), max_size: None, mode: Measured)
	/// Storage: ParachainSystem PendingUpwardMessages (r:1 w:1)
	/// Proof Skipped: ParachainSystem PendingUpwardMessages (max_values: Some(1), max_size: None, mode: Measured)
	fn subscribe_version() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `145`
		//  Estimated: `3610`
		// Minimum execution time: 24_800_000 picoseconds.
		Weight::from_parts(25_270_000, 3610)
			.saturating_add(T::DbWeight::get().reads(6_u64))
			.saturating_add(T::DbWeight::get().writes(3_u64))
	}
	/// Storage: PolkadotXcm VersionNotifyTargets (r:0 w:1)
	/// Proof Skipped: PolkadotXcm VersionNotifyTargets (max_values: None, max_size: None, mode: Measured)
	fn unsubscribe_version() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 4_250_000 picoseconds.
		Weight::from_parts(4_390_000, 0)
			.saturating_add(T::DbWeight::get().writes(1_u64))
	}
	/// Storage: PolkadotXcm SupportedVersion (r:1 w:0)
	/// Proof Skipped: PolkadotXcm SupportedVersion (max_values: None, max_size: None, mode: Measured)
	/// Storage: PolkadotXcm VersionDiscoveryQueue (r:1 w:1)
	/// Proof Skipped: PolkadotXcm VersionDiscoveryQueue (max_values: Some(1), max_size: None, mode: Measured)
	/// Storage: PolkadotXcm SafeXcmVersion (r:1 w:0)
	/// Proof Skipped: PolkadotXcm SafeXcmVersion (max_values: Some(1), max_size: None, mode: Measured)
	/// Storage: ParachainSystem HostConfiguration (r:1 w:0)
	/// Proof Skipped: ParachainSystem HostConfiguration (max_values: Some(1), max_size: None, mode: Measured)
	/// Storage: ParachainSystem PendingUpwardMessages (r:1 w:1)
	/// Proof Skipped: ParachainSystem PendingUpwardMessages (max_values: Some(1), max_size: None, mode: Measured)
	fn initiate_reserve_withdraw() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `145`
		//  Estimated: `3610`
		// Minimum execution time: 22_600_000 picoseconds.
		Weight::from_parts(23_030_000, 3610)
			.saturating_add(T::DbWeight::get().reads(5_u64))
			.saturating_add(T::DbWeight::get().writes(2_u64))
	}
	fn burn_asset() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 3_140_000 picoseconds.
		Weight::from_parts(3_340_000, 0)
	}
	fn expect_asset() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 2_540_000 picoseconds.
		Weight::from_parts(2_620_000, 0)
	}
	fn expect_origin() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 2_470_000 picoseconds.
		Weight::from_parts(2_530_000, 0)
	}
	fn expect_error() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 2_400_000 picoseconds.
		Weight::from_parts(2_450_000, 0)
	}
	fn expect_transact_status() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 2_550_000 picoseconds.
		Weight::from_parts(2_620_000, 0)
	}
	/// Storage: PolkadotXcm SupportedVersion (r:1 w:0)
	/// Proof Skipped: PolkadotXcm SupportedVersion (max_values: None, max_size: None, mode: Measured)
	/// Storage: PolkadotXcm VersionDiscoveryQueue (r:1 w:1)
	/// Proof Skipped: PolkadotXcm VersionDiscoveryQueue (max_values: Some(1), max_size: None, mode: Measured)
	/// Storage: PolkadotXcm SafeXcmVersion (r:1 w:0)
	/// Proof Skipped: PolkadotXcm SafeXcmVersion (max_values: Some(1), max_size: None, mode: Measured)
	/// Storage: ParachainSystem HostConfiguration (r:1 w:0)
	/// Proof Skipped: ParachainSystem HostConfiguration (max_values: Some(1), max_size: None, mode: Measured)
	/// Storage: ParachainSystem PendingUpwardMessages (r:1 w:1)
	/// Proof Skipped: ParachainSystem PendingUpwardMessages (max_values: Some(1), max_size: None, mode: Measured)
	fn query_pallet() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `145`
		//  Estimated: `3610`
		// Minimum execution time: 24_889_000 picoseconds.
		Weight::from_parts(25_359_000, 3610)
			.saturating_add(T::DbWeight::get().reads(5_u64))
			.saturating_add(T::DbWeight::get().writes(2_u64))
	}
	fn expect_pallet() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 6_100_000 picoseconds.
		Weight::from_parts(6_310_000, 0)
	}
	/// Storage: PolkadotXcm SupportedVersion (r:1 w:0)
	/// Proof Skipped: PolkadotXcm SupportedVersion (max_values: None, max_size: None, mode: Measured)
	/// Storage: PolkadotXcm VersionDiscoveryQueue (r:1 w:1)
	/// Proof Skipped: PolkadotXcm VersionDiscoveryQueue (max_values: Some(1), max_size: None, mode: Measured)
	/// Storage: PolkadotXcm SafeXcmVersion (r:1 w:0)
	/// Proof Skipped: PolkadotXcm SafeXcmVersion (max_values: Some(1), max_size: None, mode: Measured)
	/// Storage: ParachainSystem HostConfiguration (r:1 w:0)
	/// Proof Skipped: ParachainSystem HostConfiguration (max_values: Some(1), max_size: None, mode: Measured)
	/// Storage: ParachainSystem PendingUpwardMessages (r:1 w:1)
	/// Proof Skipped: ParachainSystem PendingUpwardMessages (max_values: Some(1), max_size: None, mode: Measured)
	fn report_transact_status() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `145`
		//  Estimated: `3610`
		// Minimum execution time: 20_170_000 picoseconds.
		Weight::from_parts(20_620_000, 3610)
			.saturating_add(T::DbWeight::get().reads(5_u64))
			.saturating_add(T::DbWeight::get().writes(2_u64))
	}
	fn clear_transact_status() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 2_440_000 picoseconds.
		Weight::from_parts(2_520_000, 0)
	}
	fn set_topic() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 2_400_000 picoseconds.
		Weight::from_parts(2_480_000, 0)
	}
	fn clear_topic() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 2_380_000 picoseconds.
		Weight::from_parts(2_470_000, 0)
	}
	fn set_fees_mode() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 2_340_000 picoseconds.
		Weight::from_parts(2_420_000, 0)
	}
	fn unpaid_execution() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 2_420_000 picoseconds.
		Weight::from_parts(2_520_000, 0)
	}
}

// For backwards compatibility and tests
impl WeightInfo for () {
	/// Storage: PolkadotXcm SupportedVersion (r:1 w:0)
	/// Proof Skipped: PolkadotXcm SupportedVersion (max_values: None, max_size: None, mode: Measured)
	/// Storage: PolkadotXcm VersionDiscoveryQueue (r:1 w:1)
	/// Proof Skipped: PolkadotXcm VersionDiscoveryQueue (max_values: Some(1), max_size: None, mode: Measured)
	/// Storage: PolkadotXcm SafeXcmVersion (r:1 w:0)
	/// Proof Skipped: PolkadotXcm SafeXcmVersion (max_values: Some(1), max_size: None, mode: Measured)
	/// Storage: ParachainSystem HostConfiguration (r:1 w:0)
	/// Proof Skipped: ParachainSystem HostConfiguration (max_values: Some(1), max_size: None, mode: Measured)
	/// Storage: ParachainSystem PendingUpwardMessages (r:1 w:1)
	/// Proof Skipped: ParachainSystem PendingUpwardMessages (max_values: Some(1), max_size: None, mode: Measured)
	fn report_holding() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `145`
		//  Estimated: `3610`
		// Minimum execution time: 25_280_000 picoseconds.
		Weight::from_parts(25_700_000, 3610)
			.saturating_add(RocksDbWeight::get().reads(5_u64))
			.saturating_add(RocksDbWeight::get().writes(2_u64))
	}
	fn buy_execution() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 2_550_000 picoseconds.
		Weight::from_parts(2_640_000, 0)
	}
	/// Storage: PolkadotXcm Queries (r:1 w:0)
	/// Proof Skipped: PolkadotXcm Queries (max_values: None, max_size: None, mode: Measured)
	fn query_response() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `103`
		//  Estimated: `3568`
		// Minimum execution time: 9_680_000 picoseconds.
		Weight::from_parts(9_860_000, 3568)
			.saturating_add(RocksDbWeight::get().reads(1_u64))
	}
	/// Storage: MaintenanceMode MaintenanceMode (r:1 w:0)
	/// Proof Skipped: MaintenanceMode MaintenanceMode (max_values: Some(1), max_size: None, mode: Measured)
	fn transact() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `76`
		//  Estimated: `1561`
		// Minimum execution time: 11_380_000 picoseconds.
		Weight::from_parts(11_750_000, 1561)
			.saturating_add(RocksDbWeight::get().reads(1_u64))
	}
	fn refund_surplus() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 2_610_000 picoseconds.
		Weight::from_parts(2_680_000, 0)
	}
	fn set_error_handler() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 2_410_000 picoseconds.
		Weight::from_parts(2_490_000, 0)
	}
	fn set_appendix() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 2_410_000 picoseconds.
		Weight::from_parts(2_510_000, 0)
	}
	fn clear_error() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 2_390_000 picoseconds.
		Weight::from_parts(2_520_000, 0)
	}
	fn descend_origin() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 2_840_000 picoseconds.
		Weight::from_parts(2_910_000, 0)
	}
	fn clear_origin() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 2_420_000 picoseconds.
		Weight::from_parts(2_490_000, 0)
	}
	/// Storage: PolkadotXcm SupportedVersion (r:1 w:0)
	/// Proof Skipped: PolkadotXcm SupportedVersion (max_values: None, max_size: None, mode: Measured)
	/// Storage: PolkadotXcm VersionDiscoveryQueue (r:1 w:1)
	/// Proof Skipped: PolkadotXcm VersionDiscoveryQueue (max_values: Some(1), max_size: None, mode: Measured)
	/// Storage: PolkadotXcm SafeXcmVersion (r:1 w:0)
	/// Proof Skipped: PolkadotXcm SafeXcmVersion (max_values: Some(1), max_size: None, mode: Measured)
	/// Storage: ParachainSystem HostConfiguration (r:1 w:0)
	/// Proof Skipped: ParachainSystem HostConfiguration (max_values: Some(1), max_size: None, mode: Measured)
	/// Storage: ParachainSystem PendingUpwardMessages (r:1 w:1)
	/// Proof Skipped: ParachainSystem PendingUpwardMessages (max_values: Some(1), max_size: None, mode: Measured)
	fn report_error() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `145`
		//  Estimated: `3610`
		// Minimum execution time: 20_289_000 picoseconds.
		Weight::from_parts(20_590_000, 3610)
			.saturating_add(RocksDbWeight::get().reads(5_u64))
			.saturating_add(RocksDbWeight::get().writes(2_u64))
	}
	/// Storage: PolkadotXcm AssetTraps (r:1 w:1)
	/// Proof Skipped: PolkadotXcm AssetTraps (max_values: None, max_size: None, mode: Measured)
	fn claim_asset() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `160`
		//  Estimated: `3625`
		// Minimum execution time: 13_400_000 picoseconds.
		Weight::from_parts(13_640_000, 3625)
			.saturating_add(RocksDbWeight::get().reads(1_u64))
			.saturating_add(RocksDbWeight::get().writes(1_u64))
	}
	fn trap() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 2_420_000 picoseconds.
		Weight::from_parts(2_520_000, 0)
	}
	/// Storage: PolkadotXcm VersionNotifyTargets (r:1 w:1)
	/// Proof Skipped: PolkadotXcm VersionNotifyTargets (max_values: None, max_size: None, mode: Measured)
	/// Storage: PolkadotXcm SupportedVersion (r:1 w:0)
	/// Proof Skipped: PolkadotXcm SupportedVersion (max_values: None, max_size: None, mode: Measured)
	/// Storage: PolkadotXcm VersionDiscoveryQueue (r:1 w:1)
	/// Proof Skipped: PolkadotXcm VersionDiscoveryQueue (max_values: Some(1), max_size: None, mode: Measured)
	/// Storage: PolkadotXcm SafeXcmVersion (r:1 w:0)
	/// Proof Skipped: PolkadotXcm SafeXcmVersion (max_values: Some(1), max_size: None, mode: Measured)
	/// Storage: ParachainSystem HostConfiguration (r:1 w:0)
	/// Proof Skipped: ParachainSystem HostConfiguration (max_values: Some(1), max_size: None, mode: Measured)
	/// Storage: ParachainSystem PendingUpwardMessages (r:1 w:1)
	/// Proof Skipped: ParachainSystem PendingUpwardMessages (max_values: Some(1), max_size: None, mode: Measured)
	fn subscribe_version() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `145`
		//  Estimated: `3610`
		// Minimum execution time: 24_800_000 picoseconds.
		Weight::from_parts(25_270_000, 3610)
			.saturating_add(RocksDbWeight::get().reads(6_u64))
			.saturating_add(RocksDbWeight::get().writes(3_u64))
	}
	/// Storage: PolkadotXcm VersionNotifyTargets (r:0 w:1)
	/// Proof Skipped: PolkadotXcm VersionNotifyTargets (max_values: None, max_size: None, mode: Measured)
	fn unsubscribe_version() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 4_250_000 picoseconds.
		Weight::from_parts(4_390_000, 0)
			.saturating_add(RocksDbWeight::get().writes(1_u64))
	}
	/// Storage: PolkadotXcm SupportedVersion (r:1 w:0)
	/// Proof Skipped: PolkadotXcm SupportedVersion (max_values: None, max_size: None, mode: Measured)
	/// Storage: PolkadotXcm VersionDiscoveryQueue (r:1 w:1)
	/// Proof Skipped: PolkadotXcm VersionDiscoveryQueue (max_values: Some(1), max_size: None, mode: Measured)
	/// Storage: PolkadotXcm SafeXcmVersion (r:1 w:0)
	/// Proof Skipped: PolkadotXcm SafeXcmVersion (max_values: Some(1), max_size: None, mode: Measured)
	/// Storage: ParachainSystem HostConfiguration (r:1 w:0)
	/// Proof Skipped: ParachainSystem HostConfiguration (max_values: Some(1), max_size: None, mode: Measured)
	/// Storage: ParachainSystem PendingUpwardMessages (r:1 w:1)
	/// Proof Skipped: ParachainSystem PendingUpwardMessages (max_values: Some(1), max_size: None, mode: Measured)
	fn initiate_reserve_withdraw() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `145`
		//  Estimated: `3610`
		// Minimum execution time: 22_600_000 picoseconds.
		Weight::from_parts(23_030_000, 3610)
			.saturating_add(RocksDbWeight::get().reads(5_u64))
			.saturating_add(RocksDbWeight::get().writes(2_u64))
	}
	fn burn_asset() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 3_140_000 picoseconds.
		Weight::from_parts(3_340_000, 0)
	}
	fn expect_asset() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 2_540_000 picoseconds.
		Weight::from_parts(2_620_000, 0)
	}
	fn expect_origin() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 2_470_000 picoseconds.
		Weight::from_parts(2_530_000, 0)
	}
	fn expect_error() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 2_400_000 picoseconds.
		Weight::from_parts(2_450_000, 0)
	}
	fn expect_transact_status() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 2_550_000 picoseconds.
		Weight::from_parts(2_620_000, 0)
	}
	/// Storage: PolkadotXcm SupportedVersion (r:1 w:0)
	/// Proof Skipped: PolkadotXcm SupportedVersion (max_values: None, max_size: None, mode: Measured)
	/// Storage: PolkadotXcm VersionDiscoveryQueue (r:1 w:1)
	/// Proof Skipped: PolkadotXcm VersionDiscoveryQueue (max_values: Some(1), max_size: None, mode: Measured)
	/// Storage: PolkadotXcm SafeXcmVersion (r:1 w:0)
	/// Proof Skipped: PolkadotXcm SafeXcmVersion (max_values: Some(1), max_size: None, mode: Measured)
	/// Storage: ParachainSystem HostConfiguration (r:1 w:0)
	/// Proof Skipped: ParachainSystem HostConfiguration (max_values: Some(1), max_size: None, mode: Measured)
	/// Storage: ParachainSystem PendingUpwardMessages (r:1 w:1)
	/// Proof Skipped: ParachainSystem PendingUpwardMessages (max_values: Some(1), max_size: None, mode: Measured)
	fn query_pallet() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `145`
		//  Estimated: `3610`
		// Minimum execution time: 24_889_000 picoseconds.
		Weight::from_parts(25_359_000, 3610)
			.saturating_add(RocksDbWeight::get().reads(5_u64))
			.saturating_add(RocksDbWeight::get().writes(2_u64))
	}
	fn expect_pallet() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 6_100_000 picoseconds.
		Weight::from_parts(6_310_000, 0)
	}
	/// Storage: PolkadotXcm SupportedVersion (r:1 w:0)
	/// Proof Skipped: PolkadotXcm SupportedVersion (max_values: None, max_size: None, mode: Measured)
	/// Storage: PolkadotXcm VersionDiscoveryQueue (r:1 w:1)
	/// Proof Skipped: PolkadotXcm VersionDiscoveryQueue (max_values: Some(1), max_size: None, mode: Measured)
	/// Storage: PolkadotXcm SafeXcmVersion (r:1 w:0)
	/// Proof Skipped: PolkadotXcm SafeXcmVersion (max_values: Some(1), max_size: None, mode: Measured)
	/// Storage: ParachainSystem HostConfiguration (r:1 w:0)
	/// Proof Skipped: ParachainSystem HostConfiguration (max_values: Some(1), max_size: None, mode: Measured)
	/// Storage: ParachainSystem PendingUpwardMessages (r:1 w:1)
	/// Proof Skipped: ParachainSystem PendingUpwardMessages (max_values: Some(1), max_size: None, mode: Measured)
	fn report_transact_status() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `145`
		//  Estimated: `3610`
		// Minimum execution time: 20_170_000 picoseconds.
		Weight::from_parts(20_620_000, 3610)
			.saturating_add(RocksDbWeight::get().reads(5_u64))
			.saturating_add(RocksDbWeight::get().writes(2_u64))
	}
	fn clear_transact_status() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 2_440_000 picoseconds.
		Weight::from_parts(2_520_000, 0)
	}
	fn set_topic() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 2_400_000 picoseconds.
		Weight::from_parts(2_480_000, 0)
	}
	fn clear_topic() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 2_380_000 picoseconds.
		Weight::from_parts(2_470_000, 0)
	}
	fn set_fees_mode() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 2_340_000 picoseconds.
		Weight::from_parts(2_420_000, 0)
	}
	fn unpaid_execution() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 2_420_000 picoseconds.
		Weight::from_parts(2_520_000, 0)
	}
}
